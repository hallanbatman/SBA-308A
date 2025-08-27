# SBA 308A: JavaScript Web 

## Application Description
This project is a single-page web application, built using asynchronous JavaScript and The Dog API. The game presents users with two random dog images side by side, each labeled with its breed name. The user clicks on their preferred dog, and the chosen dog remains on screen while the other is replaced with a new random dog.

## Concepts and Features
- Use of fetch and async/await to handle API calls cleanly.
- Clear separation of concerns by organizing code into three modules:
    - `api.mjs` → handles all API communication.
    - `ui.mjs` → manages DOM rendering and event listeners.
    - `main.mjs` → contains the game logic and orchestrates interactions.
- A responsive and engaging interface styled with CSS, including standardized image sizes for a consistent gallery look.
- Proper handling of asynchronous behavior to avoid race conditions and ensure the game runs smoothly.

## Objectives
- Use asynchronous JavaScript tools to build a responsive web application.
- Demonstrate understanding of the JavaScript event loop.
- Generate asynchronous code using Promises and async/await syntax.
- Use fetch and/or Axios to interact with an external web API.
- Organize files using modules and imports.
- You will create a small single-page web application.

| Requirement | Weight |
| --- | --- |
| Use the fetch API or Axios to communicate with an external web API. Use the data provided by this API to populate your application’s content and features | 20% |
| Create user interaction with the API through a search feature, paginated gallery, or similar. This feature should use GET requests to retrieve associated data. | 15% |
| ~~Enable user manipulation of data within the API through the use of POST, PUT, or PATCH requests. Ensure your chosen API supports this feature before beginning.~~ | ~~15%~~ |
| Make use of Promises and async/await syntax as appropriate. | 15% |
| Organize your JavaScript code into at least three (3) different module files, and import functions and data across files as necessary. | 3% |
| Ensure the program runs as expected, without any undesired behavior caused by misunderstanding of the JavaScript event loop (such as race conditions, API calls being handled out of order, etc.). | 5% |
| Create an engaging user experience through the use of HTML and CSS. | 5% |
| Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). | 10% |
| Commit frequently to the git repository. | 5% |
| Include a README file that contains a description of your application. | 2% |
| Level of effort displayed in creativity, presentation, and user experience. | 5% |

## Reflection
- What could you have done differently during the planning stages of your project to make the execution easier?
    - I could have planned an external API KEY to be hidden outside the front end script.

- Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?

    - The `chosenIndex` logic to keep the `chosenDog` and replaced the `otherDog` was a bit more complicated to come up with it.

- What would you add to, or change about your application if given more time?

    - I would add the ability to save favorite breeds into a local memory.

- Use this space to make notes for your future self about anything that you think is important to remember about this process, or that may aid you when attempting something similar again.

    - How to bypass the API KEY in the front end.