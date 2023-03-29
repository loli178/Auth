import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, closeSession } from './authSlice';
import { loginUser, logoutUser } from './authSlice';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
    console.log(email, password);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Email</label>
        <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <br />
        <label>Password</label>
        <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <br />
        <button onClick={handleLogin}>Login</button>
        <br></br>
        <button onClick={handleLogout}>Logout</button>
      </form>
    </div>
  );
}

export default LoginForm;
