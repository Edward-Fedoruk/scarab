import { FC } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Typography } from 'components/Typography';
import { Button } from 'components/Button';
import SuccessIcon from 'public/svg/success.svg';
import { useTranslation } from 'next-i18next';
import styles from './Success.module.scss';

type Props = {
  message: string;
}

export const Success: FC<Props> = ({ message }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.success}>
      <SuccessIcon />
      <Typography className={styles.successHeader} variant="h1">{t('Победа!')}</Typography>
      <Typography className={styles.description} variant="h5">{message}</Typography>

      <Button className={styles.enterAccount} variant="text">
        <Link passHref href="/log-in">
          <a className={styles.link}>
            <Typography variant="buttonText">{t('Войти в акаунт')}</Typography>
          </a>
        </Link>
        <Icon className={styles.arrowIcon} icon="bi:arrow-right" />
      </Button>
    </div>
  );
};
