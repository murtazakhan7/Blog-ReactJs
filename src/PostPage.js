import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './PostPage.css'

const PostPage = ({posts,handleDelete}) => {
  const {id} = useParams()
  const post = posts.find(post => (post.id).toString() === id)
  return (
    <div className="post-page">
     {post && 
     <div className="post-content">
      <h2>{post.title}</h2>
      <h6> {post.body} </h6>
      <p>{post.date} </p> 
     <Link to = {`/newpost/${id}`}>   <button  onClick={handleDelete}>Edit Post</button> </Link>
       <button onClick={() =>handleDelete(post.id)}>Delete</button>
       </div>
  }
    </div>
  )
}

export default PostPage