import { useEffect }from 'react'

import { useAuthContext } from "../hooks/useAuthContext"

// components


const Home = () => {
  
  const {user} = useAuthContext()

  
  return (
    <div className="home">
      <h1>This is Home</h1>
    </div>
  )
}

export default Home