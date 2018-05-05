import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import autobind from 'class-autobind';
import { ButtonMain } from 'modules/UXlibrary/ButtonMain';

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
    }, () => {
      console.log('popout nav');
    });
  }

  render() {
    const { history } = this.props;

    return (
      <div className="top-bar-nav">
        <div className="float-l">
          <h2>The Archetypes</h2>
        </div>
        <div className="float-r">
          <ButtonMain onClick={this.popoutNav} icon={{ icon: 'menu', text: 'Menu' }}/>
        </div>
      </div>
    );
  }
}

const { shape, string, number, bool } = PropTypes;
TopNav.propTypes = {
  history: shape({}).isRequired,
}

TopNav.defaultProps = {};

function mapStateToProps(state) {
  // const isReady = state.status.mortgage[type] === status.DONE;
  const isReady = false;
  return {
    isReady,
  }
}

export default connect(mapStateToProps)(TopNav);
