const parentRoute = 'mini-app';

export default {
  MiniAppDashboard: {
    name: 'MiniAppDashboard',
    fullRoute: `${parentRoute}/dashboard`,
    reactRouterRoute: `${parentRoute}/dashboard`,
  },
  MiniAppForm: {
    name: 'MiniAppForm',
    fullRoute: '${parentRoute}/form/:type/:page',
    reactRouterRoute: '${parentRoute}/form/:type/:page',
  },
}
