import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        
        <nav>
        <Link to="/">
          <h1>CareerPilot</h1>
          
        </Link>
         
          
          
            <div className='navdiv'>
            {!user && (
            <Link to="/login"><p>Login</p></Link>
            
          )}
              <Link to="/students"><p>Students</p></Link>
              <Link to="/parents"><p>Parents</p></Link>
              <Link to="/careerlibrary"><p>Career Library</p></Link>
              <Link to="/webinars"><p>Webinars</p></Link>
              <Link to="/pricing"><p>Pricing</p></Link>
              <Link to="/getstarted"><button>Get Started</button></Link>
            </div>
        
        </nav>
      </div>
    </header>
  )
}

export default Navbar