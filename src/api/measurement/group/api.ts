import { Group } from './types';
import { APIFetcher, ApiResponse } from '../../APIFetcher';

const api = new APIFetcher();

const path = '/measurement/group';

export const getAllGroups = (): ApiResponse<Group[]> => {
  return api.get<Group[]>(path);
};

export const getGroupByUUID = (uuid: string): ApiResponse<Group> => {
  return api.get<Group>(`${path}/${uuid}`);
};
