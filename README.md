# TestTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Please complete this exercise and either provide us a zip file of the project or post it on a public repository such as github.

Use Angular4.
Set up the application to use router to provide 3 routes (list/view/edit).
Have each route use a dedicated component to bind data to the view file. 
Call a service to retrieve and pass back data from a REST endpoint. Use these sample endpoints:
1) http://jsonplaceholder.typicode.com/users - list of users.
2) http://jsonplaceholder.typicode.com/users/1 - specific user’s data
Display data from the endpoint on the view (Resolves should be used)
Create a list view with links to a view that shows individual records
The individual record view should allow the ability to edit that information in a form(Reactive Forms are preferable) and send it back to an endpoint with some basic client validation.
Feel free to use Angular CLI.