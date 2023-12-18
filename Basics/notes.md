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

## Understand Role of AppModule and Component Declaration
* To use our created component we need to change something of our app module
* What is the app module?
  * Users use modules to bundle different pices of app into a package
* The App Module bundles the functionalities of our app and gives info which features the app should have and use
* It is just a empty class and we transform it into a Module by adding the `@NgModule` decorator
* It has four properties we set up on the object which we pass in the NGModule
  * Declarations, imports, providers, and bootstrap
  * We seen bootstrap tell Angular to see which component to be aware of when the app starts
* Now we still need to register our component in the module here so Angular knows it exists
* We register new components in the `declarations` array, by default the AppComponent is registered  it is part of the app
  * We would add our components we created to the `declarations`, thought adding it there is not enough as Angular knows its part of app TS doesn't know where to find it
  * We need to import our component at the top, we can omit .ts
  * We can finally use our component now

## Working with Standalone Components
* Components can be built in a different way using Standalone
* Standalone Components is that you can build Angular components & apps without (or with less) @NgModules - i.e., Standalone Components allow you to write less (boilerplate) code.
* You build a standalone component by adding the standalone: true property/value pair to the @Component decorator
```Typescript
@Component({
  standalone: true,
  selector: 'app-cmp',
  template: '<h1>I work standalone!</h1>'
})
export class SomeComponent {}
```

## Using Custom Components
* Now that we registered our component, let's use it
* We can't add it to index, instead we go to the app.component.HTML where we want to add it
  * We can add the selector name we gave as an HTML element <app-name>
* Based on the examples, app-server is our own selector we created and should now recompile where we see the component there
* That's how we use our component then with their selector after adding to app module and displaying on the html file

## Create components with CLI & Nesting Components
* We learnt how to use by hand, now we use the alternative by the CLI command
* To help apply this, we're going to aply this in a nest component where we can have a list to store detail components
* To generate a component: `ng generate` this command allows us to generate some elements supported by Angular
  * `ng generate component <name>` create a new component or `ng g c (name)`
  * This will give us the new folder and the same files we have for app component
* Now that we created it with the CLI, what if we wanted to put one of the previous components we made into the newly made one
  * Overwrite default text and put in the component selector
* We need to update app mpoule, CLI should do this automatically
  * Import and declaration is done for us alreaedy
* With the created component representing as the parent to nest our children components inside we go to the component.ts to check the selector
* We can go to the `app.component.html` and update the selector to use the new one instead of the old
  * Looks the same now except we nested the same component twice showing two of them now

## Working with Component Templates
* So far we only used the external template file and no styling yet
* We can also use inline template meaning HTML code in the TS code
* We go to the component, and right now we have it point to an HTML
  * We can change the templateURL to template but one must be present at all times
```Typescript
    templateUrl: './servers.component.HTML'
    // or
    template: '<app-server></app-server><app-server></app-server>'
```
  * Can not wrap line but looks like nothing has changed
  * If you want to wrap use back ticks instead of single quotation marks
* External file is preferred

## Component Styles
* We can use Bootstrap framework or anything, but we also have the properties for styleUrl for css files
* We can style in the component.css file using CSS code, we can overwite while using Bootstrap
* Just like template internal or external, same can be done with CSS
```Typescript
    styleUrl: ['./servers.component.css']
    // or
    styles: 'h3{color: darkblue;}'
```
* External file is preferred
