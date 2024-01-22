import useSWR from 'swr';
import { fetcher } from '../utilities/helper';

export const useLessons = () => {
  const {data, isLoading, error} = useSWR('http://localhost:2022/getLessons', fetcher);

  return {data: data ? data.response : [], isLoading, error}
}