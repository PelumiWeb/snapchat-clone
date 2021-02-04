import React, {useState, useEffect} from 'react'
import Avatar from '@material-ui/core/Avatar/Avatar'
import SearchIcon from '@material-ui/icons/Search'
import ChatBubble from '@material-ui/icons/ChatBubble'
import './Chats.css'
import { db } from '../../firebase'
import {useHistory} from 'react-router-dom'
import Chats from '../Chat/Chat'
import RadioButtonChecked from '@material-ui/icons/RadioButtonUnchecked'
import {useDispatch} from 'react-redux'
import {resetCameraImage} from '../../features/cameraSlice'

function Chat() {
    const [posts, setPosts] = useState([])
    const history = useHistory()
    const dispatch = useDispatch()

    const takeSnap = () => {
        dispatch(resetCameraImage())
        history.push('/')
    }

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(Snapshot => setPosts(Snapshot.docs.map(doc => ({
            id : doc.id,
            data: doc.data()
        }))))
    }, [])
    return (
        <div className="Chat">
        <div className="chat_header">
            <Avatar  className="chats_avatar"/>
            <div className="chats_search">
                <SearchIcon className="searchIcon"/>
                <input placeholder="Friends" type="text" />
            </div>
            <ChatBubble  className="chatIcon"/> 
      </div>

      <div className="chat_posts">
          {posts.map(({id, data : {profilePic, username, timestamp, imageurl, read}}) => (
             <Chats
             key={id}
             username={username}
             profilePic={profilePic}
             timestamp={timestamp}
             imageurl={imageurl}
             read={read}

             
             />
          ))}

         </div>
         <RadioButtonChecked
         className="chats_takePicIcon"
         onClick={takeSnap}
         />
            
        </div>
    )
}

export default Chat
