import { useEffect, useRef, useCallback } from 'react';

export const useInfiniteScroll = (
  isFetching: boolean,
  fetchNextPage: () => void
) => {
  const isFetchingRef = useRef(isFetching);

  useEffect(() => {
    isFetchingRef.current = isFetching;
  }, [isFetching]);

  const handleScroll = useCallback(() => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      if (!isFetchingRef.current) {
        fetchNextPage();
      }
    }
  }, [fetchNextPage]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return function () {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
};
