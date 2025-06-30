import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import './PostPage.css'
import { useStoreActions,useStoreState } from 'easy-peasy';

const PostPage = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const getPostById = useStoreState(state => state.getPostById)
    const deletePost = useStoreActions(actions => actions.deletePost)

  const post = getPostById(id)
//  const post = posts.find(post => (post.id) === id)
  const handleDelete = (id) => {
    deletePost(id)
    navigate('/')
   
  }

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