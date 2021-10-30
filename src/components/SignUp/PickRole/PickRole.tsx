import { FC } from 'react';
import { UserRole } from 'types/@scarab';
import { Button } from 'components/Button';
import { Typography } from 'components/Typography';
import { useTranslation } from 'next-i18next';
import styles from './PickRole.module.scss';

type Props = {
  submit: (role: UserRole) => void;
}

export const PickRole: FC<Props> = ({ submit }) => {
  const { t } = useTranslation(['auth', 'common']);
  return (
    <div className={styles.pickRole}>
      <Typography className={styles.header} variant="h1" component="h1">{t('выберите роль')}</Typography>
      <div className={styles.choices}>
        <Button onClick={() => submit('customer')}>{t('заказчик', { ns: 'common' })}</Button>
        <Typography className={styles.or} variant="h3">{t('или', { ns: 'common' })}</Typography>
        <Button 
          onClick={() => submit('employee')}
          className={styles.employeeButton}
          variant="outlined"
          color="secondary"
        >
          {t('исполнитель', { ns: 'common' })}
        </Button>
      </div>
    </div>
  );
};
