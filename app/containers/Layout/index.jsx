import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Menu from './Menu';

import styles from './styles.css';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    console.log('Layout is setup');
  }

  render() {
    const { children } = this.props;

    return (
      <div className={styles.container}>
        <Menu />
        <div className={styles.content}>
          { children }
        </div>
      </div>
    );
  }
}

export default connect()(Layout);
export animations from './animations.css';
