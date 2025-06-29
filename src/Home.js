import React from 'react'
import Feed from './Feed.js'
import {Link} from 'react-router-dom'
import './Home.css'

const Home = ({ posts }) => {
  return (
    <div className="home-container">
      {posts &&
        <>
          {posts.map(post => (
            <div className="home-content" key={post.id}>
              <Feed post={post} />
            </div>
          ))}
        </>
      }
      {posts.length === 0  &&
        <>

          <h2>No Posts</h2>
          <Link to='/newpost'>Create a Post</Link>
        </>
      }
    </div>
  )
}

export default Home