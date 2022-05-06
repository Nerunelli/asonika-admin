import { IGroup } from '../../pages/Reductions';

export interface IParameter {
  uuid: string;
  measurementGroup: IGroup;
  type: number;
  name: string;
  description: string;
}
