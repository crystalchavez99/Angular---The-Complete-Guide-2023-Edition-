# The Basics of Angular

## How Angular App Loads and Starts
* Content we see in our page can be changed from the component HTML file in app folder
  * We can output text etc.. and it will automatically load
* Now how does it know? The index.html is the only file served in the server it is our SPA
  * If we look at it it's a normal html file
  * However we have a app-root element with loading in between
  * It seems to have changed, app-root is not a default HTML element instead it is one of our own components
* In our component.TS file, in the component decorator it has a selector property assigning a string value of app-name
  * Same text as the index.html which is the info needed to replace the part with the template of the component, the template is the component.HTML file
* Now how does it trigger and run over the body?
  * In the final index.html in the browser, we can see script imports at the bottom which is injected by the CLI automatically
  * When ng serve rebuilds the project, it will build script bundles of JS for us (contains our own code as well)
* The main.ts file is the first code to get executed
  * It has one line `platformBrowserDynamic().bootstrapModule(AppModule)`
  * This bootstraps starts our application by passing AppModule into it
  * Now if we look at App.Module it contains the bootstrap key whihc lists all components known to Angular to analyze our index.html
  * Angular gets started, bootstraps an App which is our AppComponent reads the setup

## Components are Important
* Components are a key feature
* It builds our whole app by composing it from couple of components
* We start with app component or root by default when created
  * It holds our entire app, nest our components to it
* Core idea is to build components

## Creating a new component
