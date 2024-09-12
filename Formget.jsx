
import axios from 'axios'
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function Formget() {
  const [users,setUsers]=useState([]);
  const navigate=useNavigate()

    useEffect(()=>{
      axios.get('http://localhost:1500/userget')
      .then(response=>{
          setUsers(response.data);
          
      })
      .catch(error=>{
          console.error('fetching error data',error);
          
      })

    },[])

    const handleUpdate=(id)=>{
      navigate(`/update/${id}`)
    }



// Function to handle the delete
const handleDelete = async (id) => {
  try {
      const response = await axios.delete(`http://localhost:1500/userdelete/${id}`);
      if (response.status === 200) {
          alert('User deleted successfully!');
          // Remove the deleted user from the state
          setUsers(users.filter(user => user._id !== id));
      }
  } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user.');
  }
};


  return (
    <div>
            <h2>User List</h2>
            {users.length > 0 ? (
                <div>
                    {users.map(user => (
                        <div key={user._id}>
                            <strong>Name:</strong> {user.name} <br />
                            <strong>Email:</strong> {user.email} <br />
                            <strong>Age:</strong> {user.age}
                            <button onClick={()=>handleUpdate(user._id)}>update</button>
                            <button onClick={() => handleDelete(user._id)}>Delete</button>
                        </div>
                    ))}
            </div>
            ) : (
                <p>No users found.</p>
            )}
        </div>
  )
}

export default Formget
