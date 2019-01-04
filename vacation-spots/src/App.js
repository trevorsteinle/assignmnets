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
