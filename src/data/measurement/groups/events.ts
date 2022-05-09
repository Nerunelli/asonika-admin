import { createEvent } from 'effector';
import { IGroup } from './types';

export const selectGroupEv = createEvent<IGroup | null>('selectGroup');

export const clearStoreEv = createEvent('clearStore');
