import React from 'react'
import Feed from './Feed.js'

const Home = ({posts}) => {
  return (
    <>
    
  { posts.map(post => <li style={{listStyle:'none', marginLeft:'12px'}} key={post.id}> <Feed post={post}/> 
  </li>)}
  </>
  )
}

export default Home