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
