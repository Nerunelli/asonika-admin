import { UseFetch, useFetch as IUseFetch, UseFetchArgs } from 'use-http';
import { APILink } from "./API";

export const useFetch = <T extends unknown>(...args: UseFetchArgs): UseFetch<T> => {
  return IUseFetch(APILink, ...args);
};
