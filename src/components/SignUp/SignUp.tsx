import { FC, useReducer, useState } from 'react';
import { Icon } from '@iconify/react';
import { PickRole } from 'components/SignUp/PickRole';
import { EnterEmail } from 'components/SignUp/EnterEmail';
import { EnterCode } from 'components/SignUp/EnterCode';
import { CreatePassword } from 'components/SignUp/CreatePassword';
import { IconButton } from 'components/IconButton';
import styles from './SignUp.module.scss';

export const SignUp: FC = () => {
  const [step, setStep] = useState(3);
  const [signUpFields, setSignUpFields] = useState();

  const makeStep = (direction: 'next' | 'prev') => () => setStep((state) => {
    const nextStep = state + direction === 'next' ? 1 : -1;

    const minStep = 0;
    const maxStep = 3;

    const clampedNextStep = Math.min(Math.max(nextStep, minStep), maxStep);

    return clampedNextStep;
  });

  return (
    <div className={styles.signUp}>
      {step > 0 && <IconButton onClick={makeStep('prev')}><Icon className={styles.arrow} icon="bi:arrow-left" /></IconButton>}
      <div className={styles.stepsWrapper}>
        {step === 0 && <PickRole submit={makeStep('next')} />}
        {step === 1 && <EnterEmail />}
        {step === 2 && <EnterCode />}
        {step === 3 && <CreatePassword />}
      </div>
    </div>
  );
};
