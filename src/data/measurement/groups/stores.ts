import { measurementGroupDomain } from './domain';
import { IGroup } from './types';
import {
  createMeasurementGroupFx,
  deleteMeasurementGroupFx,
  loadAllMeasurementGroupsFx,
  updateMeasurementGroupFx,
} from './effects';
import { deleteFromStateByUUID, updateStateByUUID } from '../../utils';
import { clearStoreEv, selectGroupEv } from './events';

export const $measurementGroupsStore = measurementGroupDomain
  .createStore<IGroup[]>([])
  .on(loadAllMeasurementGroupsFx.doneData, (_, data) => data)
  .on(createMeasurementGroupFx.doneData, (state, data) => [...state, data])
  .on(updateMeasurementGroupFx.doneData, (state, data) => updateStateByUUID(state, data))
  .on(deleteMeasurementGroupFx.doneData, (state, data) => deleteFromStateByUUID(state, data));

export const $selectedGroupStore = measurementGroupDomain
  .createStore<IGroup | null>(null)
  .on(selectGroupEv, (_, data) => data)
  .on(clearStoreEv, () => null);
