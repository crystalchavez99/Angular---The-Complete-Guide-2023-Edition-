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

## Propery Binding
* Now let's think we want to add new servers to the list, so we will need a button add server
* We might want to add a new property in the class to allow new creation of server with value of false, so they aren't able to interact
  * Now the moment we are able to change to true, we want to reflect the dynamic functionality where it can allow users to take action with the button
* There is we bind to our HTML code where after 2 seconds it will allow the user to use the button to create a new server
* To make it functionally dynamic we bind it by enclosing in square brackets
  * Ex: [disabled] = "function"
* We using Property Binding as it makes it easier to interact with DOM to change things in runtime which that is in place binding
* There are binding HTML elements

## String Interpolation vs Data Binding
* In the case to output current value of allow new server then string interpolation would be the use
* Now we can easily use property binding instead of string inter by simply binding the property to the element such as innerText to equal variable
  * Ex: <p [innerText]="allowNewServer"></p>
* Wich one should we use?
  * If you want to output something just print, then string inter
  * If you want change some property of an HTML element or directive or component, then use property binding
* Don't mix the two, if you do it will break the app

## Event Binding
* We can create a replication of the component through the action of an element or remove the output to be replaced with from that action
* We can create the property of it to reflect on our HTML and create a method that will get triggered to do something
* Once we create the method or function to get triggered for an error, we want to start taking event binding into play
  * We're going to apply an event listner on the element, like a button to execute our function
    * Syntax: `(event name)="function()"`
    * This method will get executed whenever the event is occurred
* Event binding works like that, we use parentheses of the event name and equal it with the code we want to execute with quotation marks
