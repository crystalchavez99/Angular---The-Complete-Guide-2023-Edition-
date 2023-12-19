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

## Angular 17: Alternative "if" Syntax
* Instead of using *ngIf, you can use a built-in @if template control flow statement
```
@if (someCondition) {
  <p>Only visible if 'someCondition' is true</p>
}
```

## Style wiht ngStyle
* There's going to times you want to style certain components, we use the directive ngStyle
  * ngStyle is not used often and we use property binding on this directive
    * bracket is not part of ngStyle we just want to apply apply some property on this directive
  * Expects to get a JS Object so we define key value paris of the style name and value
    * The style key names have to be camelCase or wrap them in single quotation marks for the exact syntax of the style property
* The advantage of ngStyle is it updates dynamically so after a render it changes
* The value is an expression to be evaluated. The resulting non-null value, expressed in the given unit, is assigned to the given style property.
  * attribute directive added like a attribute and is using property binding to configure it
  * Syntax: <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
    * or <some-element [ngStyle]="objExp">...</some-element>
      * Can apply object key value pairs like in CSS


## Apply CSS Class Dynamically with ngClass
* Related to ngStyle is ngClass, where ngStyle allowed us to change style itself ngClass allows us to dynamically add or remove css classes
* Super similar to ngStyle syntax

## Outputting Lists with ngFor
* We can change a list to be dynamic with the `ngFor` directive
* We place the directive with a start because this is structural and apply to the element you want to dynamically list
  * Syntax: <li *ngFor="let item of items;">...</li>
* We use the property we defined in what we want to loop through, and assign individual element representation to dynicamically display
  * Content is still static until we pass data to the component

## Angular 17: Alternative "for" Syntax
* Instead of using *ngFor, you can use a built-in @for template control flow statement.
```
@for (item of items; track item.id) {
  <li>{{ item.title }}</li>
}
```
* The track item.id part is required when using this new syntax - it ensures that Angular can efficiently track and re-render (if needed) the list items.

## Using index in ngFor
* Can extract the current index of the current iteration
  * With let, bind to a variable name like i and equal it to index which is a reserved epxression
  * It will give you the access to the index of the current iteration and update along the way
  * Syntax:<li *ngFor="let item of items; i = index;"></li>
