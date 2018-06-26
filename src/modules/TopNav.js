import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import autobind from 'class-autobind';
import routeConstants from 'config/routeConstants';
import { ButtonMain } from 'modules/UXlibrary/ButtonMain';
import logo from 'assets/images/first-choice.png';

export class TopNav extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      popoutNav: false,
    }
  }

  popoutNav() {
    const { popoutNav } = this.state;
    this.setState({
      popoutNav: !popoutNav,
    });
  }

  navigateAndClosePopup(route) {
    const { history } = this.props;
    this.popoutNav();
    history.push(route);
  }

  render() {
    const { history } = this.props;
    const { popoutNav } = this.state;
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
              <div className="menu float-center">
                <ButtonMain
                  onClick={() => history.push(routeConstants.ContactAgent.fullRoute)}
                  label="Loans"
                />
                <ButtonMain
                  onClick={() => history.push(routeConstants.LoanDashboard.fullRoute)}
                  label="Tools"
                />
                <ButtonMain
                  onClick={() => history.push(routeConstants.AboutUs.fullRoute)}
                  label="Contact Us"
                />
                <ButtonMain
                  onClick={() => history.push(routeConstants.AboutUs.fullRoute)}
                  label="Contact Agent"
                />
                <ButtonMain
                  onClick={() => history.push(routeConstants.AboutUs.fullRoute)}
                  label="About Us"
                />
                <ButtonMain
                  onClick={() => history.push(routeConstants.AboutUs.fullRoute)}
                  label="Blog"
                />
                <ButtonMain
                  onClick={() => history.push(routeConstants.AboutUs.fullRoute)}
                  label="Careers"
                />
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
