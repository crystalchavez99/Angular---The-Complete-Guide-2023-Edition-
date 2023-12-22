# Routing
* We want to have several pages
* Angular has its own router to allow change url in the url bar while still in one page

## Why we need routers?
* We want to split multiple pages, routers need to know which route will render
```
Home
Servers
    View and Edit Servers
    A Service is used to load and update Servers
Users
    View Users
```

## Setup and Load Routes
* We would configure in App Module
* Above NgModule, create a constant to hold all routes
  * Ex: `const appRoutes: Routes = []`;
* It holds an array for all routes
  * Each route is a JS Object
* Each route needs a path property
  * `{path: 'users'}`
* Now we have a path but what does it do? We attach component property to load the page
  * `{path: 'users', component: UsersComponent}`
* Once we create the constant now we just need to register to the App
  * Add RouterModule to `imports` property and we can invoke the method to call for Root to register routes in main app as its imported
    * `RouterModule.forRoot(appRoutes)`
* We have to place the component where to render the route, in app component html remove selectors of components and only have router-outlet
  * Syntax: `<router-outlet></router-outlet>`
