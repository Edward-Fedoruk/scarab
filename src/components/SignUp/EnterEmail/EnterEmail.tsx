import { Button } from 'components/Button';
import { TextField } from 'components/TextField';
import { Typography } from 'components/Typography';
import { FC } from 'react';
import styles from './EnterEmail.module.scss';

export const EnterEmail: FC = () => (
  <>
    <Typography variant="h1">Enter Email</Typography>
    <TextField className={styles.emailInput} id="email-form-step" type="email" label="Email" />
    <Button className={styles.continue}>Continue</Button>
  </>
);
