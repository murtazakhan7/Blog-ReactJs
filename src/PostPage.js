import React from 'react'
import { useParams } from 'react-router-dom'

const PostPage = ({post}) => {
  const {id} = useParams()
  return (

    <div>
      {post.title}
      {post.body}
      {post.date}
    </div>
    
  )
}

export default PostPage