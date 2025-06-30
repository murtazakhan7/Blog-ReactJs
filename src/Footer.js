import './Footer.css';
import { useStoreState } from 'easy-peasy';

const Footer = () => {
  const postCount  = useStoreState(state => state.postCount)

  return (
    <footer className="footer">
     <p>{postCount}</p>  |  <span className="footer-copyright">© 2025</span>
    </footer>
  )
}

export default Footer