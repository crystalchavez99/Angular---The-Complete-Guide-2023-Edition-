# Udemy: Complete Guide Angular

## What is Angular?
* Angular is a JS framework that allows you to create reactive single page applications
  * An app with a page that never changes, only one HTML file with a bunch of TS/JS code is rendering a reactive experience

## Understanding Angular Versioning
* AngularJS (Angular 1) was the first version of Angular
  * It wasn't futureproof
* They released Angular 2 in 2016, a totally different framework and is now commonly used where Angular 1 is abandon
* Angular 3 was skipped and other versions have been made
* All these versions are the same framework except 1, is still referred as Angular

## Project Setup and First App
* We will use Angular CLI to create an Angular App
* [Angular](https://angular.io/cli)

### Install CLI
* `npm install -g @angular/cli`
* To install and use CLI, make sure we have Node.js
* Once it is installed in our terminal we can now get started on working on Angular projects

### Create Project
* Create new projects by `ng new <name of project>`, name should not contain blanks but should be seperated by underscores
  * There are flags you can add when creating the project, there are three important ones
  * `--no-strict` disable strict mode and make it easier later
  * `--standalone false` another way of building angular projects, we will not use this mode by adding false right after
  * `--routing flase` routing is another feature but dont need it to get started so disabled for now
* Wizard will pop up to ask questions, press ENTER to get through
* To start a development server to preview what you working type `ng serve`
  * It opens up a development server, will only run as long as the nodemon is on

## Editing First App
* All the folders and files in the Angular app is what the CLI created for us, our entire project
* Most are just doing some configuration work and don't need to touch them
* `Package.json` where you can see all the dependencies of your project like Angular version and third parties, etc.
* Main focus of editing code is in the `src` FOLDER and `app` FOLDER
* We start with the component.html file, it shows our display view
* If we change anything in that file, it will update and reflect the re-render
* `{{title}}`, this shows we work on statix and dynamic in HTML code in what we want to output

### App Folder
* Like other folders we will create later on, it works with the component
* It always has a template HTML code, some css, and a typescript file
* The TS file is the definition of the component, will be converted to KS
  * It has a property that is shown in our html file, if we change the value of that property in the TS file it shows what we changed into our HTML view
  * This is data binding action, output dynamic content

### Page Source
* We can see script imports at the bottom of our Angular code framework
* Head tag and a strange app-root
  * Now if we look back at our TS file in the Component decorator we have a property called selector with a value of `app-root`, it's basically our own HTML tag we created
* The main HTML is `index.html`,Angular will load it

### Other actions
* If we want to enter something in input for example and have it change the value to display, do this with a directive tool called the NgModel and apply to our element
  * Ex: <input type="text" [(ngModel)]="name">
        <p>{{name}}</p>
    * What it does is tells Angular to listen to anything you enter here and store in the property passed and the other hand output the value of the model in this input
* If nothing displays check console it will tell you an error, somehow Angular doesnt understand ngModels.
  * It is built in but it is split up into multiple modules, we need to add certain features into the app
  * To add a feature we go into the Module.TS file where we tell Angular which pieces belong to our app and add it to imports
    * Tells Angular we want to import some features

## Course Structure [NOT ANGULAR NOTE RELATED]
* Basics
  * Components
  * Data Binding
  * How does it all work?
  * How are they connected?
* Components and Data Binding
  * App is made of components
  * data binding is output data in dom
* Directives
  * NgModel is a directive and other more, how to build our own
* Servies and Dependecny Injection
  * Have different pieces in app to communication and centralize
  * Manage state of app
* Routing
  * All in one page but different urls
* Observables
  * Work with async code
* Forms
  * Handling forms
* Pipes
  * Transform output on runtime
* HTTP
  * Store database and reach out to web server
  * Angular cant connect to database
* Authentication
* Optimization & NgModules
  * Manage different Modules
* Deploy
  * How to deploy
* Optional: Animations and Testing
