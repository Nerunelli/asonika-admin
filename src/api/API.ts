import axios, { AxiosResponse } from 'axios';

export type ApiResponse<T = unknown> = Promise<AxiosResponse<T>>;

export const API = axios.create({
  baseURL: 'http://84.201.165.118:8080/api',
});
