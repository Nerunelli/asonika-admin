export const updateStateByUUID = <T extends Record<'uuid', string>>(
  state: T[],
  updateState: T,
): T[] => {
  return state.map(el => (el.uuid === updateState.uuid ? updateState : el));
};

export const deleteFromStateByUUID = <T extends Record<'uuid', string>>(
  state: T[],
  uuid: string,
): T[] => {
  return state.filter(el => el.uuid !== uuid);
};
