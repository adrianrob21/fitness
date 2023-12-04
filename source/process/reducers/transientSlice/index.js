import { createSlice } from '@reduxjs/toolkit';

import { findTrueValues } from 'Helpers';
import validations from 'Helpers/validations';

import { updateProps } from '../shared';

const initialState = {};

const reset = () => initialState;

const updatePropsWithValidation = (state, action) => {
  const keyToValidate = Object.keys(action.payload)[0];

  const validationList = validations[keyToValidate] ? validations[keyToValidate] : [];
  const noValidations = validationList.length === 0;

  const allValid = [];

  Object.values(validationList).forEach(validation => {
    allValid.push(validation.valid(action.payload[keyToValidate]));
  });

  return {
    ...state,
    [keyToValidate]: {
      value: action.payload[keyToValidate],
      allValid: noValidations || allValid.every(findTrueValues),
      notDirty: !action.payload[keyToValidate].length
    }
  };
};

export const transientSlice = createSlice({
  name: 'transientSlice',
  initialState,
  reducers: {
    reset,
    updateProps,
    updatePropsWithValidation
  }
});

export const transientSliceActions = transientSlice.actions;

export const transientSliceTypes = {
  reset: transientSlice.actions.reset.type,
  updateProps: transientSlice.actions.updateProps.type,
  updatePropsWithValidation: transientSlice.actions.updatePropsWithValidation.type
};

export const transientSelector = state => state.transientSlice;

export default transientSlice.reducer;
