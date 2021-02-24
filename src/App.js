import { useEffect, useState } from 'react';
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
        <Counter></Counter>
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
        {/* <div>
          <ol>
            {
              products.map(product => {
                return <li>{product.name}</li>
              })
            }
          </ol>
        </div> */}
        <UserPost></UserPost>
      </header>
    </div>
  );
}


function ProductCart(props) {
  const productStyle = { // product card style Object
    border: "1px solid grey",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "300px",
    width: "250px",
    marginTop: "10px",
    color: "black"
    
  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name} </h3>
      <h2>{props.product.price} </h2>
      <p>{props.product.discription} </p>
      <button className="btn btn-info">Buy Now</button>
    </div>
  )
}

function UserPost() {

  var postStyle = {
    backgroundColor: "#9BB7D4",
    borderRadius: "10px",
    width: "250px",
    marginTop: "10px",
    fontFamily: 'Oswald',
    color: "black",
    marginLeft: "15px"
  }

  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPost(data));
  }, [])
  return (
    <div>
      {
        <div className="container row justify-content-center">
          {
            posts.map(post => {
              return (
                <div className="col-3" style={postStyle}>
                  <h4 style={{color:"#00A170"}}>{post.title}</h4>
                  <p>{post.body}</p>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

function Counter() {
  //useState Function
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count :{count} </h1>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default App;



