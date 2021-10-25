import clsx from 'clsx';
import { FC, ReactNode, useState } from 'react';
import { Icon } from '@iconify/react';
import { useFocus } from 'src/hooks/useFocuse';
import { IconButton } from 'components/IconButton';
import styles from './TextField.module.scss';

type Props = {
  defaultValue?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  fullWidth?: boolean;
  className?: string;
  id: string;
  label: ReactNode;
  type: 'text' | 'tel' | 'password' | 'number' | 'email' | 'url';
}

export const TextField: FC<Props> = ({
  id,
  label,
  type = 'text',
  fullWidth = false,
  error = false,
  disabled = false,
  errorMessage = '',
  className = '',
  defaultValue,
}) => {
  const { bind, isFocused } = useFocus();

  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => setPasswordVisibility((state) => !state);

  const textFieldClassName = clsx(
    styles.textField,
    { fullWidth },
    { [styles.disabled]: disabled },
    className,
  );

  const inputWrapperClass = clsx(
    styles.inputWrapper,
    { [styles.focused]: isFocused },
    { [styles.error]: error },
  );

  const watchPasswordIcon = clsx(
    styles.watchPasswordIcon,
    { [styles.watchPasswordActive]: isPasswordVisible },
  );

  const fieldType = type === 'password' && isPasswordVisible ? 'text' : type;

  return (
    <label htmlFor={id} className={textFieldClassName}>
      <span className={styles.label}>{label}</span>
      <div className={inputWrapperClass}>
        <input
          onFocus={bind.onFocus}
          onBlur={bind.onBlur}
          className={styles.input}
          id={id}
          type={fieldType}
          value={defaultValue}
          aria-describedby={`${id}_error`}
        />
        {error && <Icon className={styles.errorIcon} icon="bx:bx-error" />}
        {type === 'password' && !error && (
          <IconButton onClick={togglePasswordVisibility}>
            <Icon className={watchPasswordIcon} icon="bi:eye-fill" />
          </IconButton>
        )}
      </div>
      {errorMessage && error && <span id={`${id}_error`} className={styles.errorMessage} role="status" aria-live="polite">{errorMessage}</span>}
    </label>
  );
};
