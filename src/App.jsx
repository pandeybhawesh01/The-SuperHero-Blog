/* eslint-disable no-unused-vars */
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import CreateBlog from './Pages/CreateBlog'
import Register from './Pages/Register'
import Login from './Pages/Login'
import { useState } from 'react'

function App() {
  const [isAuth , setIsAuth] = useState(false);
  const [myUser , setMyUser] = useState(false);

  return ( 
    <>
      <Router>
      <Navbar isAuth={isAuth}/>
      <div>
        <Routes>
          <Route path="/" element={<Home setIsAuth={setIsAuth}/>} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
          <Route path="/createblog" element={<CreateBlog isAuth={isAuth}/>} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
    </>
  )
}

export default App
