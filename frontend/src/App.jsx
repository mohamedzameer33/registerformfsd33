import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
// import AllUsers from './components/AllUsers';
import './App.css';

// function GlobalNav() {
//   const navigate = useNavigate();
//   return (
//     <div className="nav-bar">
//       <button className='users' onClick={() => navigate('/users')}>All Users</button>
//     </div>
//   );
// }

function AppContent() {
  return (
    <>
      {/* <GlobalNav />  */}
      <Routes>
        <Route path="/" element={<Login />} />        
        <Route path="/register" element={<Register />} />       
        <Route path="/welcome" element={<Welcome />} />       
        {/* <Route path="/users" element={<AllUsers />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
