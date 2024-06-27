import React from "react";
import Header from "./component/Header";
import Search from "./component/Search";
import Restaurant from "./component/Restaurant";

function App() {
  const [restaurants, setRestaurants] = 

  return (
    <>
    <div className="container mx-auto">
      <Header />
      <Search 
      restaurants={restaurants}
      setFilteredRestaurants = {setFilteredRestaurants}
      />
      <Restaurant restaurants={filtedRestaurants} />
    </div>
    </>
  );
}

export default App;
