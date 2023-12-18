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
* We start with the app and root
* It is listed in the App Module in the bootstrap array telling it is special and should bootrap the app being the root, so other components we create will not be added to index.html
  * Selectors will not be added, it will be added to the app.html
* To create a new component Angular CLI gives us the command `ng generate component name` but let's learn manually first
  * Have a folder name equal your component name that way the related content will go inside that folder, make sure the folders still remain inside app folder
  * Now to add the component, the naming convention is `name.component.ts`
* Component is a class, simple TS class which Angular is able to instantiate it to create objects based on the blueprint we set up
* To get started we export the class so it can be used outside of this file
* Add class, name it with the same naming convention `NameComponent` or `NameDescription`
  * Right now its a normal class
* We need to tell Angular it is going to be a Component, not just a class
  * We add the special decorator, decorators allow to enhance our classes
  * The Component Decoartor: `@Component`
  * TS doesn't know from the start so we do have to import it from the Angular Core
    * Ex: `import {Component} from '@angular/core'`
  * It is now known to TS and will be compiled to JS later
* Now with that setup we need to configure because without it Angular doesn't know anything yet to do with it
  * We will pass in a object to configure it to store important info as metadata for the class
  * It will tell Angular what to do with this class
  * The `selector` property is the HTML tag to be able to use later in other templates
    * Should be a string with syntax: `app-name` app is the prefix followed by name of component
  * With the selector set up we need the template that will reflect the HTML tag
    * We create the file in the same folder with the syntax `name.component.HTML`
    * This will hold the template code of the component, we can add any content
  * The `templateURL` I can now point to the HTML file where to find: `./name.component.HTML`
* With this we created our first component
