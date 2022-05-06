import { manufacturerDomain } from './domain';
import { IManufacturer } from './types';
import {
  createManufacturerFx,
  deleteManufacturerFx,
  loadManufacturerFx,
  updateManufacturerFx,
} from './effects';
import { deleteFromStateByUUID, updateStateByUUID } from '../utils';

export const $manufacturersStore = manufacturerDomain
  .createStore<IManufacturer[]>([])
  .on(updateManufacturerFx.doneData, (state, data) => updateStateByUUID(state, data))
  .on(deleteManufacturerFx.doneData, (state, data) => deleteFromStateByUUID(state, data))
  .on(loadManufacturerFx.doneData, (state, data) => data)
  .on(createManufacturerFx.doneData, (state, data) => [...state, data]);
