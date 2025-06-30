import './App.css';
import Home from './Home.js'
import PostPage from './PostPage.js'
import Nav from './Nav.js'
import About from './About.js'
import Missing from './Missing.js'
import NewPost from './NewPost.js'
import Footer from './Footer.js'
import Header  from './Header.js';
import { Routes, Route } from 'react-router-dom'
import EditPost from './EditPost.js';

import { useStoreState } from 'easy-peasy';

function App() {

  const {posts} = useStoreState(state => state.posts)


  return (
    <div className="app-container">
      <Header  title= 'ReactJS Blog'/>
      <Nav  />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='/newpost' element={<NewPost />} />
        <Route path='/post/:id' element={<PostPage />} />
       <Route
  path="/editpost/:id"
  element={
      <EditPost
      />
 
  }
/>

        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
