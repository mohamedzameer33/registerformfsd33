import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';


export default function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9090/api/users')
      .then(res => {
        console.log(res.data); 
        setUsers(res.data);
      })
      .catch(err => {
        console.error("Error fetching users", err);
      });
  }, []);



  return (
   
    <div>

      <h2  style={{color:"green"}}>All Users</h2>
      <ol style={{color:"black", marginLeft:"20px"}}>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email} -{user.phone}
          </li>
        ))}
      </ol>
    </div>
  );
}
