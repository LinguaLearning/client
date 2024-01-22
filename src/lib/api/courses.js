import useSWR from 'swr';
import { fetcher } from '../utilities/helper';

export const useCourses = () => {
  const {data, isLoading, error} = useSWR('http://localhost:2022/getCourses', fetcher);

  return {data: data ? data.response : [], isLoading, error}
}