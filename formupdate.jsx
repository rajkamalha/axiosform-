import React from 'react'
import { useState } from 'react'
import  axios from "axios";
import { useParams, } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Formupdate() {
  const  [name,setName]=useState('')
  const  [email,setEmail]=useState('')
  
  const  [age,setAge]=useState('')
  const {id}=useParams()
  const navigate =useNavigate();

useEffect(()=>{
    console.log("ID from URL:",id);//log the ID to ensure its correct
if(id) {
    axios.get(`http://localhost:1500/data/${id}`)
    .then(response=>{
        const userData= response.data;
        setName(userData.name);
        setEmail(userData.email);
        setAge(userData.age);
    })
    .catch(error =>{
        console.error('error fetching user Data',error.response ? error.response.data :error.message);

    });
}else {
    console.error('ID is not available');
}
},[id]);
const handlesubmit=(e)=>{
    e.preventDefault();
    const formData={name,email,age};
    axios.put(`http://localhost:1500/userupdate/${id}`,formData)
    .then(response =>{
        console.log('update successfully',response.data);
        navigate('/get');   
    })
    .catch(error=>{
        console.log('error updating user:',error.response ? error.resonse.data:error.message);

    });

};

  return (
    <div>
        <form onSubmit={handlesubmit} action="">
<h1>FORM</h1>

<label htmlFor="">Name:</label>
<input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='name'/><br />
<label htmlFor="">Email:</label>
<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}placeholder='email'/><br />
<label htmlFor="">Age:</label>
<input type="number" value={age} onChange={(e)=>setAge(e.target.value)}placeholder='age'/><br />
<button type='submit' >submit</button> 

</form>
      
    </div>
  )
}

export default Formupdate
