import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.css';

class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    const { children, className, ...props } = this.props;

    return (
      <button is class={classnames(styles.button, className)} {...props}>
        {children}
      </button>
    );
  }
}

export default Button;
