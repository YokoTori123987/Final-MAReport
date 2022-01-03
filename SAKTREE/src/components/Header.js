import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <>{/*================ Start Header Menu Area =================*/}
        <header className="header_area">
          <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <a className="navbar-brand logo_h" href="index.js"><Link to="/"><img src="img/logo.png" width="200" alt="" /></Link></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                  <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
                    <li className="nav-item active"><a className="nav-link" href="index.js"><Link to="/">Home</Link></a></li>
                    <li className="nav-item submenu dropdown">
                      <a href="Category.js" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
                      <ul className="dropdown-menu">
                        <li className="nav-item"><a className="nav-link" href="category.js"><Link to="/category">Shop Category</Link></a></li>
                        <li className="nav-item"><a className="nav-link" href="single-product.js"><Link to="/detail">Product Details</Link></a></li>
                        <li className="nav-item"><a className="nav-link" href="checkout.js"><Link to="/checkout">Product Checkout</Link></a></li>
                        <li className="nav-item"><a className="nav-link" href="confirmation.js"><Link to="/confirm">Confirmation</Link></a></li>
                        <li className="nav-item"><a className="nav-link" href="cart.js"><Link to="/cart">Shopping Cart</Link></a></li>
                      </ul>
                    </li>


                    <li className="nav-item submenu dropdown">
                      <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                      <ul className="dropdown-menu">
                        <li className="nav-item"><a className="nav-link" href="login.js"><Link to="/login">Login</Link></a></li>
                        <li className="nav-item"><a className="nav-link" href="register.js"><Link to="/regis">Register</Link></a></li>
                        <li className="nav-item"><a className="nav-link" href="tracking-order.js"><Link to="/track">Tracking</Link></a></li>
                      </ul>
                    </li>

                  </ul>
                  <ul className="nav-shop">
                    <li className="nav-item"><Link to="/category"><button><i className="ti-search" /></button></Link></li>
                    <li className="nav-item"><Link to="/cart"><button><i className="ti-shopping-cart" /><span className="nav-shop__circle">3</span></button></Link></li>
                    <li className="nav-item"><a className="button button-header" href="#"><Link to="/login">Sing In</Link></a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/*================ End Header Menu Area =================*/}
  </>
    )
}
export default Header;