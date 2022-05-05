
export const updateObject = <S, U>(state: S, updateStateProperties: U) => {
  return {
    ...state,
    ...updateStateProperties,
  };
};