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
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="d-flex flex-row-reverse container bg-dark text-primary">
        <ProductCartItem item={count}></ProductCartItem>
      </div>
      <header className="App-header">
        <div className="row justify-content-center container">
          {
            products.map(product => {
              return (
                <div className="col-3">
                  <ProductCartFunction product={product}></ProductCartFunction>
                  <button className="btn btn-info" onClick={() => setCount(count + 1)}><i className="fas fa-shopping-cart"></i></button>
                </div>
              )
            })
          }
        </div>
        <UserPost></UserPost>
      </header>
    </div>
  );
}


function ProductCartFunction(props) {
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
                  <h4 style={{ color: "#00A170" }}>{post.title}</h4>
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

function ProductCartItem(props) {
  return (
    <div>
      <i className="fas fa-shopping-cart fs-1 text-info sticky-md-top">{props.item}</i>
    </div>
  )
}

export default App;



