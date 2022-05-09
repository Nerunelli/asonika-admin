import { measurementUnitDomain } from './domain';
import { IUnit } from './types';
import {
  createMeasurementUnitFx,
  deleteMeasurementUnitFx,
  loadAllMeasurementUnitsFx,
  updateMeasurementUnitFx,
} from './effects';
import { deleteFromStateByUUID, updateStateByUUID } from '../../utils';
import { updateFilteredUnitsEv } from './events';
import { combine, forward } from 'effector';
import { $selectedGroupStore } from '../groups/stores';

export const $measurementUnitsStore = measurementUnitDomain
  .createStore<IUnit[]>([])
  .on(loadAllMeasurementUnitsFx.doneData, (_, data) => data)
  .on(createMeasurementUnitFx.doneData, (state, data) => [...state, data])
  .on(updateMeasurementUnitFx.doneData, (state, data) => updateStateByUUID(state, data))
  .on(deleteMeasurementUnitFx.doneData, (state, data) => deleteFromStateByUUID(state, data.uuid));

const isCurrentGroup = (state: IUnit, uuid: string): boolean => {
  return state.group.uuid === uuid;
};

const $connectionStore = combine({
  units: $measurementUnitsStore,
  group: $selectedGroupStore,
});

forward({
  from: $connectionStore,
  to: updateFilteredUnitsEv,
});

export const $unitsByGroupStore = measurementUnitDomain
  .createStore<IUnit[]>([])
  .on(updateFilteredUnitsEv, (state, stores) => {
    const groupUUID = stores.group?.uuid;

    if (!groupUUID) return [];

    return stores.units.filter(unit => isCurrentGroup(unit, groupUUID));
  });
