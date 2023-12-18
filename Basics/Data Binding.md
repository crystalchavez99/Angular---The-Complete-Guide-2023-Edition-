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

## String Interpolation
* You don't want to hard code the output, it's more realistic that our component contains info about a specific instance
* If we want to output specific properties from the instance, we would have dyanimc fields for it and derive from the TS code, it all outputs a string
  * We would assign the property or variables in the component class
    * Example: serverId = 10;
  * Then we would output these properties in the template
    * Ex: <p>Server with ID {{serverId}} is {{serverStatus}}</p>
    * Which string interpolation comes into play and returns a string
* Only restriction is not being able to write multi-line expressions here, so not if or for control structures
  * Can use ternary expression though
* Alongside properties, we can also data bind functions with string interpolation
  * Ex: {{function()}}
