import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart</h1>
        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] > 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
        {totalAmount > 0 ? (
          <div className="checkout">
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        ) : (
          <>
            <h1>No Items in your Cart</h1>
            <button className="btn" onClick={() => navigate("/")}>
              Continue Shopping
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
