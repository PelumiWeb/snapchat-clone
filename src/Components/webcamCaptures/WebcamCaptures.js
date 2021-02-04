import React, {useRef, useCallback, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router'
import Webcam from "react-webcam";
import  RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import {setCameraImage} from '../../features/cameraSlice'
import './webcam.css'

const videoConstarits = {
    width : 250,
    height : 400,
    facingMode : "user"

}

function WebcamCaptures() {
const webcamRef = useRef()
const dispatch = useDispatch()
const history = useHistory()
// const [image, setImage] = useState(null)

const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    dispatch(setCameraImage(imageSrc))
    history.push('/preview')
}, [webcamRef])

    return (
        <div className="webCaptures">
            <Webcam 
            audio={false}
            height={videoConstarits.height}
            width={videoConstarits.width}
            ref={webcamRef}
            videoConstraints={videoConstarits}
            />
            <div className="webCaptures_button" onClick={() =>  capture()}  >
            <RadioButtonCheckedIcon 
            className="webcamSnap"       
            />
            </div>
        
            
        </div>
    )
}

export default WebcamCaptures
