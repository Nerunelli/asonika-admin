import { createEffect } from 'effector';
import { api } from '../../api/useApi';
import { ICreateManufacturerPayload, IManufacturer, IUpdateManufacturerPayload } from './types';

export const loadManufacturerFx = createEffect<() => Promise<IManufacturer[]>>(async () => {
  const res = await api.get('/manufacturer/');
  return res.data.data;
});

export const createManufacturerFx = createEffect<
  (_payload: ICreateManufacturerPayload) => Promise<IManufacturer>
>(async ({ name, description }) => {
  const res = await api.post('/manufacturer/', {
    name,
    description,
  });

  return res.data.data;
});

export const updateManufacturerFx = createEffect<
  (_payload: IUpdateManufacturerPayload) => Promise<IManufacturer>
>(async ({ uuid, name, description }) => {
  await api.put<{ data: IManufacturer }>(`/manufacturer/${uuid}/`, { description, name });
  return { uuid, name, description };
});

export const deleteManufacturerFx = createEffect<(_uuid: string) => Promise<string>>(async uuid => {
  await api.delete<{ data: IManufacturer }>(`/manufacturer/${uuid}/`);
  return uuid;
});
