import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="navbar">
      <div>E-commerce</div>
      <div className="share-logs">
        <div className="logs-wrapper">
          <img src="/svgs/log.svg" alt="Share Icon" />
          Share Logs
        </div>
      </div>
      <div className="cart-icon">
        <div className="cart-icon-wrapper">
          <img src="/svgs/cart.svg" alt="Share Icon" />
          <span className="cart-item-count">{cartItems.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

