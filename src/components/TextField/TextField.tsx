import clsx from 'clsx';
import {
  FocusEvent, 
  ReactNode, 
  useState, 
  ChangeEventHandler,
  forwardRef,
} from 'react';
import { Icon } from '@iconify/react';
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
  onChange?: ChangeEventHandler<HTMLInputElement>; 
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void; 
  name?: string; 
}

export const TextField = forwardRef<HTMLInputElement, Props>(({
  id,
  label,
  type = 'text',
  fullWidth = false,
  error = false,
  disabled = false,
  errorMessage = '',
  className = '',
  defaultValue,
  onChange,
  onBlur,
  name,
}, ref) => {
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
          onBlur={onBlur}
          onChange={onChange}
          className={styles.input}
          id={id}
          type={fieldType}
          name={name}
          value={defaultValue}
          ref={ref}
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
});
