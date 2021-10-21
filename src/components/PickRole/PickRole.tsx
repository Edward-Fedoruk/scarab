import { Button } from 'components/Button';
import { Typography } from 'components/Typography';
import styles from './PickRole.module.scss';

export const PickRole = () => (
  <>
    <Typography className={styles.header} variant="h5" component="h1">Pick Role</Typography>
    <div className={styles.choices}>
      <Button>Customer</Button>
      <Typography className={styles.or} variant="h3">or</Typography>
      <Button className={styles.employeeButton} variant="outlined" color="secondary">Employee</Button>
    </div>
  </>
);
