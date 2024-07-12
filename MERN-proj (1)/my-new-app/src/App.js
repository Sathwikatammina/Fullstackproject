// App.js
/*import React from 'react';
import './App.css';
import ReactLogo from './logo.jpg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="about" className="section">
        <img src={ReactLogo} height="400" width="1000"/>
        <h2>About Us</h2>
        <p>Welcome to our website!<br /> We are dedicated to providing you with the best experience.<br /> Your go-to platform for booking tickets to <br />live shows, stand-up comedy, pre-release events, and concerts and many more..<br />
        Discover and book your next unforgettable experience with ease.<br />
        **Our Mission**<br />
          At Evento Inicios, our mission is to transform your visions into reality.<br /> We strive to deliver exceptional events that exceed expectations and leave lasting impressions.<br />
          **Our Services**<br />
          - Corporate Events: From conferences to team-building activities, we manage all types of corporate events with precision and professionalism.<br />
          - Weddings: We create magical weddings that reflect your unique love story and style.<br />
          - Social Events: From birthdays to anniversaries, we bring your special occasions to life.<br />
          - Special Events: Product launches, gala dinners, charity events – we handle it all with flair.<br /></p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>Feel free to contact us if you have any questions or feedback.<br />Have questions or need assistance? <br />
        Reach out to us at eventoinicios@gmail .com or call us at 9876543210.<br />We're here to help!</p>
      </div>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/LoginSignUpPage">Login / Sign Up</a></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/login">Login / Sign Up</a></li>
      </ul>
    </footer>
  );
}

export default App;*/
// App.js
/*import React from 'react';
import './App.css';
import ReactLogo from './logo.jpg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="about" className="section">
        <img src={ReactLogo} height="400" width="1000"/>
        <h2>About Us</h2>
        <p>Welcome to our website!<br /> We are dedicated to providing you with the best experience.<br /> Your go-to platform for booking tickets to <br />live shows, stand-up comedy, pre-release events, and concerts and many more..<br />
        Discover and book your next unforgettable experience with ease.<br />
        *Our Mission*<br />
          At Evento Inicios, our mission is to transform your visions into reality.<br /> We strive to deliver exceptional events that exceed expectations and leave lasting impressions.<br />
          *Our Services*<br />
          - Corporate Events: From conferences to team-building activities, we manage all types of corporate events with precision and professionalism.<br />
          - Weddings: We create magical weddings that reflect your unique love story and style.<br />
          - Social Events: From birthdays to anniversaries, we bring your special occasions to life.<br />
          - Special Events: Product launches, gala dinners, charity events – we handle it all with flair.<br /></p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>Feel free to contact us if you have any questions or feedback.<br />Have questions or need assistance? <br />
        Reach out to us at eventoinicios@gmail .com or call us at 9876543210.<br />We're here to help!</p>
      </div>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/Exp">Login / Sign Up</a></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/login">Login / Sign Up</a></li>
      </ul>
    </footer>
  );
}

export default App;*/
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ReactLogo from './logo.jpg';
import LoginSignUpPage from './LoginSignUpPage'; // Import the LoginSignUpPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUpPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <div id="about" className="section">
        <img src={ReactLogo} height="400" width="1000" alt="React Logo"/>
        <h2>About Us</h2>
        <p>
          Welcome to our website!<br /> We are dedicated to providing you with the best experience.<br /> Your go-to platform for booking tickets to <br />live shows, stand-up comedy, pre-release events, and concerts and many more..<br />
          Discover and book your next unforgettable experience with ease.<br />
          <strong>Our Mission</strong><br />
          At Evento Inicios, our mission is to transform your visions into reality.<br /> We strive to deliver exceptional events that exceed expectations and leave lasting impressions.<br />
          <strong>Our Services</strong><br />
          - Corporate Events: From conferences to team-building activities, we manage all types of corporate events with precision and professionalism.<br />
          - Weddings: We create magical weddings that reflect your unique love story and style.<br />
          - Social Events: From birthdays to anniversaries, we bring your special occasions to life.<br />
          - Special Events: Product launches, gala dinners, charity events – we handle it all with flair.<br />
        </p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to contact us if you have any questions or feedback.<br />Have questions or need assistance? <br />
          Reach out to us at eventoinicios@gmail.com or call us at 9876543210.<br />We're here to help!
        </p>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </footer>
  );
}

export default App;*/
// App.js
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ReactLogo from './logo.jpg';
import LoginSignUpPage from './LoginSignUpPage'; // Import the LoginSignUpPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUpPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <div id="about" className="section">
        <img src={ReactLogo} height="400" width="1000" alt="React Logo"/>
        <h2>About Us</h2>
        <p>
          Welcome to our website!<br /> We are dedicated to providing you with the best experience.<br /> Your go-to platform for booking tickets to <br />live shows, stand-up comedy, pre-release events, and concerts and many more..<br />
          Discover and book your next unforgettable experience with ease.<br />
          <strong>Our Mission</strong><br />
          At Evento Inicios, our mission is to transform your visions into reality.<br /> We strive to deliver exceptional events that exceed expectations and leave lasting impressions.<br />
          <strong>Our Services</strong><br />
          - Corporate Events: From conferences to team-building activities, we manage all types of corporate events with precision and professionalism.<br />
          - Weddings: We create magical weddings that reflect your unique love story and style.<br />
          - Social Events: From birthdays to anniversaries, we bring your special occasions to life.<br />
          - Special Events: Product launches, gala dinners, charity events – we handle it all with flair.<br />
        </p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to contact us if you have any questions or feedback.<br />Have questions or need assistance? <br />
          Reach out to us at eventoinicios@gmail.com or call us at 9876543210.<br />We're here to help!
        </p>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </footer>
  );
}

export default App;*/
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ReactLogo from './logo.jpg';
import LoginSignUpPage from './LoginSignUpPage'; // Import the LoginSignUpPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUpPage />} />
        </Routes>

      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <div id="about" className="section">
        <img src={ReactLogo} height="400" width="1000" alt="React Logo" />
        <h2>About Us</h2>
        <p>
          Welcome to our website!<br /> We are dedicated to providing you with the best experience.<br /> Your go-to platform for booking tickets to <br />live shows, stand-up comedy, pre-release events, and concerts and many more..<br />
          Discover and book your next unforgettable experience with ease.<br />
          <strong>Our Mission</strong><br />
          At Evento Inicios, our mission is to transform your visions into reality.<br /> We strive to deliver exceptional events that exceed expectations and leave lasting impressions.<br />
          <strong>Our Services</strong><br />
          - Corporate Events: From conferences to team-building activities, we manage all types of corporate events with precision and professionalism.<br />
          - Weddings: We create magical weddings that reflect your unique love story and style.<br />
          - Social Events: From birthdays to anniversaries, we bring your special occasions to life.<br />
          - Special Events: Product launches, gala dinners, charity events – we handle it all with flair.<br />
        </p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to contact us if you have any questions or feedback.<br />Have questions or need assistance? <br />
          Reach out to us at eventoinicios@gmail.com or call us at 9876543210.<br />We're here to help!
        </p>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </footer>
  );
}

export default App;*/
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ReactLogo from './logo.jpg';
import LoginSignUpPage from './LoginSignUpPage'; // Import the LoginSignUpPage component
import EventsPage from './EventsPage'; // Import the EventsPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUpPage />} />
          <Route path="/events" element={<EventsPage />} /> {/* Add the new route }
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <div id="about" className="section">
        <img src={ReactLogo} height="400" width="1000" alt="React Logo" />
        <h2>About Us</h2>
        <p>
          Welcome to our website!<br /> We are dedicated to providing you with the best experience.<br /> Your go-to platform for booking tickets to <br />live shows, stand-up comedy, pre-release events, and concerts and many more..<br />
          Discover and book your next unforgettable experience with ease.<br />
          <strong>Our Mission</strong><br />
          At Evento Inicios, our mission is to transform your visions into reality.<br /> We strive to deliver exceptional events that exceed expectations and leave lasting impressions.<br />
          <strong>Our Services</strong><br />
          - Corporate Events: From conferences to team-building activities, we manage all types of corporate events with precision and professionalism.<br />
          - Weddings: We create magical weddings that reflect your unique love story and style.<br />
          - Social Events: From birthdays to anniversaries, we bring your special occasions to life.<br />
          - Special Events: Product launches, gala dinners, charity events – we handle it all with flair.<br />
        </p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to contact us if you have any questions or feedback.<br />Have questions or need assistance? <br />
          Reach out to us at eventoinicios@gmail.com or call us at 9876543210.<br />We're here to help!
        </p>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default App;*/
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ReactLogo from './logo.jpg';
import LoginSignUpPage from './LoginSignUpPage'; // Import the LoginSignUpPage component
import EventsPage from './EventsPage'; // Import the EventsPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUpPage />} />
          <Route path="/events" element={<EventsPage />} /> {/* Add the new route }
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <div id="about" className="section">
        <img src={ReactLogo} height="400" width="1000" alt="React Logo" />
        <h2>About Us</h2>
        <p>
          Welcome to our website!<br /> We are dedicated to providing you with the best experience.<br /> Your go-to platform for booking tickets to <br />live shows, stand-up comedy, pre-release events, and concerts and many more..<br />
          Discover and book your next unforgettable experience with ease.<br />
          <strong>Our Mission</strong><br />
          At Evento Inicios, our mission is to transform your visions into reality.<br /> We strive to deliver exceptional events that exceed expectations and leave lasting impressions.<br />
          <strong>Our Services</strong><br />
          - Corporate Events: From conferences to team-building activities, we manage all types of corporate events with precision and professionalism.<br />
          - Weddings: We create magical weddings that reflect your unique love story and style.<br />
          - Social Events: From birthdays to anniversaries, we bring your special occasions to life.<br />
          - Special Events: Product launches, gala dinners, charity events – we handle it all with flair.<br />
        </p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to contact us if you have any questions or feedback.<br />Have questions or need assistance? <br />
          Reach out to us at eventoinicios@gmail.com or call us at 9876543210.<br />We're here to help!
        </p>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default App;*/
// App.js
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ReactLogo from './logo.jpg';
import LoginSignUpPage from './LoginSignUpPage';
import EventsPage from './EventsPage';
import HostPage from './HostPage';
import EventCreationForm from './EventCreationForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUpPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/host" element={<HostPage />} />
          <Route path="/host/events/create" element={<EventCreationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <div id="about" className="section">
        <img src={ReactLogo} height="400" width="1000" alt="React Logo" />
        <h2>About Us</h2>
        <p>
          Welcome to our website!<br /> We are dedicated to providing you with the best experience.<br /> Your go-to platform for booking tickets to <br />live shows, stand-up comedy, pre-release events, and concerts and many more..<br />
          Discover and book your next unforgettable experience with ease.<br />
          <strong>Our Mission</strong><br />
          At Evento Inicios, our mission is to transform your visions into reality.<br /> We strive to deliver exceptional events that exceed expectations and leave lasting impressions.<br />
          <strong>Our Services</strong><br />
          - Corporate Events: From conferences to team-building activities, we manage all types of corporate events with precision and professionalism.<br />
          - Weddings: We create magical weddings that reflect your unique love story and style.<br />
          - Social Events: From birthdays to anniversaries, we bring your special occasions to life.<br />
          - Special Events: Product launches, gala dinners, charity events – we handle it all with flair.<br />
        </p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to contact us if you have any questions or feedback.<br />Have questions or need assistance? <br />
          Reach out to us at eventoinicios@gmail.com or call us at 9876543210.<br />We're here to help!
        </p>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default App;*/
// App.js
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ReactLogo from './logo.jpg';
import LoginSignUpPage from './LoginSignUpPage';
import EventDetailsPage from './EventDetailsPage';
import HostPage from './HostPage';
import EventCreationForm from './EventCreationForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUpPage />} />
          <Route path="/events" element={<EventDetailsPage />} />
          <Route path="/host" element={<HostPage />} />
          <Route path="/host/events/create" element={<EventCreationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <div id="about" className="section">
        <img src={ReactLogo} height="400" width="1000" alt="React Logo" />
        <h2>About Us</h2>
        <p>
          Welcome to our website!<br /> We are dedicated to providing you with the best experience.<br /> Your go-to platform for booking tickets to <br />live shows, stand-up comedy, pre-release events, and concerts and many more..<br />
          Discover and book your next unforgettable experience with ease.<br />
          <strong>Our Mission</strong><br />
          At Evento Inicios, our mission is to transform your visions into reality.<br /> We strive to deliver exceptional events that exceed expectations and leave lasting impressions.<br />
          <strong>Our Services</strong><br />
          - Corporate Events: From conferences to team-building activities, we manage all types of corporate events with precision and professionalism.<br />
          - Weddings: We create magical weddings that reflect your unique love story and style.<br />
          - Social Events: From birthdays to anniversaries, we bring your special occasions to life.<br />
          - Special Events: Product launches, gala dinners, charity events – we handle it all with flair.<br />
        </p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to contact us if you have any questions or feedback.<br />Have questions or need assistance? <br />
          Reach out to us at eventoinicios@gmail.com or call us at 9876543210.<br />We're here to help!
        </p>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default App;*/
// App.js
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ReactLogo from './logo.jpg';
import LoginSignUpPage from './LoginSignUpPage';
import EventDetailsPage from './EventDetailsPage';
import HostPage from './HostPage';
import EventCreationForm from './EventCreationForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUpPage />} />
          <Route path="/events" element={<EventDetailsPage />} />
          <Route path="/host" element={<HostPage />} />
          <Route path="/host/events/create" element={<EventCreationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <div id="about" className="section">
        <img src={ReactLogo} height="400" width="1000" alt="React Logo" />
        <h2>About Us</h2>
        <p>
          Welcome to our website!<br /> We are dedicated to providing you with the best experience.<br /> Your go-to platform for booking tickets to <br />live shows, stand-up comedy, pre-release events, and concerts and many more..<br />
          Discover and book your next unforgettable experience with ease.<br />
          <strong>Our Mission</strong><br />
          At Evento Inicios, our mission is to transform your visions into reality.<br /> We strive to deliver exceptional events that exceed expectations and leave lasting impressions.<br />
          <strong>Our Services</strong><br />
          - Corporate Events: From conferences to team-building activities, we manage all types of corporate events with precision and professionalism.<br />
          - Weddings: We create magical weddings that reflect your unique love story and style.<br />
          - Social Events: From birthdays to anniversaries, we bring your special occasions to life.<br />
          - Special Events: Product launches, gala dinners, charity events – we handle it all with flair.<br />
        </p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to contact us if you have any questions or feedback.<br />Have questions or need assistance? <br />
          Reach out to us at eventoinicios@gmail.com or call us at 9876543210.<br />We're here to help!
        </p>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default App;*/
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ReactLogo from './logo.jpg';
import LoginSignUpPage from './LoginSignUpPage';
import EventDetailsPage from './EventDetailsPage';
import HostPage from './HostPage';
import EventCreationForm from './EventCreationForm';
import BookingPage from './BookingPage';  // Import the BookingPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUpPage />} />
          <Route path="/events" element={<EventDetailsPage />} />
          <Route path="/host" element={<HostPage />} />
          <Route path="/host/events/create" element={<EventCreationForm />} />
          <Route path="/book/:eventId" element={<BookingPage />} />  {/* Add the BookingPage route }
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <div id="about" className="section">
        <img src={ReactLogo} height="400" width="1000" alt="React Logo" />
        <h2>About Us</h2>
        <p>
          Welcome to our website!<br /> We are dedicated to providing you with the best experience.<br /> Your go-to platform for booking tickets to <br />live shows, stand-up comedy, pre-release events, and concerts and many more..<br />
          Discover and book your next unforgettable experience with ease.<br />
          <strong>Our Mission</strong><br />
          At Evento Inicios, our mission is to transform your visions into reality.<br /> We strive to deliver exceptional events that exceed expectations and leave lasting impressions.<br />
          <strong>Our Services</strong><br />
          - Corporate Events: From conferences to team-building activities, we manage all types of corporate events with precision and professionalism.<br />
          - Weddings: We create magical weddings that reflect your unique love story and style.<br />
          - Social Events: From birthdays to anniversaries, we bring your special occasions to life.<br />
          - Special Events: Product launches, gala dinners, charity events – we handle it all with flair.<br />
        </p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to contact us if you have any questions or feedback.<br />Have questions or need assistance? <br />
          Reach out to us at eventoinicios@gmail.com or call us at 9876543210.<br />We're here to help!
        </p>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default App;*/

/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ReactLogo from './logo.jpg';
import LoginSignUpPage from './LoginSignUpPage';
import EventDetailsPage from './EventDetailsPage';
import HostPage from './HostPage';
import EventCreationForm from './EventCreationForm';
import BookingPage from './BookingPage';
import PaymentPage from './PaymentPage';  // Import the PaymentPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUpPage />} />
          <Route path="/events" element={<EventDetailsPage />} />
          <Route path="/host" element={<HostPage />} />
          <Route path="/host/events/create" element={<EventCreationForm />} />
          <Route path="/book/:eventId" element={<BookingPage />} />  {/* BookingPage route }
          <Route path="/payment/:eventId" element={<PaymentPage />} />  {/* PaymentPage route }
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <div id="about" className="section">
        <img src={ReactLogo} height="400" width="1000" alt="React Logo" />
        <h2>About Us</h2>
        <p>
          Welcome to our website!<br /> We are dedicated to providing you with the best experience.<br /> Your go-to platform for booking tickets to <br />live shows, stand-up comedy, pre-release events, and concerts and many more..<br />
          Discover and book your next unforgettable experience with ease.<br />
          <strong>Our Mission</strong><br />
          At Evento Inicios, our mission is to transform your visions into reality.<br /> We strive to deliver exceptional events that exceed expectations and leave lasting impressions.<br />
          <strong>Our Services</strong><br />
          - Corporate Events: From conferences to team-building activities, we manage all types of corporate events with precision and professionalism.<br />
          - Weddings: We create magical weddings that reflect your unique love story and style.<br />
          - Social Events: From birthdays to anniversaries, we bring your special occasions to life.<br />
          - Special Events: Product launches, gala dinners, charity events – we handle it all with flair.<br />
        </p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to contact us if you have any questions or feedback.<br />Have questions or need assistance? <br />
          Reach out to us at eventoinicios@gmail.com or call us at 9876543210.<br />We're here to help!
        </p>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default App;*/

/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ReactLogo from './logo.jpg';
import LoginSignUpPage from './LoginSignUpPage';
import EventDetailsPage from './EventDetailsPage';
import HostPage from './HostPage';
import EventCreationForm from './EventCreationForm';
import BookingPage from './BookingPage';
import PaymentPage from './PaymentPage';
import ProceedToPaymentPage from './ProceedToPaymentPage'; // Import the new page

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUpPage />} />
          <Route path="/events" element={<EventDetailsPage />} />
          <Route path="/host" element={<HostPage />} />
          <Route path="/host/events/create" element={<EventCreationForm />} />
          <Route path="/book/:eventId" element={<BookingPage />} />
          <Route path="/payment/:eventId" element={<PaymentPage />} />
          <Route path="/proceed-to-payment" element={<ProceedToPaymentPage />} /> {/* Add the new route }
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <div id="about" className="section">
        <img src={ReactLogo} height="400" width="1000" alt="React Logo" />
        <h2>About Us</h2>
        <p>
          Welcome to our website!<br /> We are dedicated to providing you with the best experience.<br /> Your go-to platform for booking tickets to <br />live shows, stand-up comedy, pre-release events, and concerts and many more..<br />
          Discover and book your next unforgettable experience with ease.<br />
          <strong>Our Mission</strong><br />
          At Evento Inicios, our mission is to transform your visions into reality.<br /> We strive to deliver exceptional events that exceed expectations and leave lasting impressions.<br />
          <strong>Our Services</strong><br />
          - Corporate Events: From conferences to team-building activities, we manage all types of corporate events with precision and professionalism.<br />
          - Weddings: We create magical weddings that reflect your unique love story and style.<br />
          - Social Events: From birthdays to anniversaries, we bring your special occasions to life.<br />
          - Special Events: Product launches, gala dinners, charity events – we handle it all with flair.<br />
        </p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to contact us if you have any questions or feedback.<br />Have questions or need assistance? <br />
          Reach out to us at eventoinicios@gmail.com or call us at 9876543210.<br />We're here to help!
        </p>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default App;*/
/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ReactLogo from './logo.jpg';
import LoginSignUpPage from './LoginSignUpPage';
import EventDetailsPage from './EventDetailsPage';
import HostPage from './HostPage';
import EventCreationForm from './EventCreationForm';
import BookingPage from './BookingPage';
import PaymentPage from './PaymentPage';
import ProceedToPaymentPage from './ProceedToPaymentPage';
import PaymentSuccessPage from './PaymentSuccessPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUpPage />} />
          <Route path="/events" element={<EventDetailsPage />} />
          <Route path="/host" element={<HostPage />} />
          <Route path="/host/events/create" element={<EventCreationForm />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/proceed-to-payment" element={<ProceedToPaymentPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <div id="about" className="section">
        <img src={ReactLogo} height="400" width="1000" alt="React Logo" />
        <h2>About Us</h2>
        <p>
          Welcome to our website!<br /> We are dedicated to providing you with the best experience.<br /> Your go-to platform for booking tickets to <br />live shows, stand-up comedy, pre-release events, and concerts and many more..<br />
          Discover and book your next unforgettable experience with ease.<br />
          <strong>Our Mission</strong><br />
          At Evento Inicios, our mission is to transform your visions into reality.<br /> We strive to deliver exceptional events that exceed expectations and leave lasting impressions.<br />
          <strong>Our Services</strong><br />
          - Corporate Events: From conferences to team-building activities, we manage all types of corporate events with precision and professionalism.<br />
          - Weddings: We create magical weddings that reflect your unique love story and style.<br />
          - Social Events: From birthdays to anniversaries, we bring your special occasions to life.<br />
          - Special Events: Product launches, gala dinners, charity events – we handle it all with flair.<br />
        </p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to contact us if you have any questions or feedback.<br />Have questions or need assistance? <br />
          Reach out to us at eventoinicios@gmail.com or call us at 9876543210.<br />We're here to help!
        </p>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default App;*/
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ReactLogo from './logo.jpg';
import LoginSignUpPage from './LoginSignUpPage';
import EventDetailsPage from './EventDetailsPage';
import HostPage from './HostPage';
import EventCreationForm from './EventCreationForm';
import BookingPage from './BookingPage';
import PaymentPage from './PaymentPage';
import ProceedToPaymentPage from './ProceedToPaymentPage';
import PaymentSuccessPage from './PaymentSuccessPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUpPage />} />
          <Route path="/events" element={<EventDetailsPage />} />
          <Route path="/host" element={<HostPage />} />
          <Route path="/host/events/create" element={<EventCreationForm />} />
          <Route path="/booking/:eventId" element={<BookingPage />} />
          <Route path="/payment/:eventId" element={<PaymentPage />} />
          <Route path="/proceed-to-payment" element={<ProceedToPaymentPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <div id="about" className="section">
        <img src={ReactLogo} height="400" width="1000" alt="React Logo" />
        <h2>About Us</h2>
        <p>
          Welcome to our website!<br /> We are dedicated to providing you with the best experience.<br /> Your go-to platform for booking tickets to <br />live shows, stand-up comedy, pre-release events, and concerts and many more..<br />
          Discover and book your next unforgettable experience with ease.<br />
          <strong>Our Mission</strong><br />
          At Evento Inicios, our mission is to transform your visions into reality.<br /> We strive to deliver exceptional events that exceed expectations and leave lasting impressions.<br />
          <strong>Our Services</strong><br />
          - Corporate Events: From conferences to team-building activities, we manage all types of corporate events with precision and professionalism.<br />
          - Weddings: We create magical weddings that reflect your unique love story and style.<br />
          - Social Events: From birthdays to anniversaries, we bring your special occasions to life.<br />
          - Special Events: Product launches, gala dinners, charity events – we handle it all with flair.<br />
        </p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to contact us if you have any questions or feedback.<br />Have questions or need assistance? <br />
          Reach out to us at eventoinicios@gmail.com or call us at 9876543210.<br />We're here to help!
        </p>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default App;*/
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ReactLogo from './logo.jpg';
import LoginSignUpPage from './LoginSignUpPage';
import EventDetailsPage from './EventDetailsPage';
import HostPage from './HostPage';
import EventCreationForm from './EventCreationForm';
import BookingPage from './BookingPage';
import PaymentPage from './PaymentPage';
import ProceedToPaymentPage from './ProceedToPaymentPage';
import PaymentSuccessPage from './PaymentSuccessPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUpPage />} />
          <Route path="/events" element={<EventDetailsPage />} />
          <Route path="/host" element={<HostPage />} />
          <Route path="/host/events/create" element={<EventCreationForm />} />
          <Route path="/booking/:eventId" element={<BookingPage />} />
          <Route path="/payment/:eventId" element={<PaymentPage />} />
          <Route path="/proceed-to-payment" element={<ProceedToPaymentPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <div id="about" className="section">
        <img src={ReactLogo} height="400" width="1000" alt="React Logo" />
        <h2>About Us</h2>
        <p>
          Welcome to our website!<br /> We are dedicated to providing you with the best experience.<br /> Your go-to platform for booking tickets to <br />live shows, stand-up comedy, pre-release events, and concerts and many more..<br />
          Discover and book your next unforgettable experience with ease.<br />
          <strong>Our Mission</strong><br />
          At Evento Inicios, our mission is to transform your visions into reality.<br /> We strive to deliver exceptional events that exceed expectations and leave lasting impressions.<br />
          <strong>Our Services</strong><br />
          - Corporate Events: From conferences to team-building activities, we manage all types of corporate events with precision and professionalism.<br />
          - Weddings: We create magical weddings that reflect your unique love story and style.<br />
          - Social Events: From birthdays to anniversaries, we bring your special occasions to life.<br />
          - Special Events: Product launches, gala dinners, charity events – we handle it all with flair.<br />
        </p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to contact us if you have any questions or feedback.<br />Have questions or need assistance? <br />
          Reach out to us at eventoinicios@gmail.com or call us at 9876543210.<br />We're here to help!
        </p>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default App;*/
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ReactLogo from './logo.jpg';
import LoginSignUpPage from './LoginSignUpPage';
import EventDetailsPage from './EventDetailsPage';
import HostPage from './HostPage';
import EventCreationForm from './EventCreationForm';
//import BookingPage from './BookingPage';
import PaymentPage from './PaymentPage';
import ProceedToPaymentPage from './ProceedToPaymentPage';
import PaymentSuccessPage from './PaymentSuccessPage';
import BookTicketsPage from './BookTicketsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUpPage />} />
          <Route path="/events" element={<EventDetailsPage />} />
          <Route path="/host" element={<HostPage />} />
          <Route path="/host/events/create" element={<EventCreationForm />} />
          
          <Route path="/payment/:eventId" element={<PaymentPage />} />
          <Route path="/proceed-to-payment" element={<ProceedToPaymentPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <div id="about" className="section">
        <img src={ReactLogo} height="400" width="1000" alt="React Logo" />
        <h2>About Us</h2>
        <p>
          Welcome to our website!<br /> We are dedicated to providing you with the best experience.<br /> Your go-to platform for booking tickets to <br />live shows, stand-up comedy, pre-release events, and concerts and many more..<br />
          Discover and book your next unforgettable experience with ease.<br />
          <strong>Our Mission</strong><br />
          At Evento Inicios, our mission is to transform your visions into reality.<br /> We strive to deliver exceptional events that exceed expectations and leave lasting impressions.<br />
          <strong>Our Services</strong><br />
          - Corporate Events: From conferences to team-building activities, we manage all types of corporate events with precision and professionalism.<br />
          - Weddings: We create magical weddings that reflect your unique love story and style.<br />
          - Social Events: From birthdays to anniversaries, we bring your special occasions to life.<br />
          - Special Events: Product launches, gala dinners, charity events – we handle it all with flair.<br />
        </p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to contact us if you have any questions or feedback.<br />Have questions or need assistance? <br />
          Reach out to us at eventoinicios@gmail.com or call us at 9876543210.<br />We're here to help!
        </p>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default App;*/
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ReactLogo from './logo.jpg';
import LoginSignUpPage from './LoginSignUpPage';
import EventDetailsPage from './EventDetailsPage';
import HostPage from './HostPage';
import EventCreationForm from './EventCreationForm';
// import BookingPage from './BookingPage';
import PaymentPage from './PaymentPage';
import AdminPage from './AdminPage';
import ProceedToPaymentPage from './ProceedToPaymentPage';
import PaymentSuccessPage from './PaymentSuccessPage';
import BookTicketsPage from './BookTicketsPage';
import Payment1 from './payment1';
import DeleteEventPage from './DeleteEventPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUpPage />} />
          <Route path="/events" element={<EventDetailsPage />} />
          <Route path="/host" element={<HostPage />} />
          <Route path="/host/events/create" element={<EventCreationForm />} />
          <Route path="/book/:id" element={<BookTicketsPage />} />
          <Route path="/payment/:eventId" element={<PaymentPage />} />
          <Route path="/proceed-to-payment" element={<ProceedToPaymentPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
          <Route path="/payment1" element={<Payment1 />} /> {/* Add route for Payment1 component */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/delete-event" element={<DeleteEventPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <div id="about" className="section">
        <img src={ReactLogo} height="400" width="1000" alt="React Logo" />
        <h2>About Us</h2>
        <p>
          Welcome to our website!<br /> We are dedicated to providing you with the best experience.<br /> Your go-to platform for booking tickets to <br />live shows, stand-up comedy, pre-release events, concerts, and many more.<br />
          Discover and book your next unforgettable experience with ease.<br />
          <strong>Our Mission</strong><br />
          At Evento Inicios, our mission is to transform your visions into reality.<br /> We strive to deliver exceptional events that exceed expectations and leave lasting impressions.<br />
          <strong>Our Services</strong><br />
          - Corporate Events: From conferences to team-building activities, we manage all types of corporate events with precision and professionalism.<br />
          - Weddings: We create magical weddings that reflect your unique love story and style.<br />
          - Social Events: From birthdays to anniversaries, we bring your special occasions to life.<br />
          - Special Events: Product launches, gala dinners, charity events – we handle it all with flair.<br />
        </p>
      </div>
      <div id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to contact us if you have any questions or feedback.<br />Have questions or need assistance? <br />
          Reach out to us at eventoinicios@gmail.com or call us at 9876543210.<br />We're here to help!
        </p>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default App;






