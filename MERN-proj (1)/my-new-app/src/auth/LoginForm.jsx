// src/LoginForm.jsx
import React, { useState } from 'react';
import './Login.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    // Check if user exists in local storage
    const storedUser = localStorage.getItem(email);
    if (storedUser) {
      const user = JSON.parse(storedUser);
      // Verify password
      if (user.password === password) {
        setSuccess('Login successful');
        setEmail('');
        setPassword('');
      } else {
        setError('Incorrect password');
      }
    } else {
      setError('User not found');
    }
  };

  return (
    <div className="form">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
