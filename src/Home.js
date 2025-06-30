import React from 'react'
import Feed from './Feed.js'
import {Link} from 'react-router-dom'
import './Home.css'
import {  useStoreActions,useStoreState } from 'easy-peasy';
import api from './api/posts.js'
import { useEffect} from 'react'

const Home = () => {
     const {setPosts,SetSearchResults,SearchResults,setIsLoading} =  useStoreActions(actions => ({
      setPosts: actions.setPosts,
      SetSearchResults: actions.SetSearchResults,
      SearchResults: actions.SearchResults,
      setIsLoading: actions.setIsLoading
    }))
    const {posts,Search,isLoading} = useStoreState( state =>  (
      {
        posts: state.posts,

        Search: state.Search,
        isLoading : state.isLoading

    }))
   
      useEffect(() => {
        const getData = async () => {
           setIsLoading(true)
          try {
            const response = await api.get('/posts')
            setPosts(response.data);
            setIsLoading(false)

           }
          catch (err) {   
            console.log(err.message)
          }
        }
        getData()
    
      }, [])

      useEffect(() => {
          const ResultPosts = posts.filter(post => ((post.body.toLocaleLowerCase().includes(Search.toLocaleLowerCase())) || (post.title.toLowerCase().includes(Search.toLocaleLowerCase()))))
          ResultPosts.reverse()
          SetSearchResults(ResultPosts)
          
        
        }
          , [Search, posts,SearchResults])
  return (
    <div className="home-container">
      {posts && !isLoading   ?(
        <>
          {posts.map(post => (
            <div className="home-content" key={post.id}>
              <Feed post={post} />
            </div>
          ))}
        </>
     ) 
      : (  
        <>

          <h2>No Posts</h2>
          <Link to='/newpost'>Create a Post</Link>
        </>
      ) }
    </div>
  )
}

export default Home