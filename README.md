# Day 1
#### Q.1 What is SPA?
#### Ans- 
<ul><li>A Single Page Application (SPA) is a web application that loads all of its content on a single HTML page.</li>
<li> A Single Page Application is a web application or website that loads a single HTML page and dynamically updates the content as the user interacts with it, without requiring the entire page to be reloaded from the server.</li></ul>

| ADVANTAGES | DISADVANTAGE |
|----|----|
|Fast and responsive user experience|Initial load time can be slower|
|Improved scalability and performance for large apps|May not be compatible with all browsers and devices|
|page is not relodaded everytime|Intial loading of page is slower|

### Q2 What is Virtual DOM?
#### Ans-Virtual DOM is nothing but actually the copy of real DOM . Instead of directly manipulating the Real DOM, React updates and manipulates the Virtual DOM first.
#### How virtual dom works:-
<ul>
<li>When you make any changes in react component it does not update real dom immdieatly ,first updation is done on virtual dom.</li>
<li>There are generally two type of virtual dom in react.</li>
<li>
when there is changes made, the updation is done on speicfic part of the  second virtual dom, then there is comparision of virtual dom and previous virtual dom and this process is known as (Diffing algortim).
</li>
<li>
Now the new changes will be updated in your Real DOM, this procedure is known as Recoinciliation 
</li>
</ul>

#### Benefits of the Virtual DOM:
React updates only the parts of the Real DOM that have actually changed, reducing unnecessary work and rendering only the necessary updates.
### Q3 What is difference between class and functional component?
#### Ans -
|Functional Component | Class Component|
|----|----|
|A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).|A class component requires you to extend from React. Component and create a render function that returns a React element.|
|There is no render method used in functional components.|It must have the render() method returning JSX |
|function-based components were stateless and didn't have lifecycle methods. However, with the introduction of React Hooks, you can manage component state and use lifecycle-equivalent functions in function-based components.|Class component are stateful .Class-based components can have both local state and lifecycle methods. They were the primary way to manage component state and lifecycle before the introduction of React Hooks.|

### Q4What is package.json?
#### Ans-
The main purpose of this file is to hold various metadata related to the project. The file is used to provide the information to the node package manager (NPM) that allows identifying the project and its dependencies.

### Q5 What is JSX and why do we use it instead of js?
#### Ans- 
JSX stands for javascript XML, is a syntax extension for JavaScript that is commonly used in React applications. JSX allows you to write HTML-like code within your JavaScript code, making it easier to describe the structure of your UI components.

1.Declarative Syntax
2.Readability
3.Component Composition
4.Performance Optimization




