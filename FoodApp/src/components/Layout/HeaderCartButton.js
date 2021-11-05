import React, { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [buttonAnimate, setButtonAnimate] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonAnimate(true);

    const timer = setTimeout(() => {
      setButtonAnimate(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberOfItems = items.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    buttonAnimate === true ? classes.bump : ""
  }`;

  return (
    <button className={btnClasses} onClick={() => props.showCart()}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
