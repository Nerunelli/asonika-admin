import { createEffect } from 'effector';
import { api } from '../../api/useApi';
import { ICreateManufacturerPayload, IManufacturer, IUpdateManufacturerPayload } from './types';

export const loadManufacturerFx = createEffect<void, IManufacturer[]>(async () => {
  const res = await api.get('/manufacturer/');
  return res.data.data;
});

export const createManufacturerFx = createEffect<ICreateManufacturerPayload, IManufacturer>(
  async ({ name, description }) => {
    const res = await api.post('/manufacturer/', {
      name,
      description,
    });

    return res.data.data;
  },
);

export const updateManufacturerFx = createEffect<IUpdateManufacturerPayload, IManufacturer>(
  async ({ uuid, name, description }) => {
    await api.put<{ data: IManufacturer }>(`/manufacturer/${uuid}/`, { description, name });
    return { uuid, name, description };
  },
);

export const deleteManufacturerFx = createEffect<string, string>(async uuid => {
  await api.delete<{ data: IManufacturer }>(`/manufacturer/${uuid}/`);
  return uuid;
});
