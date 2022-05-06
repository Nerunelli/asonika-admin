import { createEffect } from 'effector';
import { IParameter } from './types';
import { api } from '../../api/api';
import { snakeToCamel } from '../../utls/cases';

export const loadAllParametersFx = createEffect<void, IParameter[]>(async () => {
  const res = await api.get('/parameter/');
  return res.data.data.map(snakeToCamel);
});

export const createParameterFx = createEffect<Omit<IParameter, 'uuid'>, IParameter>(
  async payload => {
    const res = await api.post('/parameter/', {
      name: payload.name,
      description: payload.description,
      measurement_group: payload.measurementGroup.uuid,
      type: payload.type,
    });

    return snakeToCamel(res.data.data);
  },
);

export const updateParameterFx = createEffect<IParameter, IParameter>(async payload => {
  await api.put(`/parameter/${payload.uuid}/`, {
    description: payload.description,
    name: payload.name,
    type: payload.type,
    measurement_group: payload.measurementGroup.uuid,
  });

  return payload;
});

export const deleteParameterFx = createEffect<string, string>(async uuid => {
  await api.delete(`/parameter/${uuid}/`);

  return uuid;
});
