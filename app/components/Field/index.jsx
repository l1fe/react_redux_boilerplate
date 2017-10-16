import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

class Field extends Component {
  static propTypes = {
    label: PropTypes.string,
  };

  render() {
    const { label, ...props } = this.props;
    return (
      <div className={styles.field}>
        <input type="text" {...props} />
        <label>{label}</label>
      </div>
    );
  }
}

export default Field;
