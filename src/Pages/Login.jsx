/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { auth , provider } from '../firebase-config';
import { signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const Login = ({setIsAuth}) => {
  const navigate = useNavigate();

  const signInWithGoogle =()=>{
    signInWithPopup(auth ,provider).then((result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/');
      
    })
  }
  return (
    <div>
      <div>
        <div>
          <p>sign in with google</p>
          <button
          className=''
          onClick={
            signInWithGoogle
          }> Google </button>
        </div>
      </div>
    </div>
  )
}

export default Login