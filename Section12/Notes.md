# Section 12: A Look Behind The Scenes Of React & Optimization Techniques

## Behind the scenes

- The React library only deals with components
- It's not concerned where the code is output
- React uses a virtual DOM to compare the output when state changes in a component. Although all these updates come from state, they could be:
  - props
  - state
  - context

### When the state changes
- React diffs the previous virtual DOM and current virtual 
- The DOM will only update the elements that have changes

### Re-evaluating the component tree
React will re-evaluate every child component of a parent who is has had a state change via props, state, or context.

For example, in this (poorly architected) application, if the state changes in the `App` component, it will re-execute the `DemoOutput` component, which will re-execute the `Paragraph` component. 

## Optimizing

With this approach, there may be a lot of unneccesary re-executing of child components whose state is not affected. This can have some performance impact, although React is optimized for this. 

In larger apps, you may want to only re-execute a child component function if it's props changed.

Introducing.... `React.memo()`

### React.memo()

If we wrap the component export in `React.memo()`, it will only re-execute the component if its props change. 

```javascript
  export default React.memo(MyComponent);
```

Trade Offs:
- React will store the props of the component
- It will compare the old value and the new value
- If there is no change, it won't re-execute
- There is a cost to storing the props
- It depends on the amount of children components, how often the props are expected to change


### Primitive Types vs Reference Types

When a component re-executes, any reference types (objects, arrays, functions) will be re-created in memory. If these are used as props in a component, that component will be re-executed even in if wrapped in `React.memo()`.

For example: 

```javascript
  const App = () => {
    const clickHandler = () => {
      alert("Click");
    }
    const showParagraph = true;
    return (
      <div>
        <Paragraph showParagraph={showParagraph}>This will not change.</Paragraph>
        <Button onClick={clickHandler}>This will change.</Button>
      </div>
    )
  }
```

Introducing.... `useCallback()`

### useCallback()

If we want to save a pointer to a function for additional re-executions of a component, we can wrap the function value in `useCallback()`.

Using the same example as above:

```javascript
  const App = () => {
    const clickHandler = useCallback(() => {
      alert("Click");
    }, [])
    const showParagraph = true;
    return (
      <div>
        <Paragraph showParagraph={showParagraph}>This will not change.</Paragraph>
        <Button onClick={clickHandler}>This will change.</Button>
      </div>
    )
  }
```

Similar to `useEffect()`, `useCallback()` requires a dependency array to know when to save a new value in memory and update that pointer.


### useMemo()

Similar to `useCallback()`, `useMemo()` is used to store values instead of functions or callbacks. This is useful to store the results of sorting functions and other performance intensive operations.

```javascript
  const List = (props) => {
    const sortedList = useMemo(() => {
      return props.items.sort((a, b) => a - b);
    }, [props.items])

    return (
      <ul>
        {sortedList.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    )
  }
```

This will memoize the value returned from the sorting method and only update the value if one of the dependencies is changed.