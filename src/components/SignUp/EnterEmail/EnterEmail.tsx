import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/Button';
import { TextField } from 'components/TextField';
import { Typography } from 'components/Typography';
import { emailSchema } from './validationSchema';
import { useTranslation } from 'next-i18next';
import styles from './EnterEmail.module.scss';

type Props = {
  submit: (email: string) => void;
}

type Inputs = {
  email: string;
}

export const EnterEmail: FC<Props> = ({ submit }) => {
  const { t } = useTranslation(['auth', 'common']);
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isValid }, 
  } = useForm({ resolver: yupResolver(emailSchema(t)), mode: 'onTouched' });

  const onSubmit: SubmitHandler<Inputs> = (data) => submit(data.email);
  
  return (
    <form className={styles.emailForm} onSubmit={handleSubmit(onSubmit)}>
      <legend>
        <Typography variant="h1">{t('Введите email')}</Typography>
      </legend>
      
      <TextField 
        {...register('email')} 
        error={errors?.email} 
        errorMessage={errors?.email?.message} 
        className={styles.emailInput} 
        id="email-form-step"
        type="email" 
        label="Email"
      />
      <Button type="submit" disabled={!isValid} className={styles.continue}>{t('Продолжить', { ns: 'common' })}</Button>
    </form>
  );
};
