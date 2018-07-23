import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import autobind from 'class-autobind';
import routeConstants from 'config/routeConstants';
import { ButtonMain } from 'modules/UXlibrary/ButtonMain';
import logo from 'assets/images/first-choice.png';

const topNavArray = [
  {label: 'Loans', value: 'loans', url: '', children: [
    {label: 'Conventional Financing', url: routeConstants.TraditionalMortgageForm.fullRoute},
    {label: 'FHA Loans', url: ''},
    {label: 'Jumbo Loans', url: ''},
    {label: 'VA Loans', url: ''},
    {label: 'Private Funding', url: ''},
  ]},
  {label: 'Tools', value: 'tools', url: '', children: []},
  {label: 'Contact Us', value: 'contactUs', url: '', children: []},
  {label: 'Contact Agent', value: 'contactAgent', url: routeConstants.ContactAgentContainer.fullRoute, children: []},
  {label: 'About Us', value: 'aboutUs', url: routeConstants.AboutUs.fullRoute, children: []},
  {label: 'Blog', value: 'blog', url: '', children: []},
  {label: 'Careers', value: 'careers', url: '', children: []},
];

export class TopNav extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      shownDropdown: '',
    };
  }

  popoutNav() {
    const { popoutNav } = this.state;
    this.setState({
      popoutNav: !popoutNav,
    });
  }

  openDropdown(value) {
    const { shownDropdown } = this.state;
    console.log('open dropdown');
    this.setState({
      shownDropdown: shownDropdown === value ? '' : value,
    });
  }

  subNavigation(route) {
    const { history } = this.props;
    history.push(route);
  }

  navigateAndClosePopup(route) {
    const { history } = this.props;
    this.popoutNav();
    history.push(route);
  }

  render() {
    const { history } = this.props;
    const { popoutNav, shownDropdown } = this.state;
    return (
      <div className="top-bar-nav flex-container no-border">
        <div className="flex-col no-border">
          <div className="flex-row">
            <div className="flex-col no-border" style={{ width: '50%' }}>
              <div className="title float-l">
                <Link to={routeConstants.MiniAppDashboard.fullRoute}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="flex-col" style={{ width: '50%' }}>
              <div className="flex-row">
                <div className="menu float-center">
                  {topNavArray.map((navItem, navItemIndex) => (
                    <div
                      key={navItemIndex}
                      className="flex-col no-border menu-item"
                      onMouseEnter={_.isEmpty(navItem.children) ? () => this.openDropdown('') : () => {}}
                    >
                      <ButtonMain
                        className={!_.isEmpty(navItem.children) ? 'has-sub-nav' : ''}
                        onClick={!_.isEmpty(navItem.children) ? () => this.openDropdown(navItem.value) : () => this.subNavigation(navItem.url)}
                        label={navItem.label}
                      />
                      {!_.isEmpty(navItem.children) && shownDropdown === navItem.value &&
                        <ul
                          className="sub-nav-container"
                          onMouseLeave={() => this.openDropdown('')}
                        >
                          {navItem.children.map((subNavItem, subNavItemIndex) => (
                            <li key={subNavItemIndex} onClick={() => this.subNavigation(subNavItem.url)}>{subNavItem.label}</li>
                          ))}
                        </ul>
                      }
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const {} = PropTypes;
TopNav.propTypes = {}

TopNav.defaultProps = {};

function mapStateToProps(state, ownProps) {
  // const isReady = state.status.mortgage[type] === status.DONE;
  const isReady = false;
  return {
    isReady,
    history: _.get(ownProps, 'history', {}),
  }
}

export default connect(mapStateToProps)(TopNav);
