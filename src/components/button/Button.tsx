import { PropsWithChildren } from 'react';

import clsx from 'clsx';

import { WithClassName } from '@/utils/types';

import styles from './styles.module.css';

type ButtonProps = WithClassName & {
  onClick?: () => void;
} & PropsWithChildren;

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button onClick={onClick} className={clsx(styles.button, className)}>
      {children}
    </button>
  );
};
