import { Outlet } from 'react-router';

import { Header } from '@/components/header';

import styles from './styles.module.css';

export const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
