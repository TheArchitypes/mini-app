import _ from 'lodash';

export default function getRouteWithParams(route, params = {}) {
  if (!route) return null;
  let linkString = route;

  _.each(params, (value, key) => {
    linkString = linkString.replace(`:${key}`, value);
  });

  return linkString;
}
