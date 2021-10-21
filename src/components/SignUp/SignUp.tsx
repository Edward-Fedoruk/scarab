import { PickRole } from 'components/PickRole';
import { EnterCode } from 'components/EnterCode';
import styles from './SignUp.module.scss';

export const SignUp = () => (
  <div className={styles.signUp}>
    <EnterCode />
    {/* <PickRole /> */}
  </div>
);
