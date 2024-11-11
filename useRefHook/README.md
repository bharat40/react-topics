# useRefHook

- It is a hook used to create a mutable reference that persists across renders (meaning its value doesn't reset when the component re-renders.)
- It returns a mutable object with a .current property
- The reference created by useRef can be changed without causing the component to re-render.

# When would you use useRef?

- Accessing DOM elements or managing focus
- Storing mutable values that persist without causing re-renders
- Caching values to avoid re-initialization on re-renders

# Difference between useState and useRef?

- useState => manages state and triggers re-renders when it value changes. When you update it using setStateValue, the component re-renders, and the updated value is reflected in the UI
  -useRef => holds a mutable value (current) that persists across renders without causing re-renders. When you update it (refValue.current = ...) the component doesn't re-render, but the updated value is stored and accessible across re-renders
