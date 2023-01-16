import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet } from 'react-router-dom';
import { Home } from './pages/home';
import { Auth } from './pages/auth';
import { AuthProvider } from './auth/auth-provider';
import './App.css';


const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
