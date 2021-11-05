import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const showCartHandler = () => {
    setIsCartOpen(true);
  };

  const hideCartHandler = () => {
    setIsCartOpen(false);
  };
  return (
    <CartProvider>
      <Header showCart={showCartHandler} />
      <main>
        {isCartOpen === true && <Cart hideCart={hideCartHandler} />}
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
