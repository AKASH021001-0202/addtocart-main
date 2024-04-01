import React, { useState } from "react";
import "./App.css";
import dummyImage from "./assets/dummy.jpg";

const App = () => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const data = [
    {
      id: 1,
      title: 'Product 1',
      price: '$10.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      sale: false,
      rating: 4,
      image: dummyImage,
    },
    {
      id: 2,
      title: 'Product 2',
      price: '$15.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      sale: true,
      rating: 5,
      image: dummyImage,
    },
    {
      id: 3,
      title: 'Product 3',
      price: '$20.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      sale: false,
      rating: 4,
      image: dummyImage,
    },
    {
      id: 4,
      title: 'Product 4',
      price: '$25.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      sale: true,
      rating: 3,
      image: dummyImage,
    },
    {
      id: 5,
      title: 'Product 5',
      price: '$30.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      sale: false,
      rating: 4,
      image: dummyImage,
    },
    {
      id: 6,
      title: 'Product 6',
      price: '$35.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      sale: true,
      rating: 5,
      image: dummyImage,
    },
    {
      id: 7,
      title: 'Product 7',
      price: '$40.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      sale: false,
      rating: 4,
      image: dummyImage,
    },
    {
      id: 8,
      title: 'Product 8',
      price: '$45.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      sale: true,
      rating: 3,
      image: dummyImage,
    },
    {
      id: 9,
      title: 'Product 9',
      price: '$50.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      sale: false,
      rating: 4,
      image: dummyImage,
    },
    {
      id: 10,
      title: 'Product 10',
      price: '$55.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      sale: true,
      rating: 5,
      image: dummyImage,
    },
    {
      id: 11,
      title: 'Product 11',
      price: '$60.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      sale: false,
      rating: 4,
      image: dummyImage,
    },
    {
      id: 12,
      title: 'Product 12',
      price: '$65.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      sale: true,
      rating: 3,
      image: dummyImage,
    },
  ];
  const addToCart = (item) => {
    const newCart = [...cart, item];
    console.log(newCart)
    setCart(newCart);
    setCartCount(newCart.length);
  };

  const removeFromCart = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
    setCartCount(newCart.length);
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <Banner />
      <CardComponent data={data} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
    </>
  );
};

const Header = ({ cartCount }) => {
  return (
    <div className="container-fluid bg-light">
    <div className="navbar navbar-expand-lg  bg-light">
      <div className="container">
        <a className="navbar-brand" >Shop</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Product</a>
            </li>
          </ul>
          <button className="btn btn-outline-success" >
            <i className="bi bi-cart4"></i> Cart ({cartCount})
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

const Banner = () => (
  <div className="banner">
    <div className="content">
      <h1>Shop in style</h1>
      <h3>With this shop homepage template</h3>
    </div>
  </div>
);

const CardComponent = ({ data, addToCart, removeFromCart, cart }) => {
  const isInCart = (itemId) => cart.some((item) => item.id === itemId);

  return (
    <div className="container">
      <div className="col-lg-4 items-card">
        <div className="card-container">
          {data.map((item) => (
            <div className="card1" key={item.id}>
              {item.sale && <div className="sale-tag">Sale</div>}
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-body">
                <div className="title">{item.title}</div>
                <div className="price">{item.price}</div>
                <div className="description">{item.description}</div>
                <button onClick={() => isInCart(item.id) ? removeFromCart(item.id) : addToCart(item)} className="add-to-cart-btn">
                  {isInCart(item.id) ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default App;
