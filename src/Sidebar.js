import React from 'react'
import "./sidebar.css"
import { Avatar } from '@mui/material'

function Sidebar() {
  const recentitem =(topic)=>(
    <div className="sidebar_recentItem">
    <span className="sidebar_hash">#</span>
    <p>{topic}</p>
    </div>
  );
  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2789.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697155200&semt=ais" alt="" />
            <Avatar/>
            <h2>Hasiba Khan</h2>
            <h4>hasibasultankhan18@gmail</h4>

        </div>
        <div className="sidebar_stats">
           <div className="sidebar_stat">
                 <p>Who viewed you</p>
                 <p className="sidebar_statNumber">2,543</p>
           </div>
           <div className="sidebar_stat">
           <p>Views on post</p>
                 <p className="sidebar_statNumber">2,443</p>
            </div>
        </div>
        <div className="sidebar_bottom">
          <p>Recent</p>
        {recentitem('Reactjs')}
        {recentitem('Programming')}
        {recentitem('Software Engineering')}
        {recentitem('Designer')}
        {recentitem('Developer')}
        {recentitem('Data Engineer')}

        </div>
    </div>
  )
}

export default Sidebar