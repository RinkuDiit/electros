import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Shop from './components/Shop';
import Slider from './components/Slider';
import Product from './components/product';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
function App() {
  return (
    <div>
      
      <div className='header'>
        
        {/* --------------navbar start----------------- */}
<BrowserRouter>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MY SHOP</a>
         <a ><span className="navbar-toggler-icon" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></span></a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to="/Home">Home</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to="abouts">About Us</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to="contact">Contact</Link></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <Link to="/shop">Shop</Link>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      
      </ul>
    
    </div>
  </div>
 
</nav>
<form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
 <a href='' > <img src={require ('./icon/search (1).png')} className='search-icon'/></a>
 <a href='' ><img src={require('./icon/card.png')} className='card-data'/></a>
 <a href='' ><img src={require('./icon/heart.png')} className='heart-data'/></a>
 <a href='' ><img src={require('./icon/user.png')} className='user-data'/></a>
       </form>


<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/abouts" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/shop" element={<Shop/>} />

</Routes>
</BrowserRouter>

        {/* ----------------navbar end--------------------- */}

      </div>

<Slider/>
<Product/>
    </div>
  )
}

export default App