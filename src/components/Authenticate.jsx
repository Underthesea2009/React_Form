// src/components/Authenticate.jsx
import React, { useState } from 'react';

function Authenticate({ token }) {
 const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleClick = async () => {
    
    try {
      // Send a GET request to the authenticate API with the token
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: 'GET',
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
    setSuccessMessage(data.message);
        
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Authenticate</h2>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  );
}

export default Authenticate;


  