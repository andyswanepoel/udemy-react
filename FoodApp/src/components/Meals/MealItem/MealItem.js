import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (newAmount) => {
    cartCtx.addItemToCart({
      id: props.id,
      name: props.name,
      amount: newAmount,
      price: props.price
    });
  };
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div className={classes["meal-container"]}>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <MealItemForm addItemToCart={addToCartHandler} id={props.id} add />
    </li>
  );
};

export default MealItem;
