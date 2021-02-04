import { Button } from '@material-ui/core'
import React from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../../features/appSlice'
import {auth, provider} from '../../firebase'
import './Login.css'

function Login() {
    const dispatch = useDispatch()

    const signIn = async () => {
     const {user} = await auth.signInWithPopup(provider)
   
        dispatch(login({
            username: user.displayName,
            profilePic: user.photoURL,
            id: user.uid,
        }))

    }
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://blog-assets.hootsuite.com/wp-content/uploads/2018/09/snap-ghost-yellow-310x309.png" alt=""/>
                <Button variant='outlined' onClick={signIn}>
                    Sign in
                </Button>
            </div>
        </div>
    )
}

export default Login   
