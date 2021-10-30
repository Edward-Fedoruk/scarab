import { useReducer } from 'react';
import { clamp } from 'src/utils/clamp';
import { UserRole } from 'types/@scarab';

export enum SignUpSteps {
  pickRole = 0,
  enterEmail = 1,
  EnterVerificationCode = 2,
  createPassword = 3,
  success = 4,
}

export enum ActionTypes {
  pickRole = 'pickRole',
  setEmail = 'setEmail',
  EnterVerificationCode = 'EnterVerificationCode',
  createPassword = 'createPassword',
  stepBack = 'stepBack',
}

type Action =  
    { type: ActionTypes.createPassword; payload: string } 
  | { type: ActionTypes.pickRole; payload: UserRole }
  | { type: ActionTypes.setEmail; payload: string }
  | { type: ActionTypes.EnterVerificationCode; payload: string }
  | { type: ActionTypes.stepBack };

type State = {
  step: number;
  role: UserRole;
  email: string;
  code: string;
  password: string;  
}

const initialState: State = {
  step: SignUpSteps.pickRole,
  role: 'customer',
  email: '',
  password: '',
  code: '',
};

const signUpFormReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.stepBack: {
      const nextStep = clamp(SignUpSteps.pickRole, SignUpSteps.createPassword, state.step - 1);
      return { ...state, step: nextStep };
    }
    case ActionTypes.pickRole:
      return { ...state, role: action.payload, step: SignUpSteps.enterEmail };
    case ActionTypes.setEmail:
      return { ...state, email: action.payload, step: SignUpSteps.EnterVerificationCode };
    case ActionTypes.EnterVerificationCode: 
      return { ...state, code: action.payload, step: SignUpSteps.createPassword };
    case ActionTypes.createPassword: 
      return { ...state, password: action.payload, step: SignUpSteps.success };
    default: 
      return state;
  }
};

export const useSignUpReducer = () => useReducer(signUpFormReducer, initialState);
