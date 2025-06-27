import Header from './Header.js'
import Home from './Home.js'
import PostPage from './PostPage.js'
import Nav from './Nav.js'
import About from './About.js'
import Missing from './Missing.js'
import NewPost from './NewPost.js'
import Footer from './Footer.js'
import { Routes,Route,useNavigate } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header title  = 'JS Bog Post' />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
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
