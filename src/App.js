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

function App() {
  const [posts, SetPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      body: "Hello to the future",
      date: "January 2025, 12, 12:12pm"
    }, {
      id: 2,
      title: "My Second Post",
      body: " No Succes, No Life",
      date: "January 2025, 12, 12:12pm"
    },
    {
      id: 3,
      title: "My Third Post",
      body: " Failure is the key to Failure",
      date: "January 2025, 12, 12:12pm"
    }, {

      id: 4,
      title: "My Fourth Post",
      body: " God Knows Best",
      date: "January 2025, 12, 12:12pm"
    }
  ])

  const [Search, setSearch] = useState('')
  const [NewTitle, setNewTitle] = useState('')
  const [NewBody, SetNewBody] = useState('')

  const navigate = useNavigate()
  const [searchResults, SetSearchResults] = useState([])

  useEffect(() => {
    const ResultPosts = posts.filter(post => ((post.body.toLocaleLowerCase().includes(Search.toLocaleLowerCase())) || (post.title.toLowerCase().includes(Search.toLocaleLowerCase()))))
    ResultPosts.reverse()
    SetSearchResults(ResultPosts)
  }
    , [Search, posts])

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date()
    
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    try {
      const newPost = {
         id: id, 
         title: NewTitle, 
         body: NewBody, 
         date: format(currentDate, 'PPP')
         }

    
      const allPosts = [...posts, newPost]
      SetPosts(allPosts)
    } catch (error) {
      console.log(error)
    }
    finally {
      setNewTitle('')
      SetNewBody('')
       navigate('/')
    }
  }

  const handleDelete= (id) =>{
    const newposts = posts.filter(post => post.id !== id)

    console.log(newposts)
    SetPosts(newposts)
    navigate('/')
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
          SetNewBody={SetNewBody}
          handleSubmit={handleSubmit}
        />} />
        <Route path='/post/:id' element={<PostPage handleDelete={handleDelete} posts={posts}/>} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
