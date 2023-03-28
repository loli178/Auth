import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginUser, logoutUser } from './authSlice';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <br />
        <label label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <br />
        <button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </button>
        <button variant="contained" color="secondary" onClick={handleLogout}>
          Logout
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
