import { measurementGroupDomain } from './domain';
import { IGroup } from './types';
import {
  createMeasurementGroupFx,
  deleteMeasurementGroupFx,
  loadAllMeasurementGroupsFx,
  updateMeasurementGroupFx,
} from './effects';
import { deleteFromStateByUUID, updateStateByUUID } from '../../utils';

export const $measurementGroupsStore = measurementGroupDomain
  .createStore<IGroup[]>([])
  .on(loadAllMeasurementGroupsFx.doneData, (_, data) => data)
  .on(createMeasurementGroupFx.doneData, (state, data) => [...state, data])
  .on(updateMeasurementGroupFx.doneData, (state, data) => updateStateByUUID(state, data))
  .on(deleteMeasurementGroupFx.doneData, (state, data) => deleteFromStateByUUID(state, data));
