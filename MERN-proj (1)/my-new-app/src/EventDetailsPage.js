// EventDetailsPage.js
/*import React from 'react';

const EventDetailsPage = () => {
  const events = JSON.parse(localStorage.getItem('events')) || [];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Upcoming Events</h2>
      {events.length > 0 ? (
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <h3>{event.name}</h3>
              <p>Date: {event.date}</p>
              <p>Description: {event.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
};

export default EventDetailsPage;*/
// EventDetailsPage.js
/*import React from 'react';

const EventDetailsPage = () => {
  const events = JSON.parse(localStorage.getItem('events')) || [];

  const styles = {
    container: {
      padding: '20px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '10px',
      padding: '20px',
      width: '300px',
      textAlign: 'left',
    },
    cardTitle: {
      fontSize: '1.5em',
      margin: '0 0 10px 0',
    },
    cardDate: {
      color: '#555',
      margin: '0 0 10px 0',
    },
    cardDescription: {
      color: '#333',
    },
    cardHost: {
      color: '#777',
      fontSize: '0.9em',
      margin: '10px 0 0 0',
    },
  };

  return (
    <div style={styles.container}>
      {events.length > 0 ? (
        events.map((event, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{event.name}</h3>
            <p style={styles.cardDate}>Date: {event.date}</p>
            <p style={styles.cardDescription}>{event.description}</p>
            <p style={styles.cardHost}>Host: {event.host}</p>
          </div>
        ))
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
};

export default EventDetailsPage;*/
// EventDetailsPage.js
/*import React from 'react';
import { Link } from 'react-router-dom';

const EventDetailsPage = () => {
  const events = JSON.parse(localStorage.getItem('events')) || [];

  const styles = {
    container: {
      padding: '20px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '10px',
      padding: '20px',
      width: '300px',
      textAlign: 'left',
    },
    cardTitle: {
      fontSize: '1.5em',
      margin: '0 0 10px 0',
    },
    cardDate: {
      color: '#555',
      margin: '0 0 10px 0',
    },
    cardDescription: {
      color: '#333',
    },
    cardHost: {
      color: '#777',
      fontSize: '0.9em',
      margin: '10px 0 0 0',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      marginTop: '10px',
      textDecoration: 'none',
      display: 'inline-block',
    },
  };

  return (
    <div style={styles.container}>
      {events.length > 0 ? (
        events.map((event, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{event.name}</h3>
            <p style={styles.cardDate}>Date: {event.date}</p>
            <p style={styles.cardDescription}>{event.description}</p>
            <p style={styles.cardHost}>Host: {event.host}</p>
            <Link to={`/book/${index}`} style={styles.button}>Book Tickets</Link>
          </div>
        ))
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
};

export default EventDetailsPage;*/
/*import React from 'react';
import { Link } from 'react-router-dom';

const EventDetailsPage = () => {
  const events = JSON.parse(localStorage.getItem('events')) || [];

  const styles = {
    container: {
      padding: '20px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '10px',
      padding: '20px',
      width: '300px',
      textAlign: 'left',
    },
    cardTitle: {
      fontSize: '1.5em',
      margin: '0 0 10px 0',
    },
    cardDate: {
      color: '#555',
      margin: '0 0 10px 0',
    },
    cardDescription: {
      color: '#333',
    },
    cardHost: {
      color: '#777',
      fontSize: '0.9em',
      margin: '10px 0 0 0',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      marginTop: '10px',
      textDecoration: 'none',
      display: 'inline-block',
    },
  };

  return (
    <div style={styles.container}>
      {events.length > 0 ? (
        events.map((event, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{event.name}</h3>
            <p style={styles.cardDate}>Date: {event.date}</p>
            <p style={styles.cardDescription}>{event.description}</p>
            <p style={styles.cardHost}>Host: {event.host}</p>
            <Link to={`/book/${index}`} style={styles.button}>Book Tickets</Link>
          </div>
        ))
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
};

export default EventDetailsPage;*/

/*import React from 'react';
import { Link } from 'react-router-dom';

const EventDetailsPage = () => {
  const events = JSON.parse(localStorage.getItem('events')) || [];

  const styles = {
    container: {
      padding: '20px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '10px',
      padding: '20px',
      width: '300px',
      textAlign: 'left',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      marginTop: '10px',
      textDecoration: 'none',
      display: 'inline-block',
    },
  };

  return (
    <div style={styles.container}>
      {events.length > 0 ? (
        events.map((event, index) => (
          <div key={index} style={styles.card}>
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <p>{event.description}</p>
            <p>Host: {event.host}</p>
            <Link to={`/book/${index}`} style={styles.button}>Book Tickets</Link>
          </div>
        ))
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
};

export default EventDetailsPage;*/
/*import React from 'react';
import { Link } from 'react-router-dom';

const EventDetailsPage = () => {
  const events = JSON.parse(localStorage.getItem('events')) || [];

  const styles = {
    container: {
      padding: '20px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '10px',
      padding: '20px',
      width: '300px',
      textAlign: 'left',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      marginTop: '10px',
      textDecoration: 'none',
      display: 'inline-block',
    },
  };

  return (
    <div style={styles.container}>
      {events.length > 0 ? (
        events.map((event, index) => (
          <div key={index} style={styles.card}>
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <p>{event.description}</p>
            <p>Host: {event.host}</p>
            <Link to={`/book/${index}`} style={styles.button}>Book Tickets</Link>
          </div>
        ))
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
};

export default EventDetailsPage;*/
/*import React from 'react';
import { Link } from 'react-router-dom';

const EventDetailsPage = () => {
  const events = JSON.parse(localStorage.getItem('events')) || [];

  const styles = {
    container: {
      padding: '20px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '10px',
      padding: '20px',
      width: '300px',
      textAlign: 'left',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      marginTop: '10px',
      textDecoration: 'none',
      display: 'inline-block',
    },
  };

  return (
    <div style={styles.container}>
      {events.length > 0 ? (
        events.map((event, index) => (
          <div key={index} style={styles.card}>
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <p>{event.description}</p>
            <p>Host: {event.host}</p>
            <Link to={`/book/${index}`} style={styles.button}>Book Tickets</Link>
          </div>
        ))
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
};

export default EventDetailsPage;*/
/*import React from 'react';
import { Link } from 'react-router-dom';

const EventDetailsPage = () => {
  const events = JSON.parse(localStorage.getItem('events')) || [];

  const styles = {
    container: {
      padding: '20px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '10px',
      padding: '20px',
      width: '300px',
      textAlign: 'left',
    },
    cardTitle: {
      fontSize: '1.5em',
      margin: '0 0 10px 0',
    },
    cardDate: {
      color: '#555',
      margin: '0 0 10px 0',
    },
    cardDescription: {
      color: '#333',
    },
    cardHost: {
      color: '#777',
      fontSize: '0.9em',
      margin: '10px 0 0 0',
    },
    cardImage: {
      width: '100%',
      height: 'auto',
      marginBottom: '10px',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      marginTop: '10px',
      textDecoration: 'none',
      display: 'inline-block',
    },
  };

  return (
    <div style={styles.container}>
      {events.length > 0 ? (
        events.map((event, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{event.name}</h3>
            <p style={styles.cardDate}>Date: {event.date}</p>
            <p style={styles.cardDescription}>{event.description}</p>
            <p style={styles.cardHost}>Host: {event.host}</p>
            {event.image && <img src={event.image} alt={event.name} style={styles.cardImage} />}
            <Link to={`/book/${index}`} style={styles.button}>Book Tickets</Link>
          </div>
        ))
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
};

export default EventDetailsPage;*/
import React from 'react';
import { Link } from 'react-router-dom';

const EventDetailsPage = () => {
  const events = JSON.parse(localStorage.getItem('events')) || [];

  const styles = {
    container: {
      padding: '20px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '10px',
      padding: '20px',
      width: '300px',
      textAlign: 'left',
    },
    cardTitle: {
      fontSize: '1.5em',
      margin: '0 0 10px 0',
    },
    cardDate: {
      color: '#555',
      margin: '0 0 10px 0',
    },
    cardDescription: {
      color: '#333',
    },
    cardHost: {
      color: '#777',
      fontSize: '0.9em',
      margin: '10px 0 0 0',
    },
    cardImage: {
      width: '100%',
      height: '200px', // Set a fixed height
      objectFit: 'cover', // Ensure the image covers the area while maintaining its aspect ratio
      marginBottom: '10px',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      marginTop: '10px',
      textDecoration: 'none',
      display: 'inline-block',
    },
  };

  return (
    <div style={styles.container}>
      {events.length > 0 ? (
        events.map((event, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{event.name}</h3>
            <p style={styles.cardDate}>Date: {event.date}</p>
            <p style={styles.cardDescription}>{event.description}</p>
            <p style={styles.cardHost}>Host: {event.host}</p>
            {event.image && <img src={event.image} alt={event.name} style={styles.cardImage} />}
            <Link to={`/book/${index}`} style={styles.button}>Book Tickets</Link>
          </div>
        ))
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
};

export default EventDetailsPage;


