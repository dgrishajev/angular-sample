# User App

**Angular application**

## How to run

1. Clone this repo
2. Install packages with `npm install`
3. Run `ng serve` and navigate to `localhost:4200`

## Description

The application is set up to use router to provide 3 routes (list/view/edit).
Each route use a dedicated component to bind data to the view file. 
The following service is called to retrieve and pass back data from a REST endpoint. The following endpoints are used:

1. http://jsonplaceholder.typicode.com/users - list of users.
2. http://jsonplaceholder.typicode.com/users/1 - specific user’s data.

The data from the endpoint is displayed on the view (Resolvers are be used)
List view with links to a view that shows individual records is created
The individual record view allows the ability to edit that information in a form (Reactive Forms are used) and send it back to an endpoint with some basic client validation (the server doesn't allow PUT requests therefore the data can't be saved).
The Angular CLI is used.