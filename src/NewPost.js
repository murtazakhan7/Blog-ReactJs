import React from 'react'
import './NewPost.css';

const NewPost = ({NewTitle,setNewTitle,NewBody,SetNewBody, handleSubmit }) => {
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
                onChange={(e) => SetNewBody(e.target.value)}
                placeholder="Body"
           />
             <button onClick={handleSubmit}>Create Post</button>
        </form>
       </div>
    )
}

export default NewPost