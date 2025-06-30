import React from 'react'
import './NewPost.css';
import { useStoreActions,useStoreState } from 'easy-peasy';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
 

const NewPost = () => {
  const navigate = useNavigate()
   const currentDate = new Date()


  const {NewTitle,NewBody,posts} = useStoreState(state => ({
   NewTitle: state.NewTitle,
  
   NewBody : state.NewBody,
 
   posts: state.posts

  }))

  const  {savePost,setNewBody,setNewTitle}  = useStoreActions(actions => ({
    savePost: actions.savePost,
    setNewTitle : actions.setNewTitle,
    setNewBody: actions.setNewBody,

  
  }))
   const handleSubmit = async (e) => {
      e.preventDefault();
  
      const id = posts.length ? (Number(posts[posts.length - 1].id) + 1) : 1
      const StrId = id.toString()
  
      const newPost = {
        id: StrId,
        title: NewTitle,
        body: NewBody,
        date: format(currentDate, 'PPP')
      }
     savePost(newPost)
  
     navigate('/')
  
  
    }

    return (
        <div className="new-post-container">
          <form className="new-post-form" onSubmit={handleSubmit}>
            <label htmlFor="NewPost">Post Title</label>
            <input
                id='NewPost'
                type="text"
                placeholder='Title'
                value={NewTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <input
                type='text'
                 id="post-body"
                value={NewBody}
                onChange={(e) => setNewBody(e.target.value)}
                placeholder="Body"
           />
             <button onClick={handleSubmit}>Create Post</button>
        </form>
       </div>
    )
}

export default NewPost