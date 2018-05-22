import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import autobind from 'class-autobind';
import routeConstants from 'config/routeConstants';
import { ButtonMain } from 'modules/UXlibrary/ButtonMain';
import fb from 'assets/images/8574012_35x35.png';
import twitter from 'assets/images/8574013_38x31.png';

export class BottomNav extends Component {
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
      <div className="bottom-bar-nav">
        <div className="social-media float-l">
          <Link to={routeConstants.MiniAppDashboard.fullRoute}>
            <img src={fb} alt="fb" />
          </Link>
        </div>
        <div className="social-media float-l">
          <Link to={routeConstants.MiniAppDashboard.fullRoute}>
            <img src={twitter} alt="twitter" />
          </Link>
        </div>
        <div className="contact-info float-r">
          <span>{'San Fernando, CA | '}<a href="tel:818-837-6600">818-837-6600</a>{' | '}<a href="tel:818-827-4902">818-827-4902</a> (Fax)</span>
        </div>
      </div>
    );
  }
}

const {} = PropTypes;
BottomNav.propTypes = {}

BottomNav.defaultProps = {};

function mapStateToProps(state, ownProps) {
  // const isReady = state.status.mortgage[type] === status.DONE;
  const isReady = false;
  console.log('own props: ', ownProps);
  return {
    isReady,
    history: _.get(ownProps, 'history', {}),
  }
}

export default connect(mapStateToProps)(BottomNav);
