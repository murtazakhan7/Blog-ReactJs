import React from 'react'

const Feed = ({post}) => {
  return (
    <>
    <h3>{post.title}</h3>
    <h6>{post.date}</h6>
    <p>{post.body}</p>
    </>
  )
}

export default Feed