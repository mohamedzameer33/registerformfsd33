import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }
  
    try {
      const res = await axios.post('http://localhost:9090/api/login', { email, password });
      alert(res.data.message); 
      navigate('/welcome', {
        state: {
          name: res.data.name,
          phone: res.data.phone,
          email: res.data.email
        }
      });
      console.log("Navigating with:", {
        name: res.data.name,
        phone: res.data.phone,
        email: res.data.email,
      });
      
       
    } catch (err) {
      alert('Login Failed. Check your credentials.');
    }
  };
  

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      <input
        className="auth-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="auth-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="auth-button">Login</button>
      <p className="auth-footer">
        Don't have an account? <Link to="/register" className="auth-link">Register here</Link>
      </p>
    </div>
  );
}
