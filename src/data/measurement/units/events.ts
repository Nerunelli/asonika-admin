import { createEvent } from 'effector';
import { IUnit } from './types';

export const filterMeasurementUnitsByGroupEv = createEvent<string>('filterMeasurementUnitsByGroup');
export const filterUnitsEv = createEvent<IUnit[]>('filterUnits');
