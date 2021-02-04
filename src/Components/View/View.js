import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {selectedImage} from '../../features/appSlice';
import {useHistory} from 'react-router-dom'
import './View.css'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'

function View() {
    const Image = useSelector(selectedImage)
    console.log(Image)
    const history = useHistory()
    useEffect(() => {
     if (!Image) {
        exit()
     }   
    })

    const exit = () => {
        history.replace('/chats')
    }
    return (
        <div className="View">
            <img src={Image} alt="" onClick={exit} />

            <div className="View_timer">
            <CountdownCircleTimer
            isPlaying
            duration={10}
            strokeWidth={6}
            size={50}
            colors={[
                ["#004777", 0.33],
                ["#F78801", 0.33],
                ["#A30040", 0.33]
            ]}>
                {({remainingTime}) => {
                    if (remainingTime == 0) {
                        exit()
                    }
                    return remainingTime
                }}
            
            </CountdownCircleTimer>
            </div>
           
        </div>
     )
}

export default View
