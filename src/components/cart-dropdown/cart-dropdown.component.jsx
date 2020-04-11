import React from "react";

// import { connect } from "react-redux";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.componenet";
import "../../redux/cart/cart.reducer";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton inverted>Go To CheckOut</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
