import React, { useEffect } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'
import { useStoreActions,useStoreState } from 'easy-peasy';
import { format } from 'date-fns';

const EditPost = () => {

  const navigate = useNavigate()
  const currentDate = new Date()
  const {id} = useParams()
 

    const {editTitle,editBody,isLoading} = useStoreState(state => ({
   editTitle: state.editTitle,
   editBody: state.editBody,
   isLoading: state.isLoading,
  

  }))
   const post = useStoreState(state => state.getPostById(id));



    const {seteditTitle,seteditBody,updatedPost,setIsLoading} = useStoreActions(actions => ({
   seteditTitle: actions.seteditTitle,
   seteditBody: actions.seteditBody,
   updatedPost: actions.updatedPost,
   setIsLoading: actions.setIsLoading

  }))
 

    



  
    useEffect(() =>{
     setIsLoading(true)
      if(!post) return 

        console.log(post)
        setIsLoading(true)
        console.log('Setting title/body from post:', post);
      seteditTitle(post.title)
      console.log(post.title)
      seteditBody(post.body)
      console.log({ seteditTitle, seteditBody });
      setIsLoading(false)


},[post,seteditBody,seteditTitle,setIsLoading])

   const handleEdit = (id) => {
      const editPost = {
        id,
        title: editTitle,
        body: editBody,
        date: format(currentDate, 'PPP')
      }
      updatedPost(editPost)
      navigate('/')
    }
  
   
if (!post && !isLoading) {
    return (
      <div className="new-post-container">
        <h2>Post Does Not Exist</h2>
        <Link to="/">Visit our Home Page</Link>
      </div>
    );
  }
 
  return (

       <div className="new-post-container">
         {isLoading ? (
        <p>Loading…</p>
      ) : (
       
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
             <button type='submit'>Edit Post</button>
        </form>
          
      
            )}
       </div>
       
    )
   
  
}

export default EditPost