import React, {useEffect} from 'react';
import {useHistory } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {selectCameraImage, resetCameraImage} from '../../features/cameraSlice'
import CloseIcon from '@material-ui/icons/Close'
import TextFieldsIcon from '@material-ui/icons/TextFields'
import CreatIcon from '@material-ui/icons/Create'
import NoteIcon from '@material-ui/icons/Note'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import CropIcon from '@material-ui/icons/Crop'
import TimerIcon from '@material-ui/icons/Timer'
import Sendicon from '@material-ui/icons/Send'
import { v4 as uuid} from 'uuid'
import {db, storage} from '../../firebase'
import firebase from 'firebase'
import {selectUser} from '../../features/appSlice'
import './Preview.css'




function Preview() {
    const cameraImage = useSelector(selectCameraImage)
    const user = useSelector(selectUser)
    console.log(user)

    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        if (!cameraImage) {
            history.replace('/')
        }

    }, [cameraImage, history])

    const closePreview = () => {
        dispatch(resetCameraImage())

    }

    const sendPost = () => {
        const id = uuid()
      const uploadTask = storage.ref(`posts/${id}`).putString(cameraImage, "data_url");

      uploadTask.on('state_changed', null, (error) => {

      }, 
      () => {
          storage.ref('posts').child(id).getDownloadURL()
          .then((url) => {
              db.collection('posts').add({
                profilePic: "",
                  imageurl: url,
                  username: user.username,
                  read: false,
                  profilePic: user.profilePic,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp()
              })
              history.replace('/chats')
          }) 
      }) 

    }

    return (
        <div className="preview">
            <CloseIcon onClick={closePreview} className="preview__close" />
            <div className="preview__toolbarRight">
            <TextFieldsIcon />
            <CreatIcon />
            <NoteIcon />
            <MusicNoteIcon />
            <AttachFileIcon />
            <CropIcon />
            <TimerIcon />
            </div>
            <img src={cameraImage} alt=""/>
            <div className="preview__footer" onClick={sendPost}>
                <h2>Send Now</h2>
                <Sendicon fontSize="small" className="preview__sendIcon" /> 
            </div>
        </div> 
    )
}

export default Preview
