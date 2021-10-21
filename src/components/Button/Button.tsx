/* eslint-disable react/button-has-type */
import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

type Props = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

export const Button: FC<Props> = ({
  children, type = 'button', variant = 'contained', className = '', color = 'primary', disabled = false,
}) => {
  const buttonClassNames = clsx(
    styles.button,
    styles[variant],
    styles[color],
    { disabled },
    className,
  );

  return (
    <button className={buttonClassNames} type={type}>{children}</button>
  );
};
