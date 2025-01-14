import { Card } from '../card';

import styles from './styles.module.css';

export const CatsList: React.FC = () => {
  return (
    <div className={styles.list}>
      {Array.from({ length: 15 }).map(() => {
        return <Card />;
      })}
    </div>
  );
};
