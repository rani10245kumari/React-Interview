### Q1 Difference between callback and useCallback Hook ?
ANS-
|Callback|useCallback|
|----|----|
|A callback is a function passed as an argument to another function and excuted after the completion of that function.|The React useCallback Hook returns a memoized callback function.|


### Q2 Why do we need keys in react less?
#### Ans -
<ul>
<li>In React, keys are special attributes that provide a way to identify and differentiate between elements in a list. Each element in an array should have a unique key. React uses keys to efficiently update the user interface by identifying which elements have changed or been added/removed when rendering lists.</li>
<li>The Problem Without Keys
Without keys, when React re-renders a list, it has no way to determine which elements have changed or where new items have been inserted. This can lead to unexpected and incorrect behavior.</li>
<li>The Solution with Keys
By providing unique keys to elements in a list, React can accurately track changes. When React re-renders a list, it will compare the keys of the new elements to the previous ones, allowing it to update, reorder, or remove elements effectively.</li>
<li>When to Use Keys
When rendering dynamic lists or arrays in React components.
When dealing with lists that may change over time, such as when items are added, removed, or reordered.</li>

### Q3 What is UseMemo Hook ?(Implementation)
#### Ans-
useMemo is a React hook that allows you to memoize the result of a computation or function so that it is only recalculated when its dependencies change. This can help optimize the performance of your React components by preventing unnecessary re-calculations and re-renders.

The React useMemo Hook returns a memoized value.



### Q4 What is UseRef Hook ?(Implementation)
#### Ans-
The useRef hook in React allows you to create and access references to DOM elements or to hold mutable values that persist across renders without causing the component to re-render when the value changes. It's a way to interact with the DOM imperatively and to store values that don't trigger re-renders when they change.

### Q5 What is UseReducer Hook ?(Implementation)
#### Ans -
The useReducer Hook is similar to the useState Hook.

It allows for custom state logic.

If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

syntax - useReducer(<reducer>, <initialState>)

The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.

The useReducer Hook returns the current stateand a dispatchmethod.

### Q6 Difference between useeffect and usecontext?
#### Ans- 
|useEffect|useContext|
|----|----|
|useEffect is a React Hook that allows you to perform side effects in your functional components. Side effects typically include data fetching, DOM manipulation, or setting up subscriptions.|useContext is a React Hook used for accessing and consuming a Context object. Context provides a way to pass data through the component tree without having to pass props down manually at every level.|
|useEffect takes two arguments: a function with side effects and an array of dependencies to control when the effect runs.|useContext takes a single argument, the Context object, and returns the current context value.|
|useEffect is primarily used for managing asynchronous operations and side effects.|
