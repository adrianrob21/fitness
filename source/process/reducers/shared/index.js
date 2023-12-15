export const deleteKey = (state, { key }) => {
  if (Object.keys(state).includes(key)) {
    delete state[key];
  }
};

export const updateProps = (state, { payload }) => {
  return { ...state, ...payload };
};

export const reduxMock = (state, _action) => state;
