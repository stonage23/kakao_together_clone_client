// src/components/Error.js
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Something went wrong</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default Error;
