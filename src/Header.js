import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import {auth} from "./firebase"
import { signOut } from 'firebase/auth'; 



function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = ()=>{
     dispatch(logout())
     auth.signOut()
  }
  return (
    <div className='header'>
      <div className='header_left'>

        <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder='Search'/>
        </div>

      </div>
      <div className='header_right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network ' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        


        <HeaderOption avatar=" https://i.pinimg.com/550x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg" title="Me" onClick={logoutOfApp}/>
        



      </div>


    </div>


  );
}

export default Header;