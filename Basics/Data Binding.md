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
  * Ex: `<p [innerText]="allowNewServer"></p>`
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

## Passing and Using Data with Event Binding
* We will have a input or some form control that we may want user to input data, where we can apply an event listener to execute a function
* Now once the user inputs data, we want to output the user entered from the value of the form
  * Do this by passing dollar sign event here `$event` in the function, its a reserved variable name to use in the template when event binding
  * The quotation marks contain the dollar sign event will be the data emitted with that event
* So the input and click are default events which will ship the data when fired, the click will gives us an object and input gives us some data about the event
* Now we capture the data with the dollar sign event passed as the argument to the method we're executing
* We can apply anything we want from the value we received
  * To access value from event, `event.target.value`
  * Can explicitiy inform by adding HTMLInputElement tag in the front `(<HTMLInputElement>event.target).value;`

## Two Way Data Binding
* We can combine both event and property binding for two way binding so instead of just event binding
* We can replace it with the combination of the syntaxes: `[(ngModel)]`="variable"
  * We do have to use a special directive called ngModel
  * Make sure it is imported in the App Module
* It will do the following: trigger on input event, update value of the variable in our component
  * Since its two way, it will update the value of the element if we change somewhere else

## Combining all Forms of Data Binding
* You can apply all bindings in the same component, they work in general and communicate with one another
