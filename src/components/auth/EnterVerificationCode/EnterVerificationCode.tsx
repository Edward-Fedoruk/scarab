import { FC, FormEvent, useState } from 'react';
import useDigitInput from 'react-digit-input';
import { Button } from 'components/Button';
import { Typography } from 'components/Typography';
import { useTranslation } from 'next-i18next';
import styles from './EnterVerificationCode.module.scss';

type Props = {
  submit: (code: string) => void; 
}

export const EnterVerificationCode: FC<Props> = ({ submit }) => {
  const { t } = useTranslation('auth');
  const [codeValue, onChange] = useState('');
  const digits = useDigitInput({
    acceptedCharacters: /^[0-9]$/,
    length: 4,
    value: codeValue,
    onChange,
  });
  
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(codeValue);
  };

  const isNextStepDisabled = codeValue.trim().length !== 4;

  return (
    <>
      <Typography variant="h1">{t('Введите код')}</Typography>
      <Typography className={styles.hint} component="p" variant="h5">
        {t('Пожалуйста, введите код который пришел вам на почту')}
      </Typography>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.inputWrapper}>
          {digits.map((digitInput, i) => (
          // since this array wont be rerendered and is static index used as key 
          // eslint-disable-next-line react/no-array-index-key
            <input type="number" className={styles.boxInput} {...digitInput} key={i} />
          ))}
        </div>
        <Button className={styles.resendCode} variant="text" color="secondary">{t('отправить код сново')}</Button>
        <Button type="submit" disabled={isNextStepDisabled} className={styles.continue}>{t('Продолжить', { ns: 'common' })}</Button>
      </form>
    </>
  );
};
