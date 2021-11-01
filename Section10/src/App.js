import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const context = useContext(AuthContext);
  console.log(context);
  return (
    <>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login loginHandler={context.loginHandler} />}
        {context.isLoggedIn && <Home logoutHandler={context.logoutHandler} />}
      </main>
    </>
  );
}

export default App;
