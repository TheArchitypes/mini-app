const parentRoute = '/mini-app';

export default {
  MiniAppDashboard: {
    name: 'MiniAppDashboard',
    fullRoute: `${parentRoute}/dashboard`,
    reactRouterRoute: `${parentRoute}/dashboard`,
  },
  TraditionalMortgageForm: {
    name: 'TraditionalMortgageForm',
    fullRoute: `${parentRoute}/traditional-mortgage-form/:page`,
    reactRouterRoute: `${parentRoute}/traditional-mortgage-form/:page`,
  },
  MissionStatement: {
    name: 'MissionStatement',
    fullRoute: `${parentRoute}/mission-statement`,
    reactRouterRoute: `${parentRoute}/mission-statement`,
  }
}
