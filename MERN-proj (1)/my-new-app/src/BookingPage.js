// BookingPage.js
/*import React from 'react';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const { eventId } = useParams();
  const randomTexts = [
    'Get ready for an amazing event!',
    'Book your tickets now!',
    'Don’t miss out on the fun!',
    'Secure your spot today!',
  ];

  // Function to get random text
  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>{getRandomText()}</h2>
      <p>Booking for Event ID: {eventId}</p>
      {/* Additional booking functionality can be added here }
    </div>
  );
};

export default BookingPage;*/
// BookingPage.js
/*import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const { eventId } = useParams();
  const randomTexts = [
    'Get ready for an amazing event!',
    'Book your tickets now!',
    'Don’t miss out on the fun!',
    'Secure your spot today!',
  ];

  const ticketPrices = [
    1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000,
    5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500,
    10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000,
    50000, 55000, 60000, 65000, 70000,
  ];

  const [selectedPrice, setSelectedPrice] = useState(ticketPrices[0]);

  // Function to get random text
  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
  };

  const handleTicketBooking = () => {
    alert(`You have selected a ticket price of ₹${selectedPrice}`);
    // Additional booking functionality can be added here
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    select: {
      padding: '10px',
      margin: '20px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h2>{getRandomText()}</h2>
      <p>Booking for Event ID: {eventId}</p>
      <select
        style={styles.select}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
      >
        {ticketPrices.map((price, index) => (
          <option key={index} value={price}>
            ₹{price}/person
          </option>
        ))}
      </select>
      <br />
      <button style={styles.button} onClick={handleTicketBooking}>
        Book Tickets
      </button>
    </div>
  );
};

export default BookingPage;*/
// BookingPage.js
/*import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const { eventId } = useParams();
  const randomTexts = [
    'Get ready for an amazing event!',
    'Book your tickets now!',
    'Don’t miss out on the fun!',
    'Secure your spot today!',
  ];

  const ticketOptions = [
    { price: 1000, description: 'Standard Entry' },
    { price: 1500, description: 'Standard Entry with Welcome Drink' },
    { price: 2500, description: 'VIP Entry' },
    { price: 3000, description: 'VIP Entry with Reserved Seating' },
    { price: 5000, description: 'Gold Entry' },
    { price: 10000, description: 'Gold Entry with Backstage Access' },
    { price: 50000, description: 'Platinum Entry with Meet and Greet' },
    { price: 65000, description: 'Diamond Entry with All Access' },
  ];

  const [eventName, setEventName] = useState('Event Name');

  // Function to get random text
  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
  };

  const handleTicketBooking = (price) => {
    alert(`You have selected a ticket price of ₹${price}`);
    // Additional booking functionality can be added here
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      textAlign: 'left',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '300px',
      display: 'inline-block',
      verticalAlign: 'top',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
    },
  };

  useEffect(() => {
    // Simulate fetching the event name from an API using the eventId
    const fetchEventName = async () => {
      // Replace this with actual API call
      const eventDetails = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: 'Sample Event Name' }), 500)
      );
      setEventName(eventDetails.name);
    };

    fetchEventName();
  }, [eventId]);

  return (
    <div style={styles.container}>
      <h2>{getRandomText()}</h2>
      <p>Booking for: {eventName}</p>
      <div>
        {ticketOptions.map((option, index) => (
          <div key={index} style={styles.card}>
            <h3>₹{option.price}/person</h3>
            <p>{option.description}</p>
            <button
              style={styles.button}
              onClick={() => handleTicketBooking(option.price)}
            >
              Book Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;*/
/*import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const { eventId } = useParams();
  const randomTexts = [
    'Get ready for an amazing event!',
    'Book your tickets now!',
    'Don’t miss out on the fun!',
    'Secure your spot today!',
  ];

  const ticketOptions = [
    { price: 1000, description: 'Standard Entry' },
    { price: 1500, description: 'Standard Entry with Welcome Drink' },
    { price: 2500, description: 'VIP Entry' },
    { price: 3000, description: 'VIP Entry with Reserved Seating' },
    { price: 5000, description: 'Gold Entry' },
    { price: 10000, description: 'Gold Entry with Backstage Access' },
    { price: 50000, description: 'Platinum Entry with Meet and Greet' },
    { price: 65000, description: 'Diamond Entry with All Access' },
  ];

  const [eventName, setEventName] = useState('Event Name');
  const [ticketQuantities, setTicketQuantities] = useState(
    Array(ticketOptions.length).fill(0)
  );

  // Function to get random text
  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
  };

  const handleTicketBooking = (price, index) => {
    alert(`You have selected ${ticketQuantities[index]} ticket(s) at ₹${price} each.`);
    // Additional booking functionality can be added here
  };

  const handleIncrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    updatedQuantities[index]++;
    setTicketQuantities(updatedQuantities);
  };

  const handleDecrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index]--;
      setTicketQuantities(updatedQuantities);
    }
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      textAlign: 'left',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '300px',
      display: 'inline-block',
      verticalAlign: 'top',
    },
    button: {
      padding: '8px 16px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      marginRight: '5px',
    },
  };

  useEffect(() => {
    // Simulate fetching the event name from an API using the eventId
    const fetchEventName = async () => {
      // Replace this with actual API call
      const eventDetails = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: 'Sample Event Name' }), 500)
      );
      setEventName(eventDetails.name);
    };

    fetchEventName();
  }, [eventId]);

  return (
    <div style={styles.container}>
      <h2>{getRandomText()}</h2>
      <p>Booking for: {eventName}</p>
      <div>
        {ticketOptions.map((option, index) => (
          <div key={index} style={styles.card}>
            <h3>₹{option.price}/person</h3>
            <p>{option.description}</p>
            <div>
              <button
                style={styles.button}
                onClick={() => handleDecrement(index)}
              >
                -
              </button>
              <span>{ticketQuantities[index]}</span>
              <button
                style={styles.button}
                onClick={() => handleIncrement(index)}
              >
                +
              </button>
            </div>
            <button
              style={styles.button}
              onClick={() => handleTicketBooking(option.price, index)}
            >
              Book Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;*/

/*import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const { eventId } = useParams();
  const randomTexts = [
    'Get ready for an amazing event!',
    'Book your tickets now!',
    'Don’t miss out on the fun!',
    'Secure your spot today!',
  ];

  const ticketOptions = [
    { price: 1000, description: 'Standard Entry' },
    { price: 1500, description: 'Standard Entry with Welcome Drink' },
    { price: 2500, description: 'VIP Entry' },
    { price: 3000, description: 'VIP Entry with Reserved Seating' },
    { price: 5000, description: 'Gold Entry' },
    { price: 10000, description: 'Gold Entry with Backstage Access' },
    { price: 50000, description: 'Platinum Entry with Meet and Greet' },
    { price: 65000, description: 'Diamond Entry with All Access' },
  ];

  const [eventName, setEventName] = useState('Event Name');
  const [ticketQuantities, setTicketQuantities] = useState(
    Array(ticketOptions.length).fill(0)
  );

  // Function to get random text
  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
  };

  const handleTicketBooking = (price, index) => {
    alert(`You have selected ${ticketQuantities[index]} ticket(s) at ₹${price} each.`);
    // Additional booking functionality can be added here
  };

  const handleIncrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    updatedQuantities[index]++;
    setTicketQuantities(updatedQuantities);
  };

  const handleDecrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index]--;
      setTicketQuantities(updatedQuantities);
    }
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      textAlign: 'left',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '300px',
      display: 'inline-block',
      verticalAlign: 'top',
    },
    button: {
      padding: '8px 12px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer',
      marginRight: '5px',
    },
    quantity: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px',
    },
  };

  useEffect(() => {
    // Simulate fetching the event name from an API using the eventId
    const fetchEventName = async () => {
      // Replace this with actual API call
      const eventDetails = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: 'Sample Event Name' }), 500)
      );
      setEventName(eventDetails.name);
    };

    fetchEventName();
  }, [eventId]);

  return (
    <div style={styles.container}>
      <h2>{getRandomText()}</h2>
      <p>Booking for: {eventName}</p>
      <div>
        {ticketOptions.map((option, index) => (
          <div key={index} style={styles.card}>
            <h3>₹{option.price}/person</h3>
            <p>{option.description}</p>
            <div style={styles.quantity}>
              <button
                style={styles.button}
                onClick={() => handleDecrement(index)}
              >
                -
              </button>
              <span>{ticketQuantities[index]}</span>
              <button
                style={styles.button}
                onClick={() => handleIncrement(index)}
              >
                +
              </button>
            </div>
            <button
              style={styles.button}
              onClick={() => handleTicketBooking(option.price, index)}
            >
              Book Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;*/
/*import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate

const BookingPage = () => {
  const { eventId } = useParams();
  const randomTexts = [
    'Get ready for an amazing event!',
    'Book your tickets now!',
    'Don’t miss out on the fun!',
    'Secure your spot today!',
  ];

  const ticketOptions = [
    { price: 1000, description: 'Standard Entry' },
    { price: 1500, description: 'Standard Entry with Welcome Drink' },
    { price: 2500, description: 'VIP Entry' },
    { price: 3000, description: 'VIP Entry with Reserved Seating' },
    { price: 5000, description: 'Gold Entry' },
    { price: 10000, description: 'Gold Entry with Backstage Access' },
    { price: 50000, description: 'Platinum Entry with Meet and Greet' },
    { price: 65000, description: 'Diamond Entry with All Access' },
  ];

  const [eventName, setEventName] = useState('Event Name');
  const [ticketQuantities, setTicketQuantities] = useState(
    Array(ticketOptions.length).fill(0)
  );

  // Function to get random text
  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
  };

  const navigate = useNavigate(); // Use useNavigate hook

  const handleTicketBooking = (price, index) => {
    // Navigate to the payment page with event ID and ticket quantity
    navigate(`/payment/${eventId}`, { state: { price, quantity: ticketQuantities[index] } });
  };

  const handleIncrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    updatedQuantities[index]++;
    setTicketQuantities(updatedQuantities);
  };

  const handleDecrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index]--;
      setTicketQuantities(updatedQuantities);
    }
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      textAlign: 'left',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '300px',
      display: 'inline-block',
      verticalAlign: 'top',
    },
    button: {
      padding: '8px 12px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer',
      marginRight: '5px',
    },
    quantity: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px',
    },
  };

  useEffect(() => {
    // Simulate fetching the event name from an API using the eventId
    const fetchEventName = async () => {
      // Replace this with actual API call
      const eventDetails = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: 'Sample Event Name' }), 500)
      );
      setEventName(eventDetails.name);
    };

    fetchEventName();
  }, [eventId]);

  return (
    <div style={styles.container}>
      <h2>{getRandomText()}</h2>
      <p>Booking for: {eventName}</p>
      <div>
        {ticketOptions.map((option, index) => (
          <div key={index} style={styles.card}>
            <h3>₹{option.price}/person</h3>
            <p>{option.description}</p>
            <div style={styles.quantity}>
              <button
                style={styles.button}
                onClick={() => handleDecrement(index)}
              >
                -
              </button>
              <span>{ticketQuantities[index]}</span>
              <button
                style={styles.button}
                onClick={() => handleIncrement(index)}
              >
                +
              </button>
            </div>
            <button
              style={styles.button}
              onClick={() => handleTicketBooking(option.price, index)}
            >
              Book Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;*/
/*import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const { eventId } = useParams();
  const randomTexts = [
    'Get ready for an amazing event!',
    'Book your tickets now!',
    'Don’t miss out on the fun!',
    'Secure your spot today!',
  ];

  const ticketOptions = [
    { price: 1000, description: 'Standard Entry' },
    { price: 1500, description: 'Standard Entry with Welcome Drink' },
    { price: 2500, description: 'VIP Entry' },
    { price: 3000, description: 'VIP Entry with Reserved Seating' },
    { price: 5000, description: 'Gold Entry' },
    { price: 10000, description: 'Gold Entry with Backstage Access' },
    { price: 50000, description: 'Platinum Entry with Meet and Greet' },
    { price: 65000, description: 'Diamond Entry with All Access' },
  ];

  const [eventName, setEventName] = useState('Event Name');
  const [ticketQuantities, setTicketQuantities] = useState(
    Array(ticketOptions.length).fill(0)
  );

  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
  };

  const navigate = useNavigate();

  const handleTicketBooking = (price, index) => {
    if (ticketQuantities[index] === 0) {
      alert("Please select at least 1 ticket.");
      return;
    }
    navigate(`/payment/${eventId}`, { state: { price, quantity: ticketQuantities[index] } });
  };

  const handleIncrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    updatedQuantities[index]++;
    setTicketQuantities(updatedQuantities);
  };

  const handleDecrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index]--;
      setTicketQuantities(updatedQuantities);
    }
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      textAlign: 'left',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '300px',
      display: 'inline-block',
      verticalAlign: 'top',
    },
    button: {
      padding: '8px 12px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer',
      marginRight: '5px',
    },
    quantity: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px',
    },
  };

  useEffect(() => {
    const fetchEventName = async () => {
      const eventDetails = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: 'Sample Event Name' }), 500)
      );
      setEventName(eventDetails.name);
    };

    fetchEventName();
  }, [eventId]);

  return (
    <div style={styles.container}>
      <h2>{getRandomText()}</h2>
      <p>Booking for: {eventName}</p>
      <div>
        {ticketOptions.map((option, index) => (
          <div key={index} style={styles.card}>
            <h3>₹{option.price}/person</h3>
            <p>{option.description}</p>
            <div style={styles.quantity}>
              <button
                style={styles.button}
                onClick={() => handleDecrement(index)}
              >
                -
              </button>
              <span>{ticketQuantities[index]}</span>
              <button
                style={styles.button}
                onClick={() => handleIncrement(index)}
              >
                +
              </button>
            </div>
            <button
              style={styles.button}
              onClick={() => handleTicketBooking(option.price, index)}
            >
              Book Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;*/
/*import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const { eventId } = useParams();
  const randomTexts = [
    'Get ready for an amazing event!',
    'Book your tickets now!',
    'Don’t miss out on the fun!',
    'Secure your spot today!',
  ];

  const ticketOptions = [
    { price: 1000, description: 'Standard Entry' },
    { price: 1500, description: 'Standard Entry with Welcome Drink' },
    { price: 2500, description: 'VIP Entry' },
    { price: 3000, description: 'VIP Entry with Reserved Seating' },
    { price: 5000, description: 'Gold Entry' },
    { price: 10000, description: 'Gold Entry with Backstage Access' },
    { price: 50000, description: 'Platinum Entry with Meet and Greet' },
    { price: 65000, description: 'Diamond Entry with All Access' },
  ];

  const [eventName, setEventName] = useState('Event Name');
  const [ticketQuantities, setTicketQuantities] = useState(
    Array(ticketOptions.length).fill(0)
  );

  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
  };

  const navigate = useNavigate();

  const handleTicketBooking = (price, index) => {
    if (ticketQuantities[index] === 0) {
      alert("Please select at least 1 ticket.");
      return;
    }
    navigate(`/payment/${eventId}`, { state: { price, quantity: ticketQuantities[index] } });
  };

  const handleIncrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    updatedQuantities[index]++;
    setTicketQuantities(updatedQuantities);
  };

  const handleDecrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index]--;
      setTicketQuantities(updatedQuantities);
    }
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      textAlign: 'left',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '300px',
      display: 'inline-block',
      verticalAlign: 'top',
    },
    button: {
      padding: '8px 12px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer',
      marginRight: '5px',
    },
    quantity: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px',
    },
  };

  useEffect(() => {
    const fetchEventName = async () => {
      const eventDetails = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: 'Sample Event Name' }), 500)
      );
      setEventName(eventDetails.name);
    };

    fetchEventName();
  }, [eventId]);

  return (
    <div style={styles.container}>
      <h2>{getRandomText()}</h2>
      <p>Booking for: {eventName}</p>
      <div>
        {ticketOptions.map((option, index) => (
          <div key={index} style={styles.card}>
            <h3>₹{option.price}/person</h3>
            <p>{option.description}</p>
            <div style={styles.quantity}>
              <button
                style={styles.button}
                onClick={() => handleDecrement(index)}
              >
                -
              </button>
              <span>{ticketQuantities[index]}</span>
              <button
                style={styles.button}
                onClick={() => handleIncrement(index)}
              >
                +
              </button>
            </div>
            <button
              style={styles.button}
              onClick={() => handleTicketBooking(option.price, index)}
            >
              Book Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;*/
/*import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const { eventId } = useParams();
  const randomTexts = [
    'Get ready for an amazing event!',
    'Book your tickets now!',
    'Don’t miss out on the fun!',
    'Secure your spot today!',
  ];

  const ticketOptions = [
    { price: 1000, description: 'Standard Entry' },
    { price: 1500, description: 'Standard Entry with Welcome Drink' },
    { price: 2500, description: 'VIP Entry' },
    { price: 3000, description: 'VIP Entry with Reserved Seating' },
    { price: 5000, description: 'Gold Entry' },
    { price: 10000, description: 'Gold Entry with Backstage Access' },
    { price: 50000, description: 'Platinum Entry with Meet and Greet' },
    { price: 65000, description: 'Diamond Entry with All Access' },
  ];

  const [eventName, setEventName] = useState('Event Name');
  const [ticketQuantities, setTicketQuantities] = useState(
    Array(ticketOptions.length).fill(0)
  );

  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
  };

  const navigate = useNavigate();

  const handleTicketBooking = (price, index) => {
    if (ticketQuantities[index] === 0) {
      alert("Please select at least 1 ticket.");
      return;
    }
    navigate(`/payment`, { state: { price, quantity: ticketQuantities[index] } });
  };

  const handleIncrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    updatedQuantities[index]++;
    setTicketQuantities(updatedQuantities);
  };

  const handleDecrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index]--;
      setTicketQuantities(updatedQuantities);
    }
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      textAlign: 'left',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '300px',
      display: 'inline-block',
      verticalAlign: 'top',
    },
    button: {
      padding: '8px 12px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer',
      marginRight: '5px',
    },
    quantity: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px',
    },
  };

  useEffect(() => {
    const fetchEventName = async () => {
      const eventDetails = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: 'Sample Event Name' }), 500)
      );
      setEventName(eventDetails.name);
    };

    fetchEventName();
  }, [eventId]);

  return (
    <div style={styles.container}>
      <h2>{getRandomText()}</h2>
      <p>Booking for: {eventName}</p>
      <div>
        {ticketOptions.map((option, index) => (
          <div key={index} style={styles.card}>
            <h3>₹{option.price}/person</h3>
            <p>{option.description}</p>
            <div style={styles.quantity}>
              <button
                style={styles.button}
                onClick={() => handleDecrement(index)}
              >
                -
              </button>
              <span>{ticketQuantities[index]}</span>
              <button
                style={styles.button}
                onClick={() => handleIncrement(index)}
              >
                +
              </button>
            </div>
            <button
              style={styles.button}
              onClick={() => handleTicketBooking(option.price, index)}
            >
              Book Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;*/

/*import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const { eventId } = useParams();
  const randomTexts = [
    'Get ready for an amazing event!',
    'Book your tickets now!',
    'Don’t miss out on the fun!',
    'Secure your spot today!',
  ];

  const ticketOptions = [
    { price: 1000, description: 'Standard Entry' },
    { price: 1500, description: 'Standard Entry with Welcome Drink' },
    { price: 2500, description: 'VIP Entry' },
    { price: 3000, description: 'VIP Entry with Reserved Seating' },
    { price: 5000, description: 'Gold Entry' },
    { price: 10000, description: 'Gold Entry with Backstage Access' },
    { price: 50000, description: 'Platinum Entry with Meet and Greet' },
    { price: 65000, description: 'Diamond Entry with All Access' },
  ];

  const [eventName, setEventName] = useState('Event Name');
  const [ticketQuantities, setTicketQuantities] = useState(
    Array(ticketOptions.length).fill(0)
  );

  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
  };

  const navigate = useNavigate();

  const handleTicketBooking = (price, index) => {
    if (ticketQuantities[index] === 0) {
      alert("Please select at least 1 ticket.");
      return;
    }
    navigate(`/payment/${eventId}`, { state: { price, quantity: ticketQuantities[index] } });
  };

  const handleIncrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    updatedQuantities[index]++;
    setTicketQuantities(updatedQuantities);
  };

  const handleDecrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index]--;
      setTicketQuantities(updatedQuantities);
    }
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      textAlign: 'left',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '300px',
      display: 'inline-block',
      verticalAlign: 'top',
    },
    button: {
      padding: '8px 12px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer',
      marginRight: '5px',
    },
    quantity: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px',
    },
  };

  useEffect(() => {
    const fetchEventName = async () => {
      const eventDetails = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: 'Sample Event Name' }), 500)
      );
      setEventName(eventDetails.name);
    };

    fetchEventName();
  }, [eventId]);

  return (
    <div style={styles.container}>
      <h2>{getRandomText()}</h2>
      <p>Booking for: {eventName}</p>
      <div>
        {ticketOptions.map((option, index) => (
          <div key={index} style={styles.card}>
            <h3>₹{option.price}/person</h3>
            <p>{option.description}</p>
            <div style={styles.quantity}>
              <button
                style={styles.button}
                onClick={() => handleDecrement(index)}
              >
                -
              </button>
              <span>{ticketQuantities[index]}</span>
              <button
                style={styles.button}
                onClick={() => handleIncrement(index)}
              >
                +
              </button>
            </div>
            <button
              style={styles.button}
              onClick={() => handleTicketBooking(option.price, index)}
            >
              Book Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;*/
/*import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const { eventId } = useParams();
  const randomTexts = [
    'Get ready for an amazing event!',
    'Book your tickets now!',
    'Don’t miss out on the fun!',
    'Secure your spot today!',
  ];

  const ticketOptions = [
    // Ticket options
  ];

  const [eventName, setEventName] = useState('Event Name');
  const [ticketQuantities, setTicketQuantities] = useState(
    Array(ticketOptions.length).fill(0)
  );

  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
  };

  const navigate = useNavigate();

  const handleTicketBooking = (price, index) => {
    if (ticketQuantities[index] === 0) {
      alert("Please select at least 1 ticket.");
      return;
    }
    navigate(`/payment/${eventId}`, { state: { price, quantity: ticketQuantities[index] } });
  };

  const handleIncrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    updatedQuantities[index]++;
    setTicketQuantities(updatedQuantities);
  };

  const handleDecrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index]--;
      setTicketQuantities(updatedQuantities);
    }
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      textAlign: 'left',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '300px',
      display: 'inline-block',
      verticalAlign: 'top',
    },
    button: {
      padding: '8px 12px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer',
      marginRight: '5px',
    },
    quantity: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px',
    },
  };

  useEffect(() => {
    const fetchEventName = async () => {
      const eventDetails = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: 'Sample Event Name' }), 500)
      );
      setEventName(eventDetails.name);
    };

    fetchEventName();
  }, [eventId]);

  return (
    <div style={styles.container}>
      <h2>{getRandomText()}</h2>
      <p>Booking for: {eventName}</p>
      <div>
        {ticketOptions.map((option, index) => (
          <div key={index} style={styles.card}>
            <h3>₹{option.price}/person</h3>
            <p>{option.description}</p>
            <div style={styles.quantity}>
              <button
                style={styles.button}
                onClick={() => handleDecrement(index)}
              >
                -
              </button>
              <span>{ticketQuantities[index]}</span>
              <button
                style={styles.button}
                onClick={() => handleIncrement(index)}
              >
                +
              </button>
            </div>
            <button
              style={styles.button}
              onClick={() => handleTicketBooking(option.price, index)}
            >
              Book Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;*/
/*import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const { eventId } = useParams();
  const randomTexts = [
    'Get ready for an amazing event!',
    'Book your tickets now!',
    'Don’t miss out on the fun!',
    'Secure your spot today!',
  ];

  const ticketOptions = [
    { price: 500, description: 'General Admission' },
    { price: 1000, description: 'VIP Admission' },
  ];

  const [eventName, setEventName] = useState('Event Name');
  const [ticketQuantities, setTicketQuantities] = useState(Array(ticketOptions.length).fill(0));

  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
  };

  const navigate = useNavigate();

  const handleTicketBooking = (price, index) => {
    if (ticketQuantities[index] === 0) {
      alert('Please select at least 1 ticket.');
      return;
    }
    navigate(`/payment/${eventId}`, { state: { price, quantity: ticketQuantities[index] } });
  };

  const handleIncrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    updatedQuantities[index]++;
    setTicketQuantities(updatedQuantities);
  };

  const handleDecrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index]--;
      setTicketQuantities(updatedQuantities);
    }
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      textAlign: 'left',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '300px',
      display: 'inline-block',
      verticalAlign: 'top',
    },
    button: {
      padding: '8px 12px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer',
      marginRight: '5px',
    },
    quantity: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px',
    },
  };

  useEffect(() => {
    const fetchEventName = async () => {
      const eventDetails = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: 'Sample Event Name' }), 500)
      );
      setEventName(eventDetails.name);
    };

    fetchEventName();
  }, [eventId]);

  return (
    <div style={styles.container}>
      <h2>{getRandomText()}</h2>
      <p>Booking for: {eventName}</p>
      <div>
        {ticketOptions.map((option, index) => (
          <div key={index} style={styles.card}>
            <h3>₹{option.price}/person</h3>
            <p>{option.description}</p>
            <div style={styles.quantity}>
              <button
                style={styles.button}
                onClick={() => handleDecrement(index)}
              >
                -
              </button>
              <span>{ticketQuantities[index]}</span>
              <button
                style={styles.button}
                onClick={() => handleIncrement(index)}
              >
                +
              </button>
            </div>
            <button
              style={styles.button}
              onClick={() => handleTicketBooking(option.price, index)}
            >
              Book Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;*/

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const { eventId } = useParams();
  console.log('Event ID:', eventId); // Debugging: Log eventId
  const randomTexts = [
    'Get ready for an amazing event!',
    'Book your tickets now!',
    'Don’t miss out on the fun!',
    'Secure your spot today!',
  ];

  const ticketOptions = [
    { price: 500, description: 'General Admission' },
    { price: 1000, description: 'VIP Admission' },
  ];

  const [eventName, setEventName] = useState('Event Name');
  const [ticketQuantities, setTicketQuantities] = useState(Array(ticketOptions.length).fill(0));

  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
  };

  const navigate = useNavigate();

  const handleTicketBooking = (price, index) => {
    if (ticketQuantities[index] === 0) {
      alert('Please select at least 1 ticket.');
      return;
    }
    navigate(`/payment/${eventId}`, { state: { price, quantity: ticketQuantities[index] } });
  };

  const handleIncrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    updatedQuantities[index]++;
    setTicketQuantities(updatedQuantities);
  };

  const handleDecrement = (index) => {
    const updatedQuantities = [...ticketQuantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index]--;
      setTicketQuantities(updatedQuantities);
    }
  };

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      textAlign: 'left',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '300px',
      display: 'inline-block',
      verticalAlign: 'top',
    },
    button: {
      padding: '8px 12px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer',
      marginRight: '5px',
    },
    quantity: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px',
    },
  };

  useEffect(() => {
    const fetchEventName = async () => {
      // Mock fetch call for example purposes
      const eventDetails = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: 'Sample Event Name' }), 500)
      );
      setEventName(eventDetails.name);
      console.log('Fetched event name:', eventDetails.name); // Debugging: Log fetched event name
    };

    fetchEventName();
  }, [eventId]);

  return (
    <div style={styles.container}>
      <h2>{getRandomText()}</h2>
      <p>Booking for: {eventName}</p>
      <div>
        {ticketOptions.map((option, index) => (
          <div key={index} style={styles.card}>
            <h3>₹{option.price}/person</h3>
            <p>{option.description}</p>
            <div style={styles.quantity}>
              <button
                style={styles.button}
                onClick={() => handleDecrement(index)}
              >
                -
              </button>
              <span>{ticketQuantities[index]}</span>
              <button
                style={styles.button}
                onClick={() => handleIncrement(index)}
              >
                +
              </button>
            </div>
            <button
              style={styles.button}
              onClick={() => handleTicketBooking(option.price, index)}
            >
              Book Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;


