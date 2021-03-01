import { useEffect, useState } from 'react';
import './App.css';
import Country from './Components/Country/Country';


function App() {
  const [country, setCountry] = useState([])
  const handleCountry = (Country) => { 
    setCountry([...country, Country])
   }
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountry(data);
        data.map(country => country.name)
      });
  }, [])

  return (
    <div className="App">
      <TotalPopulation TotalPopulation={country}></TotalPopulation>
      <div className="row justify-content-between" style={{ width: "80%", margin: "0 auto" }}>
        {
          country.map(country => {
            return (
              <div className="col-4">
                <Country Country={country} key={country.numericCode} handleCountry={handleCountry}></Country>
              </div>
            )
          })
        }
      </div>

      <header className="App-header">
      </header>
    </div>
  );
}

function TotalPopulation(props){
  const population = props.TotalPopulation;
  let total = 0;
  for (let i = 0; i < population.length; i++) {
    const country = population[i];
    total = total + country.population
  }
  return (
    <div>
      <h1>Total Population : {total}</h1>
    </div>
  )
}
export default App;



