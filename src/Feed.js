import React from 'react'
import { Link } from 'react-router-dom'
const Feed = ({post}) => {
  return (
    <>
    <Link to = '/post/{post.id}'>
    <h3>{post.title}</h3>
    <h6>{post.date}</h6>
    <p>{post.body}</p>
    </Link>
    </>
  )
}

export default Feed