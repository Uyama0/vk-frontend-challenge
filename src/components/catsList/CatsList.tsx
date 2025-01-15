import { Card } from '../card';
import { useCatsQuery } from '@/api';
import { LoadErrorWrapper } from '../loadErrorWrapper';
import { useInfiniteScroll } from '@/hooks';

import styles from './styles.module.css';

export const CatsList: React.FC = () => {
  const { isError, data, isLoading, fetchNextPage, isFetching } =
    useCatsQuery();

  useInfiniteScroll(isFetching, fetchNextPage);

  const catsData = data?.pages.flatMap((page) => page.data);

  return (
    <LoadErrorWrapper isLoading={isLoading} isError={isError}>
      <div className={styles.list}>
        {catsData?.map((item) => {
          return <Card key={item.id} url={item.url} id={item.id} />;
        })}
      </div>
      {isFetching && <p>... загружаем еще котиков ...</p>}
    </LoadErrorWrapper>
  );
};
