import { useQuery } from 'react-query';

import { Card } from '../card';
import { fetchCats } from '@/api';

import styles from './styles.module.css';

type CatsProps = {
  breeds: any[];
  id: string;
  url: string;
  width: number;
  height: number;
};

export const CatsList: React.FC = () => {
  const { data, error, isLoading } = useQuery<CatsProps[]>('cats', fetchCats);

  if (error) {
    return;
  }
  if (isLoading) {
    return;
  }

  return (
    <div className={styles.list}>
      {data?.map((item) => {
        return <Card key={item.id} image={item.url} id={item.id} />;
      })}
    </div>
  );
};
