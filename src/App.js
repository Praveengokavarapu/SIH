import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/NavBar'
import Quiz from './pages/Quiz.js'
import GetStarted from './pages/GetStarted.js'
import Results from './pages/Results'




const questions1=[{questionNo:"question1",option1:1,option2:2,option3:3,option4:4},{questionNo:"question2",option1:1,option2:2,option3:3,option4:4},{questionNo:"question3",option1:1,option2:2,option3:3,option4:4},{questionNo:"question4",option1:1,option2:2,option3:3,option4:4}]
const questions2=[{questionNo:"question1",option1:5,option2:2,option3:3,option4:4},{questionNo:"question2",option1:1,option2:2,option3:3,option4:4},{questionNo:"question3",option1:1,option2:2,option3:3,option4:4},{questionNo:"question4",option1:1,option2:2,option3:3,option4:4}]
function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
       
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={ <Home />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
            <Route 
              path="/quiz1" 
              element={<Quiz questions={questions1} final="false"/>  } 
            />
            <Route 
              path="/quiz2" 
              element={<Quiz questions={questions2} final="true"/>} 
            />
            <Route path="/getstarted" element={user ? <GetStarted/>:<Navigate to="/login"/> }/>
            <Route 
              path="/results" 
              element={user ? <Results/> : <Navigate to="/" />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
