import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'
import '../static/css/LoginRegistration.css'
    
const Registration = (props) => {
   


    // const { id } = useParams();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    

    const [errArray, setErrArray] = useState([])
   
    const onSubmitHandler = e => {
        
        e.preventDefault()
        
       
       
        
        

    
        axios.post('http://localhost:8000/api/user/', { userName, email, password
       })
            .then(res=> console.log(res))
            .catch(err=>{ 
                const errResponse = err.response.data.errors 
                let tempArr = []
                for (const key of Object.keys(errResponse)){
                    tempArr.push(errResponse[key].message)
                }
                setErrArray(tempArr)
            
    })
}


    
  
    return (
        <><div className='body'>
        <div className="home">
<a href="/"><i className="fa fa-home"  style={{color: "white", fontSize: "50px"}}></i></a>
</div>
<div className="center">
   <h1>Register</h1>
   <form onSubmit={onSubmitHandler}>
       <div className="txt_field">

           <input type="text" path="userName" required="required" onChange={(e) => setUserName(e.target.value)} />
           <span></span>
           <label path="userName">Username</label>

       </div>
       {/* <errors path="userName" class="text-danger" /> */}
       <div className="txt_field">
           <input type="text" path="email" required="required" onChange={(e) => setEmail(e.target.value)} />
           <span></span>
           <label path="email">Email</label>
       </div>
       {/* <errors path="email" class="text-danger" /> */}
       <div className="txt_field">
           <input type="password" path="password" required="required" onChange={(e) => setPassword(e.target.value)}  />
           <span></span>
           <label path="password">Password</label>
       </div>
    


       <input type="submit" id="completed" value="Register" />

       <div className="signup_link">
           Already a member?<Link to="/login">login</Link>
       </div>
   </form>
   {errArray.map((err, i) => (<p key={i}> {err}</p>))}  
</div>
</div></>
    )
}
    
export default Registration;