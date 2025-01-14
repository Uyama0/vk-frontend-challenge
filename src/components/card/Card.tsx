import { Button } from '../button';
import { HeartIcon } from '../heartIcon';

import styles from './styles.module.css';

export const Card: React.FC = () => {
  return (
    <div className={styles.card}>
      <Button className={styles.button}>
        <HeartIcon />
      </Button>
    </div>
  );
};
