import { useFavorites } from '@/app/store';

import { Card } from '../card';

import styles from './styles.module.css';

export const FavoriteList: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <div className={styles.list}>
      {favorites.map((item) => {
        return <Card key={item.id} url={item.url} id={item.id} />;
      })}
    </div>
  );
};
