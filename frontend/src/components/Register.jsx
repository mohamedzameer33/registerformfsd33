import { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom'; 

export default function Register({ onSwitch }) {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:9090/api/register', {
        name,
        email,
        phone,
        password,
      });
      window.location.href = '/';
      alert(res.data);
      if (onSwitch) onSwitch(); // Optional chaining to prevent error if not passed
    } catch (err) {
      alert('Registration Failed');
    }
  };



  return (
    <div>
      
    <div className="auth-container">
      <h2 className="auth-title">Register</h2>
      <input
        className="auth-input"
        placeholder="Name"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}/>
      <input
        className="auth-input"
        placeholder="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="auth-input"
        placeholder="Phone"
        type="phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <input
        className="auth-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="auth-button" onClick={handleRegister}>Register</button>
      <p className="auth-footer">
        Already have an account? <Link to="/" className="auth-link">Login here</Link>
      </p>
    </div>
    </div>
  );
}
