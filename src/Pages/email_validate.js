// import { useState } from "react"

// const email = () => {

//     const [loading, setLoading] = useState(false)

//     const handleSubmit =(e) =>{
//         e.preventDefault()

//         const email = document.getElementById('email').value
//         const error = document.getElementById('error')
//         const pattern = "^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@" + "[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$"
//     if(email === ''){
//       document.getElementById('email').focus()
//       document.getElementById('emailLabel').style="color: red"
//         error.innerHTML = 'Please enter email'
        
//     }
//  else if(!email.match(pattern)){
//         error.innerHTML = 'Email is invalid'

//     }

//     else{
//         error.innerHTML = ''
//         setLoading(true)
//     }
//     }
//     return ( <>
//     <form onSubmit={handleSubmit}>
//         <label htmlFor="email" id="emailLabel">Email</label><br />
//         <input type="email" id="email"/><br />
//         <span id="error" style={{color:'red'}}>error</span><br />
//         <button type="submit">SUMIT</button>
//     </form>
//     </> );
// }
 
// export default email;