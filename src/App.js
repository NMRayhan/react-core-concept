import './App.css';
import logo from './logo.svg';


function App() {
  var style = {
    color: "red",
    backgroundColor: "green"
  }
  const names = ["Rayhan", "Chandan", "Rajvhi", "Shaiful"]
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-md-3 col-lg-4">
            <Person name={names[0]}></Person>
          </div>
          <div className="col-md-3 col-lg-4">
            <Person name={names[1]}></Person>
          </div>
          <div className="col-md-3 col-lg-4">
            <Person name={names[2]}></Person>
          </div>
          <div className="col-md-3 col-lg-4">
            <Person name={names[3]}></Person>
          </div>
        </div>
      </header>
    </div>
  );
}
var nameStyle = {
  color: "green"
}
function Person(props) {
  return (
    <div style={{ backgroundColor: "goldenrod", borderRadius: "20px", padding: "10px", margin: "10px" }}>
      <h3>Hello <span style={{ color: 'red' }}>Mr,</span></h3>
      <h2 style={nameStyle}>{props.name}</h2>
      <div>
        <button class="btn btn-primary">Details</button>
      </div>
    </div>

  );
}

export default App;
