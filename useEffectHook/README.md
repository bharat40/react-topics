# useEffect

- useEffect is a hook using functional components to perform side effects after rendering, such as data fetching, subscriptions, or manual DOM manipulation
- it takes two arguments => one is callback function and other is dependency array

# why is dependency array used in useEffect

- when it empty, it runs only once
- when these values inside it change, the effect re-runs
- if removed, the effect runs after every render
- Handling dependencies ensures that the effect runs only when necessary and prevents unnecessary re-execution of the effect, optimizing performance and avoiding potential bugs

# How to perform cleanup in useEffect

- you can return a cleanup function inside useEffect, which runs before the effect re-runs or when the component unmounts

# useEffect VS useLayoutEffect

## useEffect

- Asynchrnous: runs after render cycle is committed to the screen
- Good for Performance: does not block the browser from painting changes on the screen

## useLayoutEffect

- Synchronous: runs synchronously immediately after the DOM is updated but before the browser paints anything on the screen
- Potentially Blocking: can potentially cause delays in the rendering process if the operations are heavy
