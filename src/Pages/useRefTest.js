import React, { useRef, useState } from "react";
const UseRefTest = () => {

    const password = useRef(null)
    const confirmPassword = useRef(null)
    const error = useRef(null)
    const handleSubmit = (e) =>{
        e.preventDefault()

        const userPassword = password.current.value
        const userConfirmPassword = password.current.value
        const errors = error.current
        
        if(userPassword.length < 8){
            password.current.focus()
            password.current.style = "border: 2px solid red"
            errors.innerText=('Password must be 8 or characters long')  
        }
        else if(!userPassword.match(/[0-9]/)){
            errors.innerText=('Password must contain at least 1 number')  
        }

        else if(!userPassword.match(/[a-z]/)){
            errors.innerText=('Password must contain at least 1 lowercase character')  
        }

        else if(!userPassword.match(/[A-Z]/)){
            errors.innerText=('Password must contain at least 1 uppercase character')  
        } 
       
        
        else if (userPassword !== userConfirmPassword){
            errors.innerText=('Passwords does not match')  

        }

        else if(userPassword === 'password'){
            errors.innerText=('Password cannot be "password"')
            return false
        }

        else if(userPassword === userConfirmPassword){
            errors.innerText=('')  

            const data = {
                password:userPassword,
                confirmPassword:userConfirmPassword
            }
        }
   
    }
    return ( 
        <>
        <form onSubmit={handleSubmit}>

                        <p ref={error} style = {{color:'red'}}></p>

            <label htmlFor="">Password </label><br />
            <input type="password" required ref={password}/><br />
            <label htmlFor="">Confirm Password </label><br />
            <input type="password" ref={confirmPassword}/><br />
            <button type="submit">Submit</button><br />
        </form>
        </>
     );
}
 
export default UseRefTest;