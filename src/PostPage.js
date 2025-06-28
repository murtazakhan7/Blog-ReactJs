import React from 'react'
import { useParams } from 'react-router-dom'

const PostPage = ({posts,handleDelete}) => {
  const {id} = useParams()
  const post = posts.find(post => (post.id).toString() === id)
  return (

    <div>
     {post && 
     <>
      <h2>{post.title}</h2>
      <h6> {post.body} </h6>
      <p>{post.date} </p> 
       <button  onClick={handleDelete}>Edit Post</button>
       <button onClick={() =>handleDelete(post.id)}>Delete</button>
       </>
  }
    </div>

   
    
  )
}

export default PostPage