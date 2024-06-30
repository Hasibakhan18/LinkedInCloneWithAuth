import React, { useEffect, useState } from 'react'
import './feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from "./InputOption"
import Post from './Post';
import { db } from './firebase';
import { getFirestore, collection,orderBy, onSnapshot, addDoc , deleteDoc } from 'firebase/firestore';
// import 'firebase/compat/auth'
// import  'firebase/compat/firestore'


function Feed() {
    const postsRef = collection(db, "posts");
    const [input,setInput]=useState('');
    const [posts,setPosts]=useState([]);

    useEffect(() =>{
       onSnapshot(postsRef,orderBy("timestamp","asc"), (snapshot)=> {
            setPosts(snapshot.docs.map(doc =>(
                {
                id:doc.id,
                data:doc.data()
                }
            )))
       })
    },[])

    // const delPost = async (e,id) =>{
    //     e.preventDefault();
    //     if (!id && id !== " "){
    //         alert('Invalid Post  to Delete');
    //     } 
    //     await deleteDoc(id);


    // }

    const sendPost = async e =>{
        const postDate = new Date()
        e.preventDefault();

        console.log('Adding post:', {
            name: 'Hasiba Khan',
            description: 'This is a message',
            message: input,
            photoUrl: '',
            timestamp: postDate.toLocaleString(),
        });
        setInput("");

        await addDoc(postsRef, {
            name:'Hasiba Khan',
            description:'This is a message',
            message:input,
            photoUrl:'',
            timestamp: postDate.toLocaleString(),
        });


    }
  return (
    <div className='feed'>
        <div className="feed_inputcontainer">
            <div className="feed_input">
                <CreateIcon />
                <form >
                    <input value={input} onChange={e =>setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed_inputoptions">
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"   />
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"   />
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"   />
                <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E"   />
            </div>
        </div>

        {posts.map(({id,data:{name,description,message,photoUrl}})=>(
             <Post
             key = {id}
             id={id}
             name = {name}
             description={description}
             message={message} 
             photoUrl={photoUrl}
             />
        ))}
    </div>
  )
}

export default Feed