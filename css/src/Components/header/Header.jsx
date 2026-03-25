import React from 'react'
// import '../Styles/Header.css'
import styles from './Header.module.css'


const Header = () => {
  return (
    <div className={styles.header}>
      <h3>This is Header</h3>
      <button>Login</button>
    </div>
  );
}

export default Header
