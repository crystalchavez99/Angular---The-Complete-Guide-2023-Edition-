# The Basics of Angular Part 3

## Understanding Directives

* Directives are instructions in the DOM
  * We use it already without know it
* Components are kind of insutrctions in the DOM
  * They are directives but with a template
* Typically add directives with a attribute selector but technically select of directive can be configured just like the selector of a component

## Using ngIf to Output Data Conditionally

* We can conditionally show content in HTML and for that to happen we can use a directive shipping with Angular, the `ngIf` directive
* Add directive towards the element by using atrtibute selector
  * Example: <p *ngIf></p>
  * It is important to add the star in the front because it is a structural directive, meaning it changes the structure of our dom (either it adds or not)
  * Without it will not work
  * After the *ngIf we set up the condition here between quotation marks
    * Ex: <p *ngIf="serverCreated"></p>
* ngIf has to be any expression that returns true or false decided whether the element is shown or not
  * could also call method that returns true or false not just expression
