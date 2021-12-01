import axios, { AxiosResponse } from 'axios';

export type ApiResponse<T = unknown> = Promise<AxiosResponse<T>>;

export class APIFetcher {
  private API_LINK = 'http://84.201.165.118:8080/api';

  public get<T = unknown>(path: string): ApiResponse<T> {
    return axios.get<T>(`${this.API_LINK}${path}`);
  }

  // public post<T = unknown>() {}
  //
  // public put<>() {}
  //
  // public delete<>() {}
  //
  // private getQuery() {}
}

// ({name: 'Nikita', _limit: 2}) => '?name=Nikita&_limit=2'
// (undefined) => ''
