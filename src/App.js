import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar  from './Sidebar';
import Feed  from './Feed';
import {login, selectUser} from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login"

import { onAuthStateChanged } from 'firebase/auth';
import 'firebase/auth'; // Firebase Authentication
import { auth } from './firebase';



function App() {

  const user = useSelector(selectUser)
  const disptach = useDispatch()

  useEffect(()=>{
   auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
          //user is logged in
          disptach(login({
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl:userAuth.photoURL,
          }))
      }else{
         //user is logged out
        //  disptach(logout());
      }
   })
  })
  return (
    <div className="App">
      <Header  />

      {!user ? <Login/>:(
        <div className="app_body">
        <Sidebar/>
        <Feed/>
       </div>
      )}
     
     
   
     {/* widgets */}

    </div>
  );
}

export default App;
