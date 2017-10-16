import React, { Component } from 'react';

import styles from './styles.css'

class Layout extends Component {
  render() {
    return (
      <div className={styles.container}>
        <span className={styles.title}>
          igor.naumov.17@gmail.com
        </span>
      </div>
    );
  }
}

export default Layout;
