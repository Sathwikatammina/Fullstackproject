// App.js
import React, { useState } from 'react';
import './Exp.css';

function App() {
  // State variables for login/signup forms
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({ username: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === loginData.username && u.password === loginData.password);
    if (user) {
      setIsLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid username or password');
    }
  };

  // Function to handle signup
  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(u => u.username === signupData.username);
    if (existingUser) {
      alert('Username already exists. Please choose a different one.');
    } else {
      users.push(signupData);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Signup successful! You can now login.');
      setSignupData({ username: '', password: '' });
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {loginData.username}!</h2>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <div className="form-container">
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={loginData.username}
              onChange={e => setLoginData({ ...loginData, username: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={e => setLoginData({ ...loginData, password: e.target.value })}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
          <div className="form-container">
            <h2>Sign Up</h2>
            <input
              type="text"
              placeholder="Username"
              value={signupData.username}
              onChange={e => setSignupData({ ...signupData, username: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={signupData.password}
              onChange={e => setSignupData({ ...signupData, password: e.target.value })}
            />
            <button onClick={handleSignup}>Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
