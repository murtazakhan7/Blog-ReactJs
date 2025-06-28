import React from 'react'
import Feed from './Feed.js'
import './Home.css'

const Home = ({posts}) => {
  return (
    <div className="home-container">
      { posts.map(post => (
        <div className="home-content" key={post.id}>
          <Feed post={post}/>
        </div>
      ))}
    </div>
  )
}

export default Home