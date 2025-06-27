import Header from './Header.js'
import Home from './Home.js'
import PostPage from './PostPage.js'
import Nav from './Nav.js'
import About from './About.js'
import Missing from './Missing.js'
import NewPost from './NewPost.js'
import Footer from './Footer.js'
import { Routes,Route,useNavigate } from 'react-router-dom'
import { useState } from 'react'



function App() {
  const [posts,SetPosts] = useState([
  {
    id:1,
    title:"My First Post",
    body: "Hello to the future",
    date: "January 2025, 12, 12:12pm"
  },{
    id:2,
    title:"My Second Post",
    body: " No Succes, No Life",
    date: "January 2025, 12, 12:12pm"
  },
  {
  id:3,
  title:"My Third Post",
  body:" Failure is the key to Failure",
  date: "January 2025, 12, 12:12pm"
  },{

    id:4,
    title:"My Fourth Post",
    body:" God Knows Best",
    date: "January 2025, 12, 12:12pm"
  }
])

  return (
    <div>
      <Header title  = 'JS Bog Post' />
      <Nav />
      <Routes>
        <Route path='/' element={<Home posts ={posts} />} />
        <Route path='about' element={<About />} />
        <Route path='/new' element={<NewPost />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='*' element={<Missing />} />
        
      </Routes>

      <Footer />


    </div>
  );
}

export default App;
