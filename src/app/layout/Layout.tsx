import { Outlet } from 'react-router';

import styles from './styles.module.css';

export const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
