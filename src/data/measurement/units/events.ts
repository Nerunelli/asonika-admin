import { createEvent } from 'effector';
import { IGroup } from '../groups/types';
import { IUnit } from './types';

export const updateFilteredUnitsEv =
  createEvent<{ units: IUnit[]; group: IGroup | null }>('updateFilteredUnits');
