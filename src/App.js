import './App.css';
import Home from './Home.js'
import PostPage from './PostPage.js'
import Nav from './Nav.js'
import About from './About.js'
import Missing from './Missing.js'
import NewPost from './NewPost.js'
import Footer from './Footer.js'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { format } from 'date-fns';
import EditPost from './EditPost.js';
import api from './api/posts.js'

function App() {
  const [posts, SetPosts] = useState([])
  const [Search, setSearch] = useState('')
  const [NewTitle, setNewTitle] = useState('')
  const [NewBody, setNewBody] = useState('')
  const [editTitle, seteditTitle] = useState('')
  const [editBody, seteditBody] = useState('')
  const [reload, setReload] = useState(false);
  const [searchResults, SetSearchResults] = useState([])

  const currentDate = new Date()
  const navigate = useNavigate()


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get('/posts')

        SetPosts(response.data);


     

      }
      catch (err) {

        console.log(err.message)
      }
    }
    getData()

  }, [reload])

  useEffect(() => {
    const ResultPosts = posts.filter(post => ((post.body.toLocaleLowerCase().includes(Search.toLocaleLowerCase())) || (post.title.toLowerCase().includes(Search.toLocaleLowerCase()))))
    ResultPosts.reverse()
    SetSearchResults(ResultPosts)
  }
    , [Search, posts])

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
  

    try {
      const response = await api.post('/posts', newPost)
     
      const allPosts = [...posts, response.data]
      SetPosts(allPosts)
      setNewTitle('')
      setNewBody('')
      navigate('/')
    }
    catch (error) {
      console.log(error.message)
    }


  }

  const handleEdit = async (id) => {
    const editPost = {
      id,
      title: editTitle,
      body: editBody,
      date: format(currentDate, 'PPP')
    }
    try {
      const response = await api.put(`/posts/${id}`, editPost)
      const updatedPosts = posts.map(post => (post.id) === id ? {...response.data} : post)
     SetPosts(updatedPosts)
     seteditBody('')
     seteditBody('')
     navigate('/')
     
    }
    catch (error) {
      console.log(error.message)
    }
  }


  const handleDelete = async (id) => {
    const newposts = posts.find(post => post.id === id)
    
    try {
      const response = await api.delete(`/posts/${id}`)

      console.log('Resource deleted successfully:', response.status)
      setReload(prev => !prev);
      navigate('/')
    }
    catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="app-container">
      <header className="blog-header">
        React JS Blog
      </header>
      <Nav Search={Search} setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Home posts={searchResults} />} />
        <Route path='about' element={<About />} />
        <Route path='/newpost' element={<NewPost
          NewTitle={NewTitle}
          setNewTitle={setNewTitle}
          NewBody={NewBody}
          setNewBody={setNewBody}
          handleSubmit={handleSubmit}
        />} />
        <Route path='/post/:id' element={<PostPage handleDelete={handleDelete} posts={posts} />} />
       <Route
  path="/editpost/:id"
  element={
    posts.length > 0 ? (
      <EditPost
        posts={posts}
        editTitle={editTitle}
        editBody={editBody}
        seteditTitle={seteditTitle}
        seteditBody={seteditBody}
        handleEdit={handleEdit}
      />
    ) : (
      <p>Loading...</p>
    )
  }
/>

        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
