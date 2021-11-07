# Section 13: Class-based Compenents

## What are Class-based Components?

It's another way of writing components using Javascript classes.

With the implementation of React Hooks, there are not many cases now where you can't use functional components.

There are a few reserved methods on the class-based components:
- `render()`
- `constructor()`

## Using Class-based Components

To use them, we need to extend the React `Component` class.

```js 
  class User extends Component {
  render() {
    return <li>My User</li>;
  }
}
```

### Using props
Since we do not pass props into a function, we need to access props via the `this` object.

```js 
  class User extends Component {
    render() {
      return <li>{this.props.name}</li>;
    }
}
```

### Using state

In class-based components, there is one state object which is initialized in the `constructor()` method.

The `super()` method is needed to access properties from the `Component` class.

```js 
  class User extends Component {
    constructor() {
      super();
      this.state = {
        showUsers: false,
        moreStateKeys: "Test"
      }
    })
    render() {
      return <li>{this.props.name}</li>;
    }
}
```

To update state, we can use the `setState()` method.

```js

  class Users extends Component {
    // some code skipped...
    toggleUsersHandler() {
      this.setState((curState) => {
        return {
          showUsers: !curState.showUsers
        };
      });
    }

    render() {
     // some code skipped...
      return (
        <div className={classes.users}>
          <button onClick={this.toggleUsersHandler.bind(this)}>
            {this.state.showUsers ? "Hide" : "Show"} Users
          </button>
          {this.state.showUsers && usersList}
        </div>
      );
    }
  }
```

Notice above that we have to bind `this` to the function called within the `render()` method. Without it, when the `toggleUsersHander` would be called, `this` would not be the `Users` class and would not have a `setState()` method.

### Lifecycle Methods

**componentDidMount()**
Similar to the `useEffect(..., [])` 
Will only run on the first time the component renders.

**componentDidUpdate()**
Similar to the `useEffect(..., [someValue])` 
Will run when something changes: props, state, etc...

**componentWillUnmount()**
Similar to the clean up function that is returned for `useEffect()`
Runs right before a component unmounts.


## Error Boundaries

Usually errors would be handled with a try/catch block
However, if we want to handle the error in a parent component, we can't write try/catch blocks in JSX. 

What we can do is create an `ErrorBoundary` component to handle the error using the `componentDidCatch()` lifecycle method.