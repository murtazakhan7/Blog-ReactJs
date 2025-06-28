import React from 'react'
import {Link} from 'react-router-dom'
import './Missing.css'

const Missing = () => {
  return (
      <div className="missing-container">
        <div className="missing-content">Could Not find Page</div>
        <Link to='/'> Visit Our Home Page</Link>
      </div>
  )
}

export default Missing