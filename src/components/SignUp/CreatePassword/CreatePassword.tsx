import { FC } from 'react';
import { Typography } from 'components/Typography';
import { TextField } from 'components/TextField';
import { Button } from 'components/Button';
import styles from './CreatePassword.module.scss';

export const CreatePassword: FC = () => (
  <>
    <Typography variant="h1">Create Password</Typography>
    <Typography variant="h5">Create good password, 8 number minimum</Typography>

    <TextField className={styles.password} type="password" label="Enter password" id="create-password-step-password" />
    <TextField className={styles.repeatPassword} type="password" label="Repeat password" id="create-password-step-password-repeat" />

    <Button className={styles.continue}>Continue</Button>
  </>
);
