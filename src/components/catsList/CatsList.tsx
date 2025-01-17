import { Card } from '../card';
import { useCatsQuery } from '@/api';
import { LoadErrorWrapper } from '../loadErrorWrapper';
import { InfiniteScroll } from '../infiniteScroll';

import styles from './styles.module.css';

export const CatsList: React.FC = () => {
  const { isError, data, isLoading, fetchNextPage, isFetching } =
    useCatsQuery();

  const catsData = data?.pages.flatMap((page) => page.data);

  return (
    <LoadErrorWrapper isLoading={isLoading} isError={isError}>
      <InfiniteScroll isFetching={isFetching} fetchNextPage={fetchNextPage}>
        <div className={styles.list}>
          {catsData?.map((item) => {
            return <Card key={item.id} url={item.url} id={item.id} />;
          })}
        </div>
        {isFetching && <p>... загружаем еще котиков ...</p>}
      </InfiniteScroll>
    </LoadErrorWrapper>
  );
};
