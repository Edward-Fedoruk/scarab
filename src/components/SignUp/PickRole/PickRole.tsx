import { FC } from 'react';
import { Button } from 'components/Button';
import { Typography } from 'components/Typography';
import styles from './PickRole.module.scss';

type Props = {
  submit: () => void;
}

export const PickRole: FC<Props> = ({ submit }) => (
  <div className={styles.pickRole}>
    <Typography className={styles.header} variant="h1" component="h1">Pick Role</Typography>
    <div className={styles.choices}>
      <Button>Customer</Button>
      <Typography className={styles.or} variant="h3">or</Typography>
      <Button onClick={submit} className={styles.employeeButton} variant="outlined" color="secondary">Employee</Button>
    </div>
  </div>
);
