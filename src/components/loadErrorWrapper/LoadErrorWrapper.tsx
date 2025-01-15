import { PropsWithChildren } from 'react';

import { ErrorState } from '../errorState';
import { CircularProgress } from '../circularProgress';

import styles from './styles.module.css';

type LoadErrorWrapperProps = {
  isLoading: boolean;
  isError: boolean;
} & PropsWithChildren;

export const LoadErrorWrapper: React.FC<LoadErrorWrapperProps> = ({
  isLoading,
  isError,
  children,
}) => {
  return (
    <>
      {isLoading ? (
        <div className={styles.loading}>{<CircularProgress />}</div>
      ) : isError ? (
        <ErrorState />
      ) : (
        <>{children}</>
      )}
    </>
  );
};
