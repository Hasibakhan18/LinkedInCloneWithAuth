import React from 'react'
import { db } from './firebase';
import { getFirestore, collection, onSnapshot, addDoc , deleteDoc, getDoc, doc } from 'firebase/firestore';
import "./Post.css"
import { Avatar, Button } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
function Post({id,name,description,message,photoUrl}) {

  const delPost = async (e,id) =>{
    console.log('in delete post func...', id)
    e.preventDefault();
    const docDelRef = doc(db, "posts", id)
    if ((!id) && id === ""){
        alert('Invalid Post  to Delete');
    } 
    await deleteDoc(docDelRef);

}
  return (
    <div className='post'>
        <div className="post_header">
            <Avatar />
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
             </div>
             <div>
             <Button onClick={(e)=> delPost(e, id)}><InputOption Icon={DeleteIcon} className="delete-icon"  color=" gray"/></Button>

             </div>
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>
        <div className="post_buttons">
            <InputOption Icon={ThumbUpOffAltIcon }  title="Like" color=" gray"/>
            <InputOption Icon={ ChatOutlinedIcon}  title="Comment" color=" gray"/>
            <InputOption Icon={ ShareOutlinedIcon}  title="Share" color=" gray"/>
            <InputOption Icon={SendOutlinedIcon }  title="Send" color=" gray"/>


        </div>
    </div>
  )
}

export default Post