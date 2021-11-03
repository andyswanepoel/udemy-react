import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const showCartHandler = () => {
    setIsCartOpen(true);
  };

  const hideCartHandler = () => {
    setIsCartOpen(false);
  };
  return (
    <div>
      <Header showCart={showCartHandler} />
      <main>
        <Meals />
        {isCartOpen === true && <Cart hideCart={hideCartHandler} />}
      </main>
    </div>
  );
}

export default App;
