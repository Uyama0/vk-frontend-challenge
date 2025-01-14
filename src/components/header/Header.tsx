import { Link } from 'react-router-dom';

import { Button } from '../button';

import styles from './styles.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <Button className={styles.button}>Все котики</Button>
      </Link>
      <Link to="/favorites" className={styles.link}>
        <Button className={styles.button}>Любимые котики</Button>
      </Link>
    </header>
  );
};
