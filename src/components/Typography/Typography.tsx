import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Typography.module.scss';

type Props = {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'buttonText';
  color?: 'primary' | 'secondary';
  className?: string;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'a';
  href?: string;
}

export const Typography: FC<Props> = ({
  variant = 'body', color = 'secondary', className = '', component = 'span', children, href,
}) => {
  const typographyClassName = clsx(
    styles[variant],
    styles[color],
    className,
  );

  // eslint-disable-next-line no-undef
  const Tag = `${component}` as keyof JSX.IntrinsicElements;

  return (
    <Tag href={href} className={typographyClassName}>{children}</Tag>
  );
};
