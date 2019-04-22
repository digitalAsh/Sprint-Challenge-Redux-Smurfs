1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?



1) Actions are the part of Redux that handles the data.  The reducers get the data from the actions and manipulate the state 
according to how you instruct it to.  The store is 'global' state for the entire app.

2) Application state is the 'global' state of the app and can be shared with the components.  The component state is only 
available to that component.  

3) Redux-thunk allows us to run asynchronous code in the actions.  We can use middleWare with thunk.