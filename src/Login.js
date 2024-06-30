import { Photo } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import "./Login.css"
import { auth } from "./firebase"
import { login } from "./features/userSlice"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { updateProfile } from 'firebase/auth'
import {signInWithEmailAndPassword} from 'firebase/auth'

function Login() {

  const[email,setEmail]=useState("")
  const[password,setPassword]= useState("")
  const[name,setName] = useState("")
  const[profilePic,setProfilePic] = useState("")
  const disptach=useDispatch();

  const register = () =>{
     if(!name){
      return alert("Please enter a full name!")
     }
     createUserWithEmailAndPassword(auth,email,password)
     .then((userAuth) => {
      updateProfile(userAuth.user, { displayName: name, photoUrl: profilePic })
      .then(() =>{
          disptach(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl:profilePic,
          }))
      })
      
     }).catch((error)=> alert(error))
  }

  const loginToApp = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then(userAuth =>{
      disptach(login({
        email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName:userAuth.user.displayName,
            photoUrl:userAuth.user.photoURL,

      }))
    }).catch((error)=> alert(error))
  }
  return (
    <div className='login'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1024px-LinkedIn_Logo.svg.png" alt="" />
        <form action="">
          <input value={name} onChange={e => setName(e.target.value)} placeholder='Full Name (Required if Registering' type="text" />
          <input value={profilePic} onChange={e => setProfilePic(e.target.value)}placeholder='Profile Pic URL(Optional)' type="text" />
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type="text" />
          <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type='password' />
          <button type='submit' onClick={loginToApp}>Sign In</button>
          <p>Not a Member?
            <span className='login_register' onClick={register}>Register Now</span>
          </p>
        </form>
    </div>
  )
}

export default Login