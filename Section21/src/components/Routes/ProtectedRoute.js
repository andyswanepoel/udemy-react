import { Children } from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ condition, path, redirect, children, ...props }) => {
  return (
    <Route path={path} {...props}>
      {condition ? children : <Redirect to={redirect} />}
    </Route>
  );
};
export default ProtectedRoute;
