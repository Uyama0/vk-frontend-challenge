import { useFavorites } from '@/app/store';

import { Button } from '../button';
import { HeartIcon } from '../heartIcon';

import styles from './styles.module.css';

interface CardProps {
  url: string;
  id: string;
}

export const Card: React.FC<CardProps> = ({ url, id }) => {
  const { toggleFavorite } = useFavorites();

  return (
    <div className={styles.card}>
      <img className={styles.image} src={url} alt="cat image" />
      <Button
        className={styles.button}
        onClick={() => toggleFavorite({ id, url })}
      >
        <HeartIcon />
      </Button>
    </div>
  );
};
