import { useNavigate, useLocation } from 'react-router';

import { Button } from '../button';

import styles from './styles.module.css';

export const ErrorState: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.location.reload();
    }
  };

  return (
    <div className={styles.error_wrapper}>
      <div className={styles.error_container}>
        <h2>Произошла ошибка</h2>
        <Button className={styles.button} onClick={handleGoHome}>
          Вернуться главную страницу
        </Button>
      </div>
    </div>
  );
};
