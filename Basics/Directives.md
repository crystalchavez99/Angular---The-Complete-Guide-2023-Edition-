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
    * Syntax Ex: <p *ngIf="serverCreated"></p>
* ngIf has to be any expression that returns true or false decided whether the element is shown or not
  * could also call method that returns true or false not just expression

## Enhancing ngIf with Else Condition
* There is an alternative to the ngIf condition but we also have a "Else Condition"
  * We can add an else block to show alternative
* Syntax Ex: <ng-template #noServer><p>No Serever Created</p></ng-template>
  * So to display else statement, use the else template binding
    * It points to an <ng-template  #elementname> with labeled with the element you want to be associated by `#elementname`
* is typically placed right after ngIf for readability.
  * Once we create the binding apply to the statement of the if expression
 ```
<p *ngIf="serverCreated; else noServer">Server was created, server name is {{serverName}}</p>
<ng-template #noServer>
    <p>No server was created!</p>
</ng-template>
```
