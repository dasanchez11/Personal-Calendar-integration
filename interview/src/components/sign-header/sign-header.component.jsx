import React from 'react';
import {auth} from '../../firebase/firebase.utils'
import './sign-header.styles.scss'

const SignHeader = (signed) => {
  const handleSignOutClick = () => {

  }
  return (
    <div className="sign-header">
      {signed.signed ?
      <ul className="option" onClick={() => auth.signOut()} >SIGN OUT</ul>
      :
      <ul className="option">SIGN IN</ul>
      }

    </div>
  )
}

export default SignHeader;
