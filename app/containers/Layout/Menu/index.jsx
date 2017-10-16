import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

class Menu extends Component {
  render() {
    return (
      <div className={styles.menu}>
        <div className={styles.list}>
          <Link to="home">Home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </div>
      </div>
    );
  }
}

export default Menu;
