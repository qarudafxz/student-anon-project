import React from 'react';

const CustomError = () => (
  <div>
    <p>An error has occurred. Please try again later.</p>
    <button onClick={() => window.location.reload()}>Refresh</button>
  </div>
);

export default CustomError;
