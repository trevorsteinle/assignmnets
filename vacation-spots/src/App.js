import React from 'react';
// import './App.css';
import Cards from './Vcards';


let vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeOfYear: "Spring"
  },{
    place: "Cancun",
    price: 900,
    timeOfYear: "Winter"
  },{
    place: "China",
    price: 1200,
    timeOfYear: "Fall"
  },{
    place: "Russia",
    price: 1100,
    timeOfYear: "Summer"
  },{
    place: "Lebanon",
    price: 400,
    timeOfYear: "Spring"
  }
]

const App = () => {
  const vacationSpotComponents = vacationSpots.map((spot) => <Cards {...spot}/>);
  return (
  <div>
    {vacationSpotComponents}
  </div>
  )
}

export default App;

// This structure is confusing. 

// You map through ""
 
// This structure in confusing. 

// You map through vacationSpotComponents (an array), which is great, but probably 
// should be done in a different component the app. You have that map render several
// “cards” but you don’t want to call it cards. You want to call each one “card” 
// so that we know it’s an object, and not an array. 