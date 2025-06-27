import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({Search,setSearch}) => {
  return (
    <nav>
    <form onSubmit={(e) => e.preventDefault}>
      <label htmlFor="search"></label>
      <input
      id='search'
      type='text'
      placeholder='Search Posts'
      value={Search}
      onChange={(e) => setSearch(e.target.value)}

      />
    </form>
    <ul>
      <Link to='/'>Home</Link>
      <Link to = './newpost'>New Post</Link>
      <Link to= './about'>About</Link>
    </ul>
    </nav>
  )
}

export default Nav