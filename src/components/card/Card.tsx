import { useFavorites } from '@/app/store';

import { Button } from '../button';
import { HeartIcon } from '../heartIcon';

import styles from './styles.module.css';

interface CardProps {
  image: string;
  id: string;
}

export const Card: React.FC<CardProps> = ({ image, id }) => {
  const { toggleFavorite } = useFavorites();

  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="cat image" />
      <Button className={styles.button} onClick={() => toggleFavorite(id)}>
        <HeartIcon />
      </Button>
    </div>
  );
};
