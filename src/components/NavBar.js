import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import {BsChevronDown} from "react-icons/bs"
import image from "../Assets/Screenshot 2023-10-29 131918.png"

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <img src={image} className='logo'/>

      <nav className='navbar'>
        <ul>
          <li><a>Home</a></li>
          <li><a>Students</a></li>
          <li><a>Parents</a></li>
          <li><a>Information Gateway <span><BsChevronDown></BsChevronDown></span></a>
          
            <ul>
              <li><a>Webinars</a></li>
              <li><a>Career Library</a></li>
            </ul>
          
          </li>
          <li><a>Partnerships <span><BsChevronDown></BsChevronDown></span></a>
          
            <ul>
              <li><a>Educators</a></li>
              <li><a>Corporates</a></li>
              <li><a>Counsellors</a></li>
            </ul>
          
          </li>

          
          <li><a><button>Get Started</button></a></li>
        
        </ul>
        
      </nav>

      
    </header>
  )
}

export default Navbar