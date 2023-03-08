import firebase from'firebase/compat/app'; //imported after registering app on firebase
import 'firebase/compat/auth'; //impoted only after enabling google authentication on firebase

//modification in import path from firebase /compat/app is added

const firebaseConfig = {  //configuration boiler plate code copied grom fire base
  apiKey: "AIzaSyCzbeDcbtAPu1NR54YtOcsGE_0Clh8ikGo",
  authDomain: "my-you-tube-clone-1.firebaseapp.com",
  projectId: "my-you-tube-clone-1",
  storageBucket: "my-you-tube-clone-1.appspot.com",
  messagingSenderId: "921717637022",
  appId: "1:921717637022:web:dbd6559b8e9fd97e48608f"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()