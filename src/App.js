import { useEffect, useState } from 'react';
import './App.css';
import Country from './Components/Country/Country';


function App() {
  const [country, setCountry] = useState([])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountry(data);
        const names = data.map(country => country.name)
        console.log(names);
      });
  }, [])

  return (
    <div className="App">
      <h1>Country loaded : {country.length}</h1>
      <div className="row justify-content-between" style={{ width: "80%", margin: "0 auto" }}>
        {
          country.map(country => {
            return (
              <div className="col-4">
                <Country Country={country}></Country>
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
export default App;



