import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import { Icon } from '@iconify/react';
import { TextField } from 'components/TextField';
import { Button } from 'components/Button';
import { logInSchema } from './validationSchema';
import { Typography } from 'components/Typography';
import styles from './SignIn.module.scss';

export const SignIn = () => {
  const { t } = useTranslation(['auth', 'common']);

  const {
    register, 
    handleSubmit, 
    formState: { errors, isValid }, 
  } = useForm({ resolver: yupResolver(logInSchema(t)), mode: 'onChange' });

  const submit = () => { /* */ };

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.signIn}>
      <Typography variant="h1">{t('Войти')}</Typography>
      <TextField 
        id="sign-in-email"
        className={styles.email}
        {...register('email')} 
        error={errors?.email}
        errorMessage={errors?.email?.message}
        type="email"
        label={t('Email')}
      />
      <TextField
        id="sign-in-password"
        className={styles.password}
        {...register('password')}
        error={errors?.email}
        errorMessage={errors?.password?.message}
        label={t('Пароль')}
        type="password"
      />
      <Link passHref href="/reset-password">
        <a className={styles.resetPassword}>
          <Typography color="link" variant="body">{t('Забыл пароль')}</Typography>
        </a>
      </Link>

      <Button className={styles.submit} disabled={!isValid} type="submit">{t('Войти')}</Button>
      <Button className={styles.createAccount} color="secondary" variant="text">
        {t('Создать акаунт')}
        <Icon className={styles.icon} icon="carbon:user-avatar-filled-alt" />
      </Button>
    </form>
  );
};
