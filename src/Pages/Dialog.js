// import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import { Snackbar  } from '@mui/material';

import { useState } from 'react';
import {Alerted, h1, h4} from './style'

const  AlertDialog =() =>{
  const [open, setOpen] = useState(false);
  const [notExist, setNotExist] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

 

  const handleEmail = (e) =>{
    setError('')
    setEmail(e.target.value)
  }

  const handlePassword =(e) =>{
    setError('')
    setPassword(e.target.value)


  }
  const handleSubmit = (event) =>{
    event.preventDefault();

    // if(email === ''){
    //   setError('please enter your email')
    // }

     if(password === ''){
      setError('please enter password')

    }
    else if(password.length <=6){
      setError('password must be more than 6 characters')
    }

    else if(email){
       setOpen(true);
    }
    else{
setNotExist(true)
    }
  

  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

        <form onSubmit={handleSubmit}>
            <TextField type="email" name='email' value={email} onChange={handleEmail}/>
            <TextField type="password" name='password' value={password} onChange = {handlePassword}/><br />
            <br />
            <div>{error}</div>
            <Button  type='submit'>submit</Button>
        </form>

      <Dialog
        open={open}
      >
        <div style={Alerted}>
        <DialogTitle id="alert-dialog-title">
          <h1 style={h1}>{"Password Reset"}</h1>
           <h4 style={h4}>Hi, a password reset link has been sent 
           to your email address. Please click on the link to reset your password</h4>
        </DialogTitle>
        </div>
      </Dialog>


     <Snackbar
     message = {<h1 style={h1}>'Email does not exist!'</h1>}
     autoHideDuration={4000}
     open = {notExist}
     />
    </div>
  );
}

export default AlertDialog