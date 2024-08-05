import React from 'react';  // Import the React library to use for creating components

import Restaurants from './Restaurants';  // Import the Restaurants component from the './Restaurants' file

const App = () => {  // Declare a component named App using an arrow function
  return (  // Return JSX to render the component
    <div>  {/* Start a div to wrap the content of the component */}
      <h1>Restaurant Search</h1>  {/* Display a heading with the text "Restaurant Search" */}
      <Restaurants />  {/* Render the Restaurants component */}
    </div>  // Close the div that wraps the content of the component
  );
};

export default App;  // Export the App component as the default export of this file

