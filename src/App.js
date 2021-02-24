import './App.css';


const products =[
  {name : "Photoshop", price: "$99.90"},
  {name : "Illustrator", price: "$45.90"},
  {name : "PDF Reader", price: "$35.90"}
]

function App() {
  var style = {
    color: "red",
    backgroundColor: "green"
  }
  const names = ["Rayhan", "Chandan", "Rajvhi", "Shaiful"]
  return (
    <div className="App">
      <header className="App-header">
        <ProductCart product={products[0]}></ProductCart>
        <ProductCart product={products[1]}></ProductCart>
        <ProductCart product={products[2]}></ProductCart>
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

function ProductCart(props) {
  const productStyle = {
    border:"1px solid grey",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "300px"

  }
  let {Name, Price} = props.product;
  return (
    <div style={productStyle}>
      <h3>Name:{Name} </h3>
      <h2>Price:{Price} </h2>
      <p>Product Details: </p>
      <button>buy now</button>
    </div>
  )
}

export default App;



