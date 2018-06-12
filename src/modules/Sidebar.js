import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import autobind from 'class-autobind';
import routeConstants from 'config/routeConstants';
import { ButtonMain } from 'modules/UXlibrary/ButtonMain';
import logo from 'assets/images/first-choice.png';

export class Sidebar extends Component {
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
      <div className="side-bar-nav">
        <div className="col">
          <div className="row" >
            <div className="mission-statement">
              <h2>OUR MISSION</h2>
              <p>Our mission is to have clients for life and establish successful relationships with our customers. We do this by providing a responsive, knowledgeable approach toward mortgage lending through the integration of people, technology, and business practices.</p>
              <p>A cooperative spirit, adherence to our core values, and enthusiastic employees are the foundation of our success.</p>
            </div>
          </div>
          <div className="row social-media">
            <Link to={routeConstants.MiniAppDashboard.fullRoute}>
              <span>FACEBOOK</span>
            </Link>
          </div>
          <div className="row social-media">
            <Link to={routeConstants.MiniAppDashboard.fullRoute}>
              <span>TWITTER</span>
            </Link>
          </div>
          <div className="row social-media">
            <Link to={routeConstants.MiniAppDashboard.fullRoute}>
              <span>BLOG</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const {} = PropTypes;
Sidebar.propTypes = {}

Sidebar.defaultProps = {};

function mapStateToProps(state, ownProps) {
  // const isReady = state.status.mortgage[type] === status.DONE;
  const isReady = false;
  return {
    isReady,
    history: _.get(ownProps, 'history', {}),
  }
}

export default connect(mapStateToProps)(Sidebar);
