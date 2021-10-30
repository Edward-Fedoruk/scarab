import { FC } from 'react';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { UserRole } from 'types/@scarab';
import { PickRole } from 'components/SignUp/PickRole';
import { EnterEmail } from 'components/SignUp/EnterEmail';
import { EnterVerificationCode } from 'components/SignUp/EnterVerificationCode';
import { CreatePassword } from 'components/SignUp/CreatePassword';
import { Success } from 'components/SignUp/Success';
import { IconButton } from 'components/IconButton';
import { ActionTypes, useSignUpReducer, SignUpSteps } from './useSignUpState';
import styles from './SignUp.module.scss';

export const SignUp: FC = () => {
  const { t } = useTranslation('auth');
  const [state, dispatch] = useSignUpReducer();

  const { step: currentStep } = state;

  const stepClassName = (activeStep: number) => clsx(
    styles.step,
    { [styles.activeStep]: currentStep === activeStep },
  );

  const stepBack = () => dispatch({ type: ActionTypes.stepBack });
  const submitPickRole = (role: UserRole) => dispatch({ 
    type: ActionTypes.pickRole, 
    payload: role, 
  });
  const submitEmail = (email: string) => dispatch({ type: ActionTypes.setEmail, payload: email }); 
  const submitCode = (code: string) => dispatch({ 
    type: ActionTypes.EnterVerificationCode, 
    payload: code, 
  }); 
  const submitPassword = (password: string) => dispatch({ 
    type: ActionTypes.createPassword, 
    payload: password, 
  });

  const isBackBtnVisible = currentStep !== SignUpSteps.pickRole 
  && currentStep !== SignUpSteps.success;

  return (
    <div className={styles.signUp}>
      {isBackBtnVisible && <IconButton onClick={stepBack}><Icon className={styles.arrow} icon="bi:arrow-left" /></IconButton>}
      <div className={styles.stepsWrapper}>
        <div className={stepClassName(SignUpSteps.pickRole)}>
          <PickRole submit={submitPickRole} />
        </div>
        <div className={stepClassName(SignUpSteps.enterEmail)}>
          <EnterEmail submit={submitEmail} />
        </div>
        <div className={stepClassName(SignUpSteps.EnterVerificationCode)}>
          <EnterVerificationCode submit={submitCode} />
        </div>
        <div className={stepClassName(SignUpSteps.createPassword)}>
          <CreatePassword submit={submitPassword} />
        </div>
        <div className={stepClassName(SignUpSteps.success)}>
          <Success message={t('Вы успешно создали акаунт')} />
        </div>
      </div>
    </div>
  );
};
