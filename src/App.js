import './App.css';

const products = [
  { name: "Photoshop", price: "$99.90", discription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, officia." },
  { name: "Illustrator", price: "$45.90", discription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, officia." },
  { name: "PDF Reader", price: "$35.90", discription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, officia." },
  { name: "Adobe UX", price: "$85.90", discription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, officia." }
]


fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row justify-content-center">
          <div className="col-3">
            <ProductCart product={products[0]}></ProductCart>
          </div>
          <div className="col-3">
            <ProductCart product={products[1]}></ProductCart>
          </div>
          <div className="col-3">
            <ProductCart product={products[2]}></ProductCart>
          </div>
          <div className="col-3">
            <ProductCart product={products[3]}></ProductCart>
          </div>
        </div>
      </header>
    </div>
  );
}


function ProductCart(props) {
  const productStyle = {
    border: "1px solid grey",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "250px",
    width: "300px",
    color: "black"
  }

  return (
    <div style={productStyle}>
      <h3>{props.product.name} </h3>
      <h2>{props.product.price} </h2>
      <p>{props.product.discription} </p>
      <button>buy now</button>
    </div>
  )
}

export default App;



