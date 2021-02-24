import './App.css';

const products = [
  { name: "Photoshop", price: "$99.90", discription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, officia." },
  { name: "Illustrator", price: "$45.90", discription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, officia." },
  { name: "PDF Reader", price: "$35.90", discription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, officia." },
  { name: "Adobe UX", price: "$85.90", discription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, officia." },
  { name: "Premiere Pro", price: "$75.90", discription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, officia." },
  { name: "Premiere Rush", price: "$65.90", discription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, officia." },
  { name: "After Effects", price: "$85.90", discription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, officia." },
  { name: "Dreamweaver", price: "$85.90", discription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, officia." },
]

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="row justify-content-center container">
          {
            products.map(product => {
              return (

                <div className="col-3">
                  <ProductCart product={product}></ProductCart>
                </div>

              )
            })
          }
        </div>
        <div>
          <ul>
            {
              products.map(product => {
                return <li>{product.name}</li>
              })
            }
          </ul>
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
    height: "300px",
    width: "250px",
    color: "black",
    marginTop: "10px"
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



