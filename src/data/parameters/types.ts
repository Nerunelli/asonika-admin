import { IGroup } from '../measurement/groups/types';

export interface IParameter {
  uuid: string;
  measurementGroup: IGroup;
  type: number;
  name: string;
  description: string;
}
