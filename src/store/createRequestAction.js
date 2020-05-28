export const createRequestAction = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAIL = `${type}_FAIL`;
  return [type, SUCCESS, FAIL];
};
