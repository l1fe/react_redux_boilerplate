import React, { Component } from 'react';

import styles from './styles.css';

class About extends Component {
  render() {
    return (
      <div className={styles.container}>
        <span className={styles.title}>
          Simple React+Redux boilerplate
        </span>
      </div>
    );
  }
}

export default About;
