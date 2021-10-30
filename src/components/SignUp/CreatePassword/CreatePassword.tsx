import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Typography } from 'components/Typography';
import { TextField } from 'components/TextField';
import { Button } from 'components/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { createPasswordSchema } from './validationSchema';
import styles from './CreatePassword.module.scss';

type Props = {
  submit: (password: string) => void
}

type Inputs = {
  password: string;
  repeatPassword: string;
}

export const CreatePassword: FC<Props> = ({ submit }) => {
  const {
    register, 
    handleSubmit, 
    formState: { errors, isValid }, 
  } = useForm({ resolver: yupResolver(createPasswordSchema), mode: 'onTouched' });

  const onSubmit: SubmitHandler<Inputs> = (data) => submit(data.password);

  return (
    <form className={styles.createPassword} onSubmit={handleSubmit(onSubmit)}>
      <legend>
        <Typography variant="h1">Create Password</Typography>
        <Typography component="div" variant="h5">Create good password, 8 number minimum</Typography>
      </legend>

      <TextField 
        {...register('password')}
        className={styles.password}
        error={errors?.password}
        errorMessage={errors?.password?.message}
        type="password"
        label="Enter password"
        id="create-password-step-password"
      />
      <TextField 
        {...register('repeatPassword')}
        className={styles.repeatPassword}
        error={errors?.repeatPassword}
        errorMessage={errors?.repeatPassword?.message}
        type="password"
        label="Repeat password"
        id="create-password-step-password-repeat"
      />

      <Button disabled={!isValid} className={styles.continue}>Continue</Button>
    </form>
  );
};
