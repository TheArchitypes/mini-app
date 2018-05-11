import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

export default function Icon(props) {
  const { icon: {icon, size, title, aria, text} } = props;
  return(
    <span
      className={size ? `icon oi ${size}` : 'icon oi'}
      data-glyph={icon}
      title={title}
      aria-hidden={aria}
    >
      <span>{text}</span>
    </span>
  );
}

const { shape, string, bool } = PropTypes;
Icon.propTypes = {
  icon: shape({
    icon: string.isRequired,
    size: string,
    title: string,
    aria: bool,
    text: string,
  }).isRequired,
}

Icon.defaultProps = {
  icond: {
    size: '',
    title: '',
    aria: true,
    text: '',
  }
}
