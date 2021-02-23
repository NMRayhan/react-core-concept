import './App.css';
import logo from './logo.svg';

function App() {
  let name = "Rayhan"
  let date = new Date();
  var style = {
    color : "red",
    backgroundColor : "green"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Learn React</p>
        <h1 style={{color : "red",backgroundColor: "green"}}>Hello {name}</h1>
        <h2 className="" style={style} >Today is {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</h2>
      </header>
    </div>
  );
}

export default App;
