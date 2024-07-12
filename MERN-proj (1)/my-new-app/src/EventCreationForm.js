/*import React, { useState } from 'react';

const EventCreationForm = ({ onSubmit }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleEventCreation = (event) => {
    event.preventDefault();
    // Call the onSubmit function with event details
    onSubmit({ name: eventName, date: eventDate, description: eventDescription });
    // Clear the form fields after event creation
    setEventName('');
    setEventDate('');
    setEventDescription('');
  };

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
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
      fontSize: '16px',
      fontWeight: 'bold',
    },
  };

  return (
    <form onSubmit={handleEventCreation} style={styles.form}>
      <h3>Create Event</h3>
      <label style={styles.label}>
        Event Name:
        <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} style={styles.input} required />
      </label>
      <label style={styles.label}>
        Event Date:
        <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} style={styles.input} required />
      </label>
      <label style={styles.label}>
        Event Description:
        <textarea value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} style={styles.input} required />
      </label>
      <button type="submit" style={styles.submitButton}>Create Event</button>
    </form>
  );
};

export default EventCreationForm;*/
/*import React, { useState } from 'react';
import EventCreationForm from './EventCreationForm';

const EventCreationPage = () => {
  const [message, setMessage] = useState('');

  const handleEventCreation = (eventDetails) => {
    // Store event details in local storage
    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(eventDetails);
    localStorage.setItem('events', JSON.stringify(events));

    // Display a success message
    setMessage('Event created successfully!');
  };

  return (
    <div>
      <h2>Create Event</h2>
      <EventCreationForm onSubmit={handleEventCreation} />
      {message && <p>{message}</p>}
    </div>
  );
};

export default EventCreationPage;*/
import React, { useState } from 'react';
import EventCreationForm from './EventCreationForm';

const EventCreationPage = () => {
  const [message, setMessage] = useState('');

  const handleEventCreation = (eventDetails) => {
    // Store event details in local storage
    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(eventDetails);
    localStorage.setItem('events', JSON.stringify(events));

    // Display a success message
    setMessage('Event created successfully!');
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    message: {
      fontSize: '16px',
      color: 'green',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create Event</h2>
      <EventCreationForm onSubmit={handleEventCreation} />
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

export default EventCreationPage;
