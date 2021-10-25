import { FC, MouseEventHandler, ReactNode } from 'react';
import styles from './IconButton.module.scss';

type Props = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton: FC<Props> = ({ children, onClick }) => (
  <button
    className={styles.iconButton}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);
