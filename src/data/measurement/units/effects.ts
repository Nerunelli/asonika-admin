import { createEffect } from 'effector';
import { IUnit } from './types';
import { api } from '../../../api/api';
import { snakeToCamel } from '../../../utls/cases';

export const loadAllMeasurementUnitsFx = createEffect<void, IUnit[]>(async () => {
  const res = await api.get('/measurement/unit/');
  return res.data.data.map(snakeToCamel);
});

export const createMeasurementUnitFx = createEffect<Omit<IUnit, 'uuid'>, IUnit>(async payload => {
  const res = await api.post('/measurement/unit/', {
    group: payload.group.uuid,
    name: payload.name,
    multiplier: payload.multiplier,
    min_value: payload.minValue,
    min_is_included: payload.minIsIncluded,
    max_value: payload.maxValue,
    max_is_included: payload.maxIsIncluded,
  });
  return snakeToCamel(res.data.data);
});

export const updateMeasurementUnitFx = createEffect<IUnit, IUnit>(async payload => {
  await api.put(`/measurement/unit/${payload.uuid}/`, {
    name: payload.name,
    multiplier: payload.multiplier,
    min_value: payload.minValue,
    min_is_included: payload.minIsIncluded,
    max_value: payload.maxValue,
    max_is_included: payload.maxIsIncluded,
    group: payload.group.uuid,
  });
  return payload;
});

export const deleteMeasurementUnitFx = createEffect<string, string>(async uuid => {
  await api.delete(`/measurement/unit/${uuid}/`);
  return uuid;
});
