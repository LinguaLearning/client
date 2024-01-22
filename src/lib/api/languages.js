import useSWR from 'swr';
import { fetcher } from '../utilities/helper';

export const useLanguages = () => {
  const {data, isLoading, error} = useSWR('http://localhost:2022/getLanguages', fetcher);

  return {data: data ? data.response : [], isLoading, error}
}