import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './PostPage.css'

const PostPage = ({posts,handleDelete}) => {
  const {id} = useParams()
  const post = posts.find(post => (post.id) === id)
  return (
    <div className="post-page">
     {post && 
     <div className="post-content">
      <h2>{post.title}</h2>
      <h6> {post.body} </h6>
      <p>{post.date} </p> 
     <Link to = {`/editpost/${post.id}`}> 
      <button >Edit Post</button> </Link>

       <button onClick={(e) => {e.preventDefault();
       handleDelete(post.id)}}>Delete</button>
       </div>
  }
  {!post &&
  <>
  <h2>Post Does Not Exit</h2>
  <Link to = '/'>Visit our Home Page</Link>
  </>
  
  }
    </div>
  )
}

export default PostPage