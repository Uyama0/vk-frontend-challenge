import { useInfiniteQuery } from 'react-query';

import { catApiHost, catApiKey } from '@/utils/env';

type CatsProps = {
  id: string;
  url: string;
  width: number;
  height: number;
};

type FetcherResponseProps = {
  data: CatsProps[];
  nextPage: number;
};

const fetcher = async (pageNumber: number = 0) => {
  const response = await fetch(
    `${catApiHost}/v1/images/search?limit=25&size=med&mime_types=jpg&format=json&has_breeds=false&include_categories=false&page=${pageNumber}`,
    {
      method: 'GET',
      headers: {
        'x-api-key': catApiKey,
      },
    }
  );
  if (!response.ok) {
    throw new Error('Ошибка при загрузке данных');
  }
  const data = await response.json();

  return { data, nextPage: pageNumber + 1 };
};

export const useCatsQuery = () => {
  const {
    data,
    isError,
    isLoading,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<FetcherResponseProps>(['cats'], () => fetcher(), {
    getNextPageParam: ({ nextPage }) => nextPage,
    staleTime: Infinity,
  });

  return {
    data,
    isError,
    isLoading,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
  };
};
