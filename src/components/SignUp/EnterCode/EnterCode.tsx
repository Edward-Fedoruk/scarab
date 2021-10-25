import { FC, useState } from 'react';
import useDigitInput from 'react-digit-input';
import { Button } from 'components/Button';
import { Typography } from 'components/Typography';
import styles from './EnterCode.module.scss';

export const EnterCode: FC = () => {
  const [value, onChange] = useState('');
  const digits = useDigitInput({
    acceptedCharacters: /^[0-9]$/,
    length: 4,
    value,
    onChange,
  });

  return (
    <>
      <Typography variant="h1">Enter Code</Typography>
      <Typography className={styles.hint} component="p" variant="h5">
        Please enter your email below to ecevie
        your password reset instructions
      </Typography>
      <div className={styles.inputWrapper}>
        {digits.map((digitInput, i) => (
          // since this array wont be rerendered and is static
          // eslint-disable-next-line react/no-array-index-key
          <input className={styles.boxInput} {...digitInput} key={i} />
        ))}
      </div>
      <Button className={styles.resendCode} variant="text" color="secondary">Resend code</Button>
      <Button className={styles.continue}>Continue</Button>
    </>
  );
};
