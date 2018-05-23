import _ from 'lodash';

export default function routeReplace(route, params) {
  const newRoute = _.clone(route);
  const returnRoute = _.forEach(params, (param) => {
    newRoute.replace(route, params[route]);
  });
  return returnRoute;
};
