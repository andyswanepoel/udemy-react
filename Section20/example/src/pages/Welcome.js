import { Route } from "react-router-dom";

const NewUserGreeting = () => {
  return <p>Welcome, new user!</p>;
};

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user" component={NewUserGreeting} />
    </section>
  );
};

export default Welcome;
