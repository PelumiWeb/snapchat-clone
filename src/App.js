import React , {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Preview from './Components/Preview/Preview'
import Webcam from './Components/webcamCaptures/WebcamCaptures'
import './App.css';
import Chat from './Components/Chats/Chats'
import View from './Components/View/View'
import {useSelector, useDispatch} from 'react-redux'
import {selectUser, login, logout} from './features/appSlice'
import Login from './Components/Login/Login'
import {auth} from './firebase'
function App() {
  const user = useSelector(selectUser)
  console.log(user)
  const dispatch = useDispatch()


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid
          }))
          
      }
      else {
          dispatch(logout())
      }


     
    })

  }, [])

  return (
      <Router>
    <div className="App">
    {!user ? <Login /> : 
    ( 
    <>
    <img 
    className="app__logo"
    src="https://blog-assets.hootsuite.com/wp-content/uploads/2018/09/snap-ghost-yellow-310x309.png" alt="" />
    <div className="app__body">
      <div className="app_bodyBackground">
      <Switch>
    <Route path="/chats/view">
        <View />
      </Route>
      <Route path="/preview">
         <Preview />
      </Route>
      <Route exact path="/">
        <div className="webCampCaptures">
           <Webcam />
        </div>
      </Route>

      <Route exact path="/chats">
           <Chat />
      </Route>
    </Switch>
      </div>
   
  </div>
  </>

)
    
    }
</div>
      
     </Router>
  );
}

export default App;
