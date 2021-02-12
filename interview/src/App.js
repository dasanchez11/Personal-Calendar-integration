import React,{useState, useEffect, useRef} from 'react';
import Calendar from './components/calendar/calendar.component';
import SignIn from './components/sign-in/sign-in';
import {auth} from './firebase/firebase.utils'
import SignHeader from './components/sign-header/sign-header.component'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const unsubscribeFromAuth = useRef(null);
  useEffect(()=> {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    });
    return ()=> unsubscribeFromAuth;
  },[])


  return (
  <div>
    { currentUser ?
      (<div><SignHeader signed={true}/> <Calendar/> </div>)
      :
      (<div> <SignHeader /> <SignIn/></div>)

    }

  </div>
)}

export default App;
