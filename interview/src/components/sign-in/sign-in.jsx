import React, {useState} from 'react';
import './sign-in.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import {auth, singInWithGoogle} from '../../firebase/firebase.utils';


const  SignIn = () =>{

  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async event => {

    try {
      await auth.signInWithEmailAndPassword(email,password);
      setEmail("");
      setPassword("");

    } catch (error) {
      console.log(error);

    }
  }

  const handleChange = (event) =>{
    const { value, name }= event.target;
    if (name ==="email") {
      setEmail(value)
    }else {
      setPassword(value)
    }
  }

    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput name='email'
                 type='email'
                 value={email}
                 handleChange={handleChange}
                 label='email'
                 required/>
          <FormInput name='password'
                 type='password'
                 value={password}
                 handleChange={handleChange}
                 label = 'password'
                 required/>
          <div className='buttons' >
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick = {singInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
            </div>
        </form>
      </div>
    )

}

export default SignIn
