import { measurementUnitDomain } from './domain';
import { IUnit } from './types';
import {
  createMeasurementUnitFx,
  deleteMeasurementUnitFx,
  loadAllMeasurementUnitsFx,
  updateMeasurementUnitFx,
} from './effects';
import { deleteFromStateByUUID, updateStateByUUID } from '../../utils';
import { filterMeasurementUnitsByGroupEv, filterUnitsEv } from './events';
import { sample } from 'effector';

export const $measurementUnitsStore = measurementUnitDomain
  .createStore<IUnit[]>([])
  .on(loadAllMeasurementUnitsFx.doneData, (_, data) => data)
  .on(createMeasurementUnitFx.doneData, (state, data) => [...state, data])
  .on(updateMeasurementUnitFx.doneData, (state, data) => updateStateByUUID(state, data))
  .on(deleteMeasurementUnitFx.doneData, (state, data) => deleteFromStateByUUID(state, data));

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
sample({
  clock: filterMeasurementUnitsByGroupEv,
  source: $measurementUnitsStore,
  fn: (state, uuid) => state.filter(el => el.group.uuid === uuid),
  target: filterUnitsEv,
});

export const $unitsByGroupStore = measurementUnitDomain
  .createStore<IUnit[]>([])
  .on(filterUnitsEv, (_, data) => data);
