import { IGroup } from '../groups/types';

export interface IUnit {
  uuid: string;
  name: string;
  multiplier: number;
  minValue: number;
  minIsIncluded: boolean;
  maxValue: number;
  maxIsIncluded: boolean;
  group: IGroup;
}
