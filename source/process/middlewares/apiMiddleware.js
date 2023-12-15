import { Api } from 'Api';
import { transientSliceTypes } from 'Reducers/transientSlice';

const setLoading = ({ next, options, processing }) => {
  const { key } = options?.loading || {};

  if (!key) return;

  const value = processing ? options.value || true : false;
  next({
    type: transientSliceTypes.updateProps,
    payload: { [options.loading?.key]: value }
  });
};

const handleFinishLoading = ({ next, options }) => {
  const { handleFinsh = true } = options?.loading || {};
  if (!handleFinsh) return;

  setLoading({ next, options, processing: false });
};

export const apiMiddleware = () => {
  return next => action => {
    const { type, actions = {}, promise, ...rest } = action;

    if (type !== Api.apiType) {
      return next(action);
    }

    const { success, options = {}, fail } = actions;

    setLoading({ next, options, processing: true });

    return promise
      ?.then(payload => {
        if (success && success.type) {
          return next({ ...rest, payload, ...success });
        }
      })
      .catch(error => {
        if (fail && fail.type && error) {
          return next({ ...rest, payload: error, ...fail });
        }
      })
      .finally(handleFinishLoading.bind(null, { next, options }));
  };
};
