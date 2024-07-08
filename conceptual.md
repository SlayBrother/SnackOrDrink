### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  React Router allows the user to diferentiate between server and client side loading. You're able to navigate multiple components of a React application, while changing a URL, without reloading.

- What is a single page application?
  A single page application allows you to view mulitple different components without the need to refresh a page. For example, if you're on instacart and you click on oranges, it'll show you the prices, details, description, etc of the oranges but won't take you to a seperate page. 

- What are some differences between client side and server side routing?
  The largest and primary different between the two is a server side client is constantly needing to hit the server upon needing new information or new page. CLient side routing relies upon the client within the browser to have everything within the client so you're not constantly hitting the server for everything. 

- What are two ways of handling redirects with React Router? When would you use each?
  One method of redirecting is {Navigate} and this is used when you want to perform a redirect as part of your component rendering logic. This might help when you want to redirect a user for one reason or another (whether they don't have permissions or if they're authenticated or not)
  Another method of redirecting is {useNaviaget} and this may be used as a result of an event handler or side effect. This may be used for a form submission, button click, etc. 

- What are two different ways to handle page-not-found user experiences using React Router? 
  The first way you could handle page not found user experiences is by creating a catch-all route. This would simply route any and all undefined routes to a page explaining that the page wasn't found and potentially have a nav bar back to the home or where they were. 
  Another method would be Error boundaries, this would not only catch url's that didn't route explicitly to somewhere that existed but also if there is an error within the React components itself

- How do you grab URL parameters from within a component using React Router?
  You are able to grab URL params through {useParams} hook. This would allow you to grab parameters defined in the path route. 

- What is context in React? When would you use it?
  Context allows you to share or access data across the entire component tree without having to manually pass down props at every single level. This would allow you drop data to a great-great-great-grandparent and a child component and skip all those within if desired. 
- Describe some differences between class-based components and function
  components in React.
  Class-based components still have to need for .this, React.Component, and setting state.  

- What are some of the problems that hooks were designed to solve?
  Hooks help manage state and lifecycling methods that were made more complicated through class components. Using useState or useEffect would simplify state management and side effects by providing cleaner ways to handle them. 