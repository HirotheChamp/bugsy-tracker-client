import React, {useEffect, useState} from 'react'
import axios from 'axios';

import '../static/css/CurrentBug.css'


function CurrentBug(posts) {
  
  const [bugs, setBugs] = useState(null)

const [refresh, setRefresh] = useState(true)

useEffect(()=>{
 
  axios.get('http://localhost:8000/api/bug/')
      .then(res=>setBugs(res.data))
      .catch(err => console.error(err))
  
},);
// [refresh]


const deleteBug = (bugId) => {
  axios.delete('http://localhost:8000/api/bug/' + bugId)
      .then(res => {
         
        // setRefresh(!refresh)
      })
      .catch(err => console.error(err));
}
  return (
    
    <div className='current-bugs'>
      { bugs && bugs.length == 0 && 
      <><h2>Waiting for Bugs!</h2>
     
      </>
    }
       
         
            <div className='indv-bug'>
            { bugs && bugs.map((bug, i)=>(
               <><p>
                <button onClick={() => { deleteBug(bug._id); } } className='close-bug delete-button'>Delete Bug</button>
              </p><p>Assigned:<span>{bug.dev}</span></p><p>Priority:<span>{bug.priority}</span></p><p>Description:</p><p className='description-text'>
                  {bug.description}
                </p><hr /></>
                
            ))} 
            </div>
          
            
           
        </div>
        
        );
      }
    
     
  

export default CurrentBug;