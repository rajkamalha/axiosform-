

import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
 

function Email() {
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [age,setAge]=useState('');
const navigate = useNavigate()

const handlesubmit=(e)=>{
    e.preventDefault();
const formData={name,email,age};
axios.post('http://localhost:1500/userpost',formData)
.then(response=>{
    console.log('Response:',response.data);
    
})
.catch(error=>{
    console.error('error:',error);
    
})

}

const handleView=()=>{
  navigate('/get')
}



  return (
    <div className='sh'>
<form onSubmit={handlesubmit} action="">
<h1>FORM</h1>

<label htmlFor="">Name:</label>
<input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='name'/><br />
<label htmlFor="">Email:</label>
<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}placeholder='email'/><br />
<label htmlFor="">Age:</label>
<input type="number" value={age} onChange={(e)=>setAge(e.target.value)}placeholder='age'/><br />
<button type='submit' >submit</button> 
<button onClick={handleView}>view</button>
</form>
    </div>
   
  )
}

export default Email
