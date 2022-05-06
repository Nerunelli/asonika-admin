import { parametersDomain } from './domain';
import {
  createParameterFx,
  deleteParameterFx,
  loadAllParametersFx,
  updateParameterFx,
} from './effects';
import { IParameter } from './types';
import { deleteFromStateByUUID, updateStateByUUID } from '../utils';

export const $parametersStore = parametersDomain
  .createStore<IParameter[]>([])
  .on(loadAllParametersFx.doneData, (_, data) => data)
  .on(createParameterFx.doneData, (state, data) => [...state, data])
  .on(updateParameterFx.doneData, (state, data) => updateStateByUUID(state, data))
  .on(deleteParameterFx.doneData, (state, uuid) => deleteFromStateByUUID(state, uuid));
