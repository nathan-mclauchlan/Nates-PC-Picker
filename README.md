# The Wonderful World of Widgets

## Setup

To experience this repo in all of its glory:

* Clone this repo

```sh
cd react-to-web-api
npm install
npm run knex migrate:latest
npm run knex seed:run
npm run dev
```

* Navigate to [http://localhost:3000](http://localhost:3000)

## Getting Started

Today we're working full-stack! We'll be writing database functions, exposing a web API that uses them and consuming that API from React. It's the biggest project we've worked with so far, so keeping an awareness on _where_ in the codebase you are is important!

Take a look around the project to make sure you're familiar with the layout. Take particular note of what is in your client folder, and the setup of the server routes in the back end.

## Steps

We're first going to get some widgets displaying on the page. The widget data is being stored in a database (on our server side), so we'll have to make an API call to retrieve the data.

1. Looking in our `server` folder, we can see that a database function called `getWidgets` has already been built in `db/db.js`. A `GET` route using that DB function is also in place in `routes/widgets.js`.
    - Test that the route is working (and see what data it returns) by making a GET request to `http://localhost:3000/api/v1/widgets/` from Insomnia or Postman.

1. Heading to the `client` folder, let's set up our components. Add a `useState` hook to the `App.jsx` component, so we can store `widgets` in component state. Make the initial value an empty array (because our widgets `GET` route responds with an array).

1. Also add a `useEffect` hook to `App`. Remember to pass an empty array to `useEffect` as the second parameter (so that the effect only runs once, after the component first renders.)
    - You'll find a `getWidgets` function in `api.js`. This function uses `superagent` to make a GET request to `'/api/v1/widgets/'`, just like we were doing with Insomnia. It's then returning just the response body (which is the JSON data being sent from our server - we don't need the rest of the HTTP response data).
    - Import this `getWidgets` function from `api.js` into `App.jsx`, and use it in your `useEffect` method.
    - With the resulting widgets data from our API, update the `widgets` state using `setWidgets`.
    - Use the React Dev Tools to check that state updates as you expect.

1. Modify the `jsx` your component returns so that it displays the widgets from the component state. Perhaps you could use a `.map` here to render a new `<Widget />` component for each widget.

## Next Steps

These next steps will be full stack, requiring you to make changes to both the front and back end.

- Add the ability to add a widget. The steps you might take to complete this could be:
   - Create a POST route on the server side in `widgets.js`. Test you can get a response for it in Postman.
   - Create the database function to add a new widget. Call this function in your route and test it works in Postman.
   - Create an `postWidget` function in `api.js` that will make a POST request to the API route you just built.
   - Create a new `AddWidget` component containing a form. Import the `postWidget` function from `api.js` and hook it up to your form's submit handler.
   - Once your widget has been added, have your widget list refresh so the new widget is visible. Perhaps this could involve reusing the `getWidgets` API function, or thinking about the data you return from your POST route...
   - Create an `Add Widget` button in `App` to conditionally render your add form.

- Add the ability to delete a widget (HTTP DELETE)

- Add the ability to update a widget (HTTP PATCH)

- Extend the database schema for the details that are stored about widgets - add a `rating` field so we know how good those widgets really are. This will need to be added into what is displayed, and also onto the fields of the add form.

- Refactor your code into separate components (if it isn't already)

- Write tests for your components.
