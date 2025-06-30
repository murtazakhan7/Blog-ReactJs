import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import { action, useStoreActions,useStoreState } from 'easy-peasy';

const Nav = () => {
  const {Search} = useStoreState(state => state.Search)
  const {setSearch} = useStoreActions(actions => actions.setSearch)

  return (
    <nav className="navbar">
      <div className="nav-search-container">
        <form onSubmit={e => e.preventDefault()}>
          <input
            id='search'
            type='text'
            placeholder='Search Posts'
            value={Search}
            onChange={e => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="nav-links-container">
        <ul>
          <Link className="nav-link" to='/'>Home</Link>
          <Link className="nav-link" to = './newpost'>New Post</Link>
          <Link className="nav-link" to= './about'>About</Link>
        </ul>
      </div>
    </nav>
  )
}

export default Nav