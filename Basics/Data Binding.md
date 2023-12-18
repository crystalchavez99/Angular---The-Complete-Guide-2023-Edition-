# The Basics of Angular Part 2

## What is Data Binding?

* It's time to output the data from our TS code into HTML view
* Data binding can be translated as communication between TS code of component,
logic, and the template
* Might have some result from TS code because of calculation or fetch from server, you may want to dispaly to user and only thing they will see is the template
* So we need some kind of communication between pieces
* Data binding comes into play where we want output data from our TS code into HTML code
  * We use string interpolation for this or property binding
    * Syntax: {{variable}} for SI or [property] = "variable"
* We can say for example a user clicks a button, think of the user clicking on the template triggers something in the code which is Event Binding
  * Syntax: `(event) ="expression"`
* There are other forms of data binding
* Two way data binding is where we able to react events and output at the same time
  * Syntax: `[[ngModel]] = "data"`
