import React, { useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'

const EditPost = ({posts,editTitle,editBody,seteditTitle,seteditBody,handleEdit}) => {
 
    const {id} = useParams()
    const post = posts.find(post => Number(post.id) === Number(id))
    console.log(post)
   
 
    useEffect(() =>{
      if(post && post.title !== editTitle){
        console.log('Setting title/body from post:', post);
      seteditTitle(post.title)
      seteditBody(post.body)
      console.log({ seteditTitle, seteditBody });

      }
      else{
     console.log("Error setiing ..")
      }
    },[post,seteditBody,seteditTitle])
  return (

      
         
       <div className="new-post-container">
       
          { post ? (
        
          
          <form className="new-post-form" onSubmit={(e) =>{ e.preventDefault();
            handleEdit(id);
          }
          }>
            <label htmlFor="NewPost">Post Title</label>
            <input
                id='NewPost'
                type="text"
                placeholder='Title'
                value={editTitle}
                onChange={(e) => seteditTitle(e.target.value)}
            />
            <input
                type='text'
                 id="post-body"
                value={editBody}
                onChange={(e) => seteditBody(e.target.value)}
                placeholder="Body"
           />
             <button onClick={(e) => {
              e.preventDefault()
              handleEdit(post.id)
             }}>Edit Post</button>
        </form>
          )
      
 : (
<>

<h2>Post Does Not Exit</h2>
<Link to = '/'>Visit our Home Page</Link>

</>
) }

       </div>
       
    )
   
  
}

export default EditPost