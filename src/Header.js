import React from 'react'
import './Header.css';

const Header = ({title}) => {
  return (
    <div className="header">
      <div className="header-title-container">
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default Header