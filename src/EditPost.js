import React from 'react'
import { useParams } from 'react-router-dom'


const EditPost = ({posts,setNewTitle,setNewBody,handleSubmit}) => {
    const {id} = useParams()
    const post = posts.find(post => post.id === Number(id))
  return (
       <div className="new-post-container">
          <form className="new-post-form" onSubmit={handleSubmit}>
            <label htmlFor="NewPost">Post Title</label>
            <input
                id='NewPost'
                type="text"
                placeholder='Title'
                value={post.title}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <input
                type='text'
                 id="post-body"
                value={post.body}
                onChange={(e) => setNewBody(e.target.value)}
                placeholder="Body"
           />
             <button onClick={handleSubmit}>Edit Post</button>
        </form>
       </div>
    )
   
  
}

export default EditPost