import { Button } from '../button';
import { HeartIcon } from '../heartIcon';

import styles from './styles.module.css';

interface CardProps {
  image: string;
}

export const Card: React.FC<CardProps> = ({ image }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="cat image" />
      <Button className={styles.button}>
        <HeartIcon />
      </Button>
    </div>
  );
};
