import { FC } from 'react';
import { UserRole } from 'types/@scarab';
import { Button } from 'components/Button';
import { Typography } from 'components/Typography';
import styles from './PickRole.module.scss';

type Props = {
  submit: (role: UserRole) => void;
}

export const PickRole: FC<Props> = ({ submit }) => (
  <div className={styles.pickRole}>
    <Typography className={styles.header} variant="h1" component="h1">Pick Role</Typography>
    <div className={styles.choices}>
      <Button onClick={() => submit('customer')}>Customer</Button>
      <Typography className={styles.or} variant="h3">or</Typography>
      <Button onClick={() => submit('employee')} className={styles.employeeButton} variant="outlined" color="secondary">Employee</Button>
    </div>
  </div>
);
