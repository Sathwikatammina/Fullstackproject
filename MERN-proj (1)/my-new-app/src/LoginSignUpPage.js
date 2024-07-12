// LoginSignupPage.js
/*import React from 'react';
import LoginForm from './auth/LoginForm'
import SignUpForm from './auth/SignUpForm'

function LoginSignupPage() {
  return (
    <div>
      <h2>Login / Sign Up Page</h2>
      <LoginForm />
      <SignUpForm />
    </div>
  );
}

export default LoginSignupPage;*/
// LoginSignUpPage.js
/*import React from 'react';

function LoginSignUpPage() {
  return (
    <div>
      <h2>Login / Sign Up</h2>
      <p>Login or sign up to access more features.</p>
      {/* Add your login/signup form here }
    </div>
  );
}

export default LoginSignUpPage;*/
// LoginSignUpPage.js
/*import React from 'react';
import { Link } from 'react-router-dom';

function LoginSignUpPage() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Back to Home</Link></li>
        </ul>
      </nav>
      <h2>Login / Sign Up</h2>
      <p>Login or sign up to access more features.</p>
      {/* Add your login/signup form here }
    </div>
  );
}

export default LoginSignUpPage;*/
// LoginSignUpPage.js
/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginSignUpPage = () => {
  const [role, setRole] = useState('user');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (isLogin) {
      const userData = JSON.parse(localStorage.getItem(`${role}Data`));
      if (userData && userData.email === email && userData.password === password) {
        alert(`${role.charAt(0).toUpperCase() + role.slice(1)} logged in successfully`);
      } else {
        alert('Invalid credentials');
      }
    } else {
      const userData = { email, password };
      localStorage.setItem(`${role}Data`, JSON.stringify(userData));
      alert(`${role.charAt(0).toUpperCase() + role.slice(1)} signed up successfully`);
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Back to Home</Link></li>
        </ul>
      </nav>
      <h2>Login / Sign Up</h2>
      <div>
        <button onClick={() => setRole('user')}>User</button>
        <button onClick={() => setRole('host')}>Host</button>
        <button onClick={() => setRole('admin')}>Admin</button>
      </div>
      <div>
        <button onClick={() => setIsLogin(true)}>Login</button>
        <button onClick={() => setIsLogin(false)}>Sign Up</button>
      </div>
      <form onSubmit={handleAuth}>
        <h3>{isLogin ? 'Login' : 'Sign Up'} as {role.charAt(0).toUpperCase() + role.slice(1)}</h3>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default LoginSignUpPage;*/
// LoginSignUpPage.js
/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 
import backgroundImage from './17.2.jpg'; // Update this path

const LoginSignUpPage = () => {
  const [role, setRole] = useState('user');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (isLogin) {
      const userData = JSON.parse(localStorage.getItem(`${role}Data`));
      if (userData && userData.email === email && userData.password === password) {
        alert(`${role.charAt(0).toUpperCase() + role.slice(1)} logged in successfully`);
      } else {
        alert('Invalid credentials');
      }
    } else {
      const userData = { email, password };
      localStorage.setItem(`${role}Data`, JSON.stringify(userData));
      alert(`${role.charAt(0).toUpperCase() + role.slice(1)} signed up successfully`);
    }
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      color: 'white', // Assuming the background is dark; change this if necessary
    },
    nav: {
      marginBottom: '20px',
    },
    navList: {
      listStyleType: 'none',
      padding: 0,
    },
    navItem: {
      display: 'inline',
      margin: '0 10px',
    },
    buttonGroup: {
      margin: '20px 0',
    },
    button: {
      margin: '0 10px',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: '#ffffff',
      color: 'black',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    label: {
      marginBottom: '10px',
      textAlign: 'left',
      width: '100%',
    },
    input: {
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '100%',
    },
    submitButton: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#28a745',
      color: 'white',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Back to Home</Link>
          </li>
        </ul>
      </nav>
      <h2>Login / Sign Up</h2>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => setRole('user')}>User</button>
        <button style={styles.button} onClick={() => setRole('host')}>Host</button>
        <button style={styles.button} onClick={() => setRole('admin')}>Admin</button>
      </div>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => setIsLogin(true)}>Login</button>
        <button style={styles.button} onClick={() => setIsLogin(false)}>Sign Up</button>
      </div>
      <form onSubmit={handleAuth} style={styles.form}>
        <h3>{isLogin ? 'Login' : 'Sign Up'} as {role.charAt(0).toUpperCase() + role.slice(1)}</h3>
        <label style={styles.label}>
          Email:
          <input type="email" name="email" style={styles.input} required />
        </label>
        <label style={styles.label}>
          Password:
          <input type="password" name="password" style={styles.input} required />
        </label>
        <button type="submit" style={styles.submitButton}>{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default LoginSignUpPage;*/
/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import backgroundImage from './17.2.jpg'; // Update this path

const LoginSignUpPage = () => {
  const [role, setRole] = useState('user');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (isLogin) {
      const userData = JSON.parse(localStorage.getItem(`${role}Data`));
      if (userData && userData.email === email && userData.password === password) {
        alert(`${role.charAt(0).toUpperCase() + role.slice(1)} logged in successfully`);
        navigate('/events'); // Navigate to the events page
      } else {
        alert('Invalid credentials');
      }
    } else {
      const userData = { email, password };
      localStorage.setItem(`${role}Data`, JSON.stringify(userData));
      alert(`${role.charAt(0).toUpperCase() + role.slice(1)} signed up successfully`);
    }
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      color: 'white', // Assuming the background is dark; change this if necessary
    },
    nav: {
      marginBottom: '20px',
    },
    navList: {
      listStyleType: 'none',
      padding: 0,
    },
    navItem: {
      display: 'inline',
      margin: '0 10px',
    },
    buttonGroup: {
      margin: '20px 0',
    },
    button: {
      margin: '0 10px',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: '#ffffff',
      color: 'black',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    label: {
      marginBottom: '10px',
      textAlign: 'left',
      width: '100%',
    },
    input: {
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '100%',
    },
    submitButton: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#28a745',
      color: 'white',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Back to Home</Link>
          </li>
        </ul>
      </nav>
      <h2>Login / Sign Up</h2>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => setRole('user')}>User</button>
        <button style={styles.button} onClick={() => setRole('host')}>Host</button>
        <button style={styles.button} onClick={() => setRole('admin')}>Admin</button>
      </div>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => setIsLogin(true)}>Login</button>
        <button style={styles.button} onClick={() => setIsLogin(false)}>Sign Up</button>
      </div>
      <form onSubmit={handleAuth} style={styles.form}>
        <h3>{isLogin ? 'Login' : 'Sign Up'} as {role.charAt(0).toUpperCase() + role.slice(1)}</h3>
        <label style={styles.label}>
          Email:
          <input type="email" name="email" style={styles.input} required />
        </label>
        <label style={styles.label}>
          Password:
          <input type="password" name="password" style={styles.input} required />
        </label>
        <button type="submit" style={styles.submitButton}>{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default LoginSignUpPage;*/
/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import backgroundImage from './17.2.jpg';
import EventCreationForm from './EventCreationForm'; // Import the EventCreationForm component

const LoginSignUpPage = () => {
  const [role, setRole] = useState('user');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (isLogin) {
      const userData = JSON.parse(localStorage.getItem(`${role}Data`));
      if (userData && userData.email === email && userData.password === password) {
        alert(`${role.charAt(0).toUpperCase() + role.slice(1)} logged in successfully`);
        navigate('/events'); // Navigate to the events page
      } else {
        alert('Invalid credentials');
      }
    } else {
      const userData = { email, password };
      localStorage.setItem(`${role}Data`, JSON.stringify(userData));
      alert(`${role.charAt(0).toUpperCase() + role.slice(1)} signed up successfully`);
    }
  };

  const handleEventCreation = (eventDetails) => {
    // Store the event details locally or send them to a server...
    console.log('Event created:', eventDetails);
    alert('Event created successfully');
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      color: 'white', // Assuming the background is dark; change this if necessary
    },
    nav: {
      marginBottom: '20px',
    },
    navList: {
      listStyleType: 'none',
      padding: 0,
    },
    navItem: {
      display: 'inline',
      margin: '0 10px',
    },
    buttonGroup: {
      margin: '20px 0',
    },
    button: {
      margin: '0 10px',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: '#ffffff',
      color: 'black',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    label: {
      marginBottom: '10px',
      textAlign: 'left',
      width: '100%',
    },
    input: {
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '100%',
    },
    submitButton: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#28a745',
      color: 'white',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Back to Home</Link>
          </li>
        </ul>
      </nav>
      <h2>Login / Sign Up</h2>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => setRole('user')}>User</button>
        <button style={styles.button} onClick={() => setRole('host')}>Host</button>
        <button style={styles.button} onClick={() => setRole('admin')}>Admin</button>
      </div>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => setIsLogin(true)}>Login</button>
        <button style={styles.button} onClick={() => setIsLogin(false)}>Sign Up</button>
      </div>
      <form onSubmit={handleAuth} style={styles.form}>
        <h3>{isLogin ? 'Login' : 'Sign Up'} as {role.charAt(0).toUpperCase() + role.slice(1)}</h3>
        <label style={styles.label}>
          Email:
          <input type="email" name="email" style={styles.input} required />
        </label>
        <label style={styles.label}>
          Password:
          <input type="password" name="password" style={styles.input} required />
        </label>
        <button type="submit" style={styles.submitButton}>{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      {role === 'host' && (
        <EventCreationForm onSubmit={handleEventCreation} />
      )}
    </div>
  );
};

export default LoginSignUpPage;*/
/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import backgroundImage from './17.2.jpg'; // Update this path
import EventCreationForm from './EventCreationForm'; // Import the EventCreationForm component

const LoginSignUpPage = () => {
  const [role, setRole] = useState('user');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (isLogin) {
      const userData = JSON.parse(localStorage.getItem(`${role}Data`));
      if (userData && userData.email === email && userData.password === password) {
        alert(`${role.charAt(0).toUpperCase() + role.slice(1)} logged in successfully`);
        if (role === 'user') {
          navigate('/events'); // Navigate to the events page for user
        } else if (role === 'host') {
          navigate('/host/events'); // Navigate to the host events page for host
        }
      } else {
        alert('Invalid credentials');
      }
    } else {
      const userData = { email, password };
      localStorage.setItem(`${role}Data`, JSON.stringify(userData));
      alert(`${role.charAt(0).toUpperCase() + role.slice(1)} signed up successfully`);
    }
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      color: 'white', // Assuming the background is dark; change this if necessary
    },
    nav: {
      marginBottom: '20px',
    },
    navList: {
      listStyleType: 'none',
      padding: 0,
    },
    navItem: {
      display: 'inline',
      margin: '0 10px',
    },
    buttonGroup: {
      margin: '20px 0',
    },
    button: {
      margin: '0 10px',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: '#ffffff',
      color: 'black',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    label: {
      marginBottom: '10px',
      textAlign: 'left',
      width: '100%',
    },
    input: {
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '100%',
    },
    submitButton: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#28a745',
      color: 'white',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Back to Home</Link>
          </li>
        </ul>
      </nav>
      <h2>Login / Sign Up</h2>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => setRole('user')}>User</button>
        <button style={styles.button} onClick={() => setRole('host')}>Host</button>
        <button style={styles.button} onClick={() => setRole('admin')}>Admin</button>
      </div>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => setIsLogin(true)}>Login</button>
        <button style={styles.button} onClick={() => setIsLogin(false)}>Sign Up</button>
      </div>
      <form onSubmit={handleAuth} style={styles.form}>
        <h3>{isLogin ? 'Login' : 'Sign Up'} as {role.charAt(0).toUpperCase() + role.slice(1)}</h3>
        <label style={styles.label}>
          Email:
          <input type="email" name="email" style={styles.input} required />
        </label>
        <label style={styles.label}>
          Password:
          <input type="password" name="password" style={styles.input} required />
        </label>
        <button type="submit" style={styles.submitButton}>{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      {role === 'host' && !isLogin && (
        <EventCreationForm />
      )}
    </div>
  );
};

export default LoginSignUpPage;*/
/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import backgroundImage from './17.2.jpg'; // Update this path
import EventCreationForm from './EventCreationForm';

const LoginSignUpPage = () => {
  const [role, setRole] = useState('user');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (isLogin) {
      const userData = JSON.parse(localStorage.getItem(`${role}Data`));
      if (userData && userData.email === email && userData.password === password) {
        alert(`${role.charAt(0).toUpperCase() + role.slice(1)} logged in successfully`);
        if (role === 'user') {
          navigate('/events'); // Navigate to the events page for user
        } else if (role === 'host') {
          navigate('/host/events/create'); // Navigate to the event creation page for host
        }
      } else {
        alert('Invalid credentials');
      }
    } else {
      const userData = { email, password };
      localStorage.setItem(`${role}Data`, JSON.stringify(userData));
      alert(`${role.charAt(0).toUpperCase() + role.slice(1)} signed up successfully`);
    }
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      color: 'white', // Assuming the background is dark; change this if necessary
    },
    nav: {
      marginBottom: '20px',
    },
    navList: {
      listStyleType: 'none',
      padding: 0,
    },
    navItem: {
      display: 'inline',
      margin: '0 10px',
    },
    buttonGroup: {
      margin: '20px 0',
    },
    button: {
      margin: '0 10px',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: '#ffffff',
      color: 'black',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    label: {
      marginBottom: '10px',
      textAlign: 'left',
      width: '100%',
    },
    input: {
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '100%',
    },
    submitButton: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#28a745',
      color: 'white',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Back to Home</Link>
          </li>
        </ul>
      </nav>
      <h2>Login / Sign Up</h2>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => setRole('user')}>User</button>
        <button style={styles.button} onClick={() => setRole('host')}>Host</button>
        <button style={styles.button} onClick={() => setRole('admin')}>Admin</button>
      </div>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => setIsLogin(true)}>Login</button>
        <button style={styles.button} onClick={() => setIsLogin(false)}>Sign Up</button>
      </div>
      <form onSubmit={handleAuth} style={styles.form}>
        <h3>{isLogin ? 'Login' : 'Sign Up'} as {role.charAt(0).toUpperCase() + role.slice(1)}</h3>
        <label style={styles.label}>
          Email:
          <input type="email" name="email" style={styles.input} required />
        </label>
        <label style={styles.label}>
          Password:
          <input type="password" name="password" style={styles.input} required />
        </label>
        <button type="submit" style={styles.submitButton}>{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default LoginSignUpPage;*/
// LoginSignUpPage.js
/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import backgroundImage from './17.2.jpg'; // Update this path

const LoginSignUpPage = () => {
  const [role, setRole] = useState('user');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (isLogin) {
      const userData = JSON.parse(localStorage.getItem(`${role}Data`));
      if (userData && userData.email === email && userData.password === password) {
        alert(`${role.charAt(0).toUpperCase() + role.slice(1)} logged in successfully`);
        if (role === 'user') {
          navigate('/events'); // Navigate to the events page for user
        } else if (role === 'host') {
          navigate('/host'); // Navigate to the host's page
        }
      } else {
        alert('Invalid credentials');
      }
    } else {
      const userData = { email, password };
      localStorage.setItem(`${role}Data`, JSON.stringify(userData));
      alert(`${role.charAt(0).toUpperCase() + role.slice(1)} signed up successfully`);
    }
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      color: 'white', // Assuming the background is dark; change this if necessary
    },
    nav: {
      marginBottom: '20px',
    },
    navList: {
      listStyleType: 'none',
      padding: 0,
    },
    navItem: {
      display: 'inline',
      margin: '0 10px',
    },
    buttonGroup: {
      margin: '20px 0',
    },
    button: {
      margin: '0 10px',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: '#ffffff',
      color: 'black',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    label: {
      marginBottom: '10px',
      textAlign: 'left',
      width: '100%',
    },
    input: {
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '100%',
    },
    submitButton: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#28a745',
      color: 'white',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Back to Home</Link>
          </li>
        </ul>
      </nav>
      <h2>Login / Sign Up</h2>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => setRole('user')}>User</button>
        <button style={styles.button} onClick={() => setRole('host')}>Host</button>
        <button style={styles.button} onClick={() => setRole('admin')}>Admin</button>
      </div>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => setIsLogin(true)}>Login</button>
        <button style={styles.button} onClick={() => setIsLogin(false)}>Sign Up</button>
      </div>
      <form onSubmit={handleAuth} style={styles.form}>
        <h3>{isLogin ? 'Login' : 'Sign Up'} as {role.charAt(0).toUpperCase() + role.slice(1)}</h3>
        <label style={styles.label}>
          Email:
          <input type="email" name="email" style={styles.input} required />
        </label>
        <label style={styles.label}>
          Password:
          <input type="password" name="password" style={styles.input} required />
        </label>
        <button type="submit" style={styles.submitButton}>{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default LoginSignUpPage;*/
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import backgroundImage from './17.2.jpg'; // Update this path

const LoginSignUpPage = () => {
  const [role, setRole] = useState('user');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (isLogin) {
      const userData = JSON.parse(localStorage.getItem(`${role}Data`));
      if (userData && userData.email === email && userData.password === password) {
        alert(`${role.charAt(0).toUpperCase() + role.slice(1)} logged in successfully`);
        if (role === 'user') {
          navigate('/events'); // Navigate to the events page for user
        } else if (role === 'host') {
          navigate('/host'); // Navigate to the host page
        } else if (role === 'admin') {
          navigate('/admin'); // Navigate to the admin page
        }
      } else {
        alert('Invalid credentials');
      }
    } else {
      const userData = { email, password };
      localStorage.setItem(`${role}Data`, JSON.stringify(userData));
      alert(`${role.charAt(0).toUpperCase() + role.slice(1)} signed up successfully`);
    }
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      color: 'white', // Assuming the background is dark; change this if necessary
    },
    nav: {
      marginBottom: '20px',
    },
    navList: {
      listStyleType: 'none',
      padding: 0,
    },
    navItem: {
      display: 'inline',
      margin: '0 10px',
    },
    buttonGroup: {
      margin: '20px 0',
    },
    button: {
      margin: '0 10px',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: '#ffffff',
      color: 'black',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    label: {
      marginBottom: '10px',
      textAlign: 'left',
      width: '100%',
    },
    input: {
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '100%',
    },
    submitButton: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#28a745',
      color: 'white',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Back to Home</Link>
          </li>
        </ul>
      </nav>
      <h2>Login / Sign Up</h2>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => setRole('user')}>User</button>
        <button style={styles.button} onClick={() => setRole('host')}>Host</button>
        <button style={styles.button} onClick={() => setRole('admin')}>Admin</button>
      </div>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => setIsLogin(true)}>Login</button>
        <button style={styles.button} onClick={() => setIsLogin(false)}>Sign Up</button>
      </div>
      <form onSubmit={handleAuth} style={styles.form}>
        <h3>{isLogin ? 'Login' : 'Sign Up'} as {role.charAt(0).toUpperCase() + role.slice(1)}</h3>
        <label style={styles.label}>
          Email:
          <input type="email" name="email" style={styles.input} required />
        </label>
        <label style={styles.label}>
          Password:
          <input type="password" name="password" style={styles.input} required />
        </label>
        <button type="submit" style={styles.submitButton}>{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default LoginSignUpPage;







