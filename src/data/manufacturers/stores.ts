import { manufacturerDomain } from './domains';
import { IManufacturer } from './types';
import {
  createManufacturerFx,
  deleteManufacturerFx,
  loadManufacturerFx,
  updateManufacturerFx,
} from './effects';
import { deleteManufacturer, updateManufacturer } from './utils';

export const $manufacturersStore = manufacturerDomain
  .createStore<IManufacturer[]>([])
  .on(updateManufacturerFx.doneData, (state, data) => updateManufacturer(state, data))
  .on(deleteManufacturerFx.doneData, (state, data) => deleteManufacturer(state, data))
  .on(loadManufacturerFx.doneData, (state, data) => data)
  .on(createManufacturerFx.doneData, (state, data) => [...state, data]);
