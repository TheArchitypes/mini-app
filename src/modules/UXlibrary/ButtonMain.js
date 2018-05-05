import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Icon from './Icon';

export function ButtonMain(props) {
  const {onClick, className, label, icon, disabled} = props;
  console.log('icon: ', icon);
  console.log(_.isEmpty(icon));
  return (
    <button
      onClick={onClick}
      className="className"
      disabled={disabled}
    >
      <span>
        {!_.isEmpty(icon) &&
          <Icon icon={icon}/>
        }
        {_.isEmpty(icon) &&
          <span className="label">{label}</span>
        }
      </span>
    </button>
  )
}

const { func, string, bool, shape } = PropTypes;
ButtonMain.propTypes = {
  onClick: func,
  className: string,
  label: string,
  icon: shape({}),
  disabled: bool,
};

ButtonMain.defaultProps = {
  onclick: () => {},
  className: '',
  label: '',
  icon: {},
  disabled: false,
}

export default {
  ButtonMain,
}
