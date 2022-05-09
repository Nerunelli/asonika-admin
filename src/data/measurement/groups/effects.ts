import { api } from '../../../api/api';
import { IGroup } from './types';
import { createEffect } from 'effector';

export const loadAllMeasurementGroupsFx = createEffect<void, IGroup[]>(async () => {
  const res = await api.get('/measurement/group/');
  return res.data.data;
});

export const createMeasurementGroupFx = createEffect<Omit<IGroup, 'uuid'>, IGroup>(
  async payload => {
    const res = await api.post('/measurement/group/', payload);

    return res.data.data;
  },
);

export const updateMeasurementGroupFx = createEffect<IGroup, IGroup>(async payload => {
  await api.put(`/measurement/group/${payload.uuid}/`, payload);

  return payload;
});

export const deleteMeasurementGroupFx = createEffect<string, string>(async uuid => {
  await api.delete(`/measurement/group/${uuid}/`);

  return uuid;
});
