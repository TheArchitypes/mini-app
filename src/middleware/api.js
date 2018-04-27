const callApi = request => request()
  .then(response => response)
  .catch(error => error);

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = 'Call API';

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default () => next => (action) => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const { types } = callAPI;
  const { request, misc } = callAPI;

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  const actionWith = (data) => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  // Dispatch actions with types
  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType }));

  return callApi(request).then(
    response => next(actionWith({
      response,
      type: successType,
      misc,
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened',
      misc,
    })),
  );
};
