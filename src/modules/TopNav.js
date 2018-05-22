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
    const { popoutNav } = this.state;
    return (
      <div className="top-bar-nav">
        <div className=" title float-l">
          <Link to={routeConstants.MiniAppDashboard.fullRoute}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="menu float-center">
          <ButtonMain
            className="hvr-float-shadow"
            onClick={this.popoutNav}
            label="Contact Agent"
          />
          <ButtonMain
            className="hvr-float-shadow"
            onClick={this.popoutNav}
            label="Loans"
          />
          <ButtonMain
            className="hvr-float-shadow"
            onClick={this.popoutNav}
            label="About Us"
          />
        </div>
        <div className={popoutNav ? 'menu float-r fade-out-r' : 'menu float-r'}>
          <ButtonMain
            className="hvr-float-shadow"
            onClick={this.popoutNav}
            label="Login"
          />
        </div>
        {popoutNav &&
          <div className={popoutNav ? 'popout-menu float-r fade-in-from-none' : 'popout-menu float-r'}>
            <div className="row pad-y">
              <div className="col">
                <ButtonMain
                  className="hvr-float-shadow"
                  label="REVERSE MORTGAGE"
                  onClick={() => this.navigateAndClosePopup(routeConstants.ReverseMortgageForm.fullRoute)}
                />
              </div>
              <div className="col">
                <ButtonMain
                  className="hvr-float-shadow"
                  label="TRADITIONAL MORTGAGE"
                  onClick={() => this.navigateAndClosePopup(routeConstants.TraditionalMortgageForm.fullRoute)}
                />
              </div>
              <div className="col">
                <ButtonMain
                  className="hvr-float-shadow"
                  label="PRIVATE COMPANY MORTGAGE"
                  onClick={() => this.navigateAndClosePopup(routeConstants.PrivateCompanyMortgageForm.fullRoute)}
                />
              </div>
              <div className="col last close">
                <ButtonMain
                  className="hvr-float-shadow"
                  icon={{ icon: 'ellipses', text: '' }}
                  onClick={this.popoutNav}
                />
              </div>
            </div>
          </div>
        }
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
  console.log('own props: ', ownProps);
  return {
    isReady,
    history: _.get(ownProps, 'history', {}),
  }
}

export default connect(mapStateToProps)(TopNav);
