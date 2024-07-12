import React from 'react';

const PaymentConfirmationPage = () => {
  const randomTexts = [
    'Thank you for your payment!',
    'Your payment was successful!',
    'Payment confirmed. Enjoy the event!',
    'Payment received. See you at the event!',
  ];

  // Function to get random text
  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Confirmation</h2>
      <p style={styles.text}>{getRandomText()}</p>
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
    color: '#666',
  },
};

export default PaymentConfirmationPage;
