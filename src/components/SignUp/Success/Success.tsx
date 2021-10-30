import { FC } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Typography } from 'components/Typography';
import { Button } from 'components/Button';
import SuccessIcon from 'public/svg/success.svg';
import styles from './Success.module.scss';

export const Success: FC = () => (
  <div className={styles.success}>
    <SuccessIcon />
    <Typography className={styles.successHeader} variant="h1">Successful!</Typography>
    <Typography className={styles.description} variant="h5">
      You have succesfully change password. Please use your new passwords
      when logging in.
    </Typography>

    <Button className={styles.enterAccount} variant="text">
      <Link passHref href="/">
        <Typography component="a" variant="buttonText">
          Enter account
        </Typography>
      </Link>
      <Icon className={styles.arrowIcon} icon="bi:arrow-right" />
    </Button>
  </div>
);
