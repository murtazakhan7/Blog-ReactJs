import React from 'react'
import { Link } from 'react-router-dom'
import './Feed.css'

const Feed = ({post}) => {
  return (

    <div className="feed-item">
      {post &&
      <>
    <Link to = {`/post/${post.id}`}>
    <h3>{post.title}</h3>
    </Link>
    <h6>{post.date}</h6>
    <p>{post.body}</p>
    
    </>
}
    </div>
      
  )
}

export default Feed