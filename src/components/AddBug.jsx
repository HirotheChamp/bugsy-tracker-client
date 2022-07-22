import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'
import '../static/css/AddBug.css'



function AddBug() {
const [description, setDescription] = useState('');
const [dev, setDev] = useState('');
const [priority, setPriority] = useState('');

const [errArray, setErrArray] = useState([])

const onSubmitHandler = e => {
        
  e.preventDefault();

  axios.post('http://localhost:8000/api/bug/', { 
    description, dev, priority
  })
      .then(res=>  console.log(res))
      .catch(err =>{
           const errResponse = err.response.data.errors 
           let tempArr = []
           for (const key of Object.keys(errResponse)){
               tempArr.push(errResponse[key].message)
           }
           setErrArray(tempArr)
          })
}





  return (
    <div className='add-bug'>
      <div id="error"></div>
      <form id='form' onSubmit={onSubmitHandler}>
        
          <label>
              Description
              <input type='text' id='description' placeholder='Description of Bug...' onChange={(e) => setDescription(e.target.value)}/>
          </label>
          <label>
              Assign To
          <select name="dev" id="dev" onChange={(e) => setDev(e.target.value)}>
                    <option hidden="">Select a Developer...</option> 
                    <option value="Brock">Brock</option>
                    <option value="Phil">Phil</option>
                    <option value="Bruv">Bruv</option>
                    <option value="Myguy">Myguy</option>
                </select>
                </label>
                <label>
                    Priority 
                <select name="priority" id="priority" onChange={(e) => setPriority(e.target.value)}>
                <option hidden="">Select a Priority...</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="mandatory">Mandatory</option>
                </select>
                </label>
                <button className="view-button blue-button" type='submit'>Add</button>
      </form>
      {
     errArray.map((err, i)=>(<p key={i}> {err}</p>))
  }
    </div>
  )
}

export default AddBug;