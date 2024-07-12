// src/SignUpForm.jsx
import React, { useState } from 'react';
import './Signup.css';

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    // Check if the user already exists
    const existingUser = localStorage.getItem(email);
    if (existingUser) {
      setError('User already exists');
    } else {
      // Save user to local storage
      const user = { name, email, password };
      localStorage.setItem(email, JSON.stringify(user));
      setSuccess('User registered successfully');
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="form">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button type="submit" onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUpForm;
