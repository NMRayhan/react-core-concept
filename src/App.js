import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Country from './Components/Country/Country';
import TestData from './Data/MOCK_DATA.json'


function App() {
  const [countrys, setCountry] = useState([])
  const [cart, setCart] = useState([])
  const [testData, setTestData] = useState([])
  const handleCountry = (Country) => {
    const newCart = [...cart, Country];
    setCart(newCart);
  }

  useEffect(() => {
    setTestData(TestData);
    console.log(TestData);
    console.log(TestData.length);
  }, [])



  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountry(data);
      });
  }, [])

  return (
    <div className="App">
      <h1>Added Country : {cart.length}</h1>
      <Cart Carts={cart}></Cart>
      <div className="row justify-content-between" style={{ width: "80%", margin: "0 auto" }}>
        {
          countrys.map(country => {
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

export default App;



