import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDnzsLxqGZvO1wz6UmcRjAG-Esx1wtm0t0",
    authDomain: "snapchat-clone-yt-6081b.firebaseapp.com",
    projectId: "snapchat-clone-yt-6081b",
    storageBucket: "snapchat-clone-yt-6081b.appspot.com",
    messagingSenderId: "80958362705",
    appId: "1:80958362705:web:266b4e8d45c65414d9d470"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage() 
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, storage, provider}