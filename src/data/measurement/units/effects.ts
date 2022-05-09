import { createEffect } from 'effector';
import { IUnit } from './types';
import { api } from '../../../api/api';
import { camelToSnake, snakeToCamel } from '../../../utls/cases';

export const loadAllMeasurementUnitsFx = createEffect<void, IUnit[]>(async () => {
  const res = await api.get('/measurement/unit/');
  return res.data.data.map(snakeToCamel);
});

export const createMeasurementUnitFx = createEffect<Omit<IUnit, 'uuid'>, IUnit>(async payload => {
  const res = await api.post('/measurement/unit/', {
    ...camelToSnake<IUnit>(payload),
    group: payload.group.uuid,
  });
  return snakeToCamel(res.data.data);
});

export const updateMeasurementUnitFx = createEffect<IUnit, IUnit>(async payload => {
  await api.put(`/measurement/unit/${payload.uuid}/`, {
    ...payload,
    group: payload.group.uuid,
  });
  return payload;
});

export const deleteMeasurementUnitFx = createEffect<string, { uuid: string }>(async uuid => {
  await api.delete(`/measurement/unit/${uuid}/`);
  return { uuid };
});
