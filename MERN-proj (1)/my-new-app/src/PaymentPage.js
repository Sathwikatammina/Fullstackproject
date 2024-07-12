/*import React from 'react';

const PaymentPage = () => {
  const randomTexts = [
    'Thank you for booking your tickets!',
    'Get ready for an unforgettable experience!',
    'Your tickets are confirmed. Enjoy the event!',
    'Payment successful. See you at the event!',
  ];

  // Function to get random text
  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>{getRandomText()}</h2>
      {/* Additional payment information or functionality can be added here }
    </div>
  );
};

export default PaymentPage;*/
/*import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const { price, quantity } = location.state;

  // Calculate total amount with 3% GST
  const totalPrice = price * quantity * 1.03;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Payment Summary</h2>
      <p>Tickets Selected: {quantity}</p>
      <p>Price per Ticket: ₹{price}</p>
      <p>GST (3%): ₹{(price * quantity * 0.03).toFixed(2)}</p>
      <h3>Total Amount: ₹{totalPrice.toFixed(2)}</h3>
      <Link to="/proceed-to-payment">
        <button>Proceed to Payment</button>
      </Link>
    </div>
  );
};

export default PaymentPage;*/
/*import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const { price, quantity } = location.state;

  // Calculate total amount with 3% GST
  const totalPrice = price * quantity * 1.03;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Summary</h2>
      <p style={styles.text}>Tickets Selected: {quantity}</p>
      <p style={styles.text}>Price per Ticket: ₹{price}</p>
      <p style={styles.text}>GST (3%): ₹{(price * quantity * 0.03).toFixed(2)}</p>
      <h3 style={styles.total}>Total Amount: ₹{totalPrice.toFixed(2)}</h3>
      <Link to="/proceed-to-payment" style={styles.link}>
        <button style={styles.button}>Proceed to Payment</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  total: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
  },
};

export default PaymentPage;*/
/*import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const { price, quantity } = location.state;

  // Calculate total amount with 3% GST
  const totalPrice = price * quantity * 1.03;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Summary</h2>
      <p style={styles.text}>Tickets Selected: {quantity}</p>
      <p style={styles.text}>Price per Ticket: ₹{price}</p>
      <p style={styles.text}>GST (3%): ₹{(price * quantity * 0.03).toFixed(2)}</p>
      <h3 style={styles.total}>Total Amount: ₹{totalPrice.toFixed(2)}</h3>
      <Link to="/proceed-to-payment" style={styles.link}>
        <button style={styles.button}>Proceed to Payment</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  text: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#666',
  },
  total: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginTop: '20px',
    color: '#000',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'black',
    color: 'white',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
  },
};

export default PaymentPage;*/
/*import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const { price, quantity } = location.state;

  // Calculate total amount with 3% GST
  const totalPrice = price * quantity * 1.03;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Summary</h2>
      <p style={styles.text}>Tickets Selected: {quantity}</p>
      <p style={styles.text}>Price per Ticket: ₹{price}</p>
      <p style={styles.text}>GST (3%): ₹{(price * quantity * 0.03).toFixed(2)}</p>
      <h3 style={styles.total}>Total Amount: ₹{totalPrice.toFixed(2)}</h3>
      <Link to="/proceed-to-payment" style={styles.link}>
        <button style={styles.button}>Proceed to Payment</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  text: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#666',
  },
  total: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginTop: '20px',
    color: '#000',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'black',
    color: 'white',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
  },
};

export default PaymentPage;*/

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const { price, quantity } = location.state;

  // Calculate total amount with 3% GST
  const totalPrice = price * quantity * 1.03;

  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate('/proceed-to-payment');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Summary</h2>
      <p style={styles.text}>Tickets Selected: {quantity}</p>
      <p style={styles.text}>Price per Ticket: ₹{price}</p>
      <p style={styles.text}>GST (3%): ₹{(price * quantity * 0.03).toFixed(2)}</p>
      <h3 style={styles.total}>Total Amount: ₹{totalPrice.toFixed(2)}</h3>
      <button onClick={handleProceedToPayment} style={styles.button}>Proceed to Payment</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  text: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#666',
  },
  total: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginTop: '20px',
    color: '#000',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'black',
    color: 'white',
    cursor: 'pointer',
  },
};

export default PaymentPage;

