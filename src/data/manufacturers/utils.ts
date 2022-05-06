import { IManufacturer } from './types';

export const updateManufacturer = (
  state: IManufacturer[],
  manufacturer: IManufacturer,
): IManufacturer[] => state.map(el => (el.uuid === manufacturer.uuid ? manufacturer : el));

export const deleteManufacturer = (state: IManufacturer[], uuid: string): IManufacturer[] =>
  state.filter(el => el.uuid !== uuid);
