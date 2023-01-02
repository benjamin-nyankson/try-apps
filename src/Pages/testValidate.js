import { useState } from "react";
import {TextField, Button} from "@mui/material";
const TestValidate = () => {

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [ConfirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordError, setconfirmPasswordError] = useState('')


    const handlePassword = (e) =>{
        setPasswordError('')
        setPassword(e.target.value)
    }

    const handleConfirmPassword = (e) =>{
        setPasswordError('')
        setPassword(e.target.value)

    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(password === ''){
            setPasswordError('Password required')
        }

        else if(password.length<8){
            setPasswordError('Password must be more than 8 characters')
        }
        else if(!password.match(/[A-Z]/)){
            setPasswordError('Password must contain at least 1 uppercase letter')
        }
    }
    return ( 
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="">Password</label><br />
        <TextField
        type='password'
        value={password}
        onChange ={handlePassword}
        />
       <div style={{color:'red'}}>{passwordError}</div>
        <br /><br />

        <label htmlFor="">Confirm Password</label><br />
        <TextField
       type='password'
       value={password}
       onChange ={handleConfirmPassword}
        />
        <Button type="submit">Submit</Button>
    </form>
    </> 
    );
}
 
export default TestValidate;