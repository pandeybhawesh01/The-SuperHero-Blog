/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'
import { signOut} from 'firebase/auth';
import { auth } from '../firebase-config';
import logo from '../assets/logo.png';

const Navbar = (isAuth , myUser) => {

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      window.location.pathname = "/login";
    })

  }
  return (
    <nav className='flex sm:justify-between sm:flex-row flex-col items-center p-4 bg-black md:h-20'>
    <Link className='font-bold' to="/"><img src={logo} className='h-16 w-20'></img></Link>
    <div className='font-bold text-white text-4xl'>
      The SuperHero Blog
    </div>
    <div className='sm:border-t-0 border-t-2 py-2'>
      <Link className='mx-2 text-white' to="/">Home</Link>
      {!isAuth ? <Link className='mx-2 text-white' to="/login">Log-In</Link> :
      (
        <>
        {myUser === "pbhaweshpandey001@gmail.com" ? <Link className='mx-2 text-white' to="/createblog">Create Post</Link> : <></>}
        <button className='bg-red-600 hover:bg-red-800 text-black-400 font-bold sm:py-2 px-4 rounded-sm' onClick = {signUserOut}>Log-Out</button>
        </>
      )  
      }
    </div>
    </nav>
  )
}

export default Navbar