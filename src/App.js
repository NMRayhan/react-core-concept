import './App.css';
import logo from './logo.svg';


function App() {
  var style = {
    color: "red",
    backgroundColor: "green"
  }
  return (
    <div className="App">
      <header className="App-header">
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
var nameStyle = {
  color : "green"
}
function Person() {
  return (
    <div style={{ backgroundColor: "goldenrod", borderRadius: "20px", padding: "10px",margin: "10px" }}>
      <h3>Hello <span style={{ color: 'red' }}>Mr,</span></h3>
      <h2 style={nameStyle}>Nur Mohammad Rayhan</h2>
      <div>
        <button class="btn btn-primary">Details</button>
      </div>
    </div>

  );
}

export default App;
