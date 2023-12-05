export const deleteKey = (state, { payload }) => {
  if (Object.keys(state).includes(payload)) {
    delete state[payload];
  }
};

export const updateProps = (state, action) => {
  return { ...state, ...action.payload };
};