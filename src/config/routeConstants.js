const parentRoute = '/mini-app';

export default {
  MiniAppDashboard: {
    name: 'MiniAppDashboard',
    fullRoute: `${parentRoute}/dashboard`,
    reactRouterRoute: `${parentRoute}/dashboard`,
  },
  LoanDashboard: {
    name: 'LoanDashboard',
    fullRoute: `${parentRoute}/loan`,
    reactRouterRoute: `${parentRoute}/loan`,
  },
  TraditionalMortgageForm: {
    name: 'TraditionalMortgageForm',
    fullRoute: `${parentRoute}/traditional-mortgage-form/:page`,
    reactRouterRoute: `${parentRoute}/traditional-mortgage-form/:page`,
  },
  ReverseMortgageForm: {
    name: 'ReverseMortgageForm',
    fullRoute: `${parentRoute}/reverse-mortgage-form/:page`,
    reactRouterRoute: `${parentRoute}/reverse-mortgage-form/:page`,
  },
  PrivateCompanyMortgageForm: {
    name: 'PrivateCompanyMortgageForm',
    fullRoute: `${parentRoute}/private-company-mortgage-form/:page`,
    reactRouterRoute: `${parentRoute}/private-company-mortgage-form/:page`,
  },
  MissionStatement: {
    name: 'MissionStatement',
    fullRoute: `${parentRoute}/mission-statement`,
    reactRouterRoute: `${parentRoute}/mission-statement`,
  },
  ContactAgent: {
    name: 'ContactAgent',
    fullRoute: `${parentRoute}/contact-agent`,
    reactRouterRoute: `${parentRoute}/contact-agent`,
  },
  AboutUs: {
    name: 'AboutUs',
    fullRoute: `${parentRoute}/about-us`,
    reactRouterRoute: `${parentRoute}/about-us`,
  },
  Login: {
    name: 'Login',
    fullRoute: `${parentRoute}/login`,
    reactRouterRoute: `${parentRoute}/login`,
  }
}
