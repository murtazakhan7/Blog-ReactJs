import React from 'react'
import { Link } from 'react-router-dom'
const Feed = ({post}) => {
  return (
    <>
    <Link to = {`/post/${post.id}`}>
    <h3>{post.title}</h3>
    </Link>
    <h6>{post.date}</h6>
    <p>{post.body}</p>
    <hr/>
    
    </>
  )
}

export default Feed