# Components and Databinding Deep Dive

## Splitting Apps into Components

* When we create lots of piece of code into the one app component, we want to split it up
  * Not ideal to have all logic in one component
  * Better to split to reuse
* Remember to create new component `ng g c (name)`
* Now once we create the components, the code we want to take from app can be placed to the corresponding components created
  * Remember if you move the code of the html, we have to move the methods were calling as well
  * Likewise with some properties
* There will be more to fix when splitting up an application
  * Most cases is the couple of properties being unknown
  * Need to inform app component that its child has changed and need to get data from cockpit and new server eleement
    * So need to pass data between components

## Property and Event Binding Overview
* Issue is passing data between components
* We need the exact behavior from property and event binding within the components
  * Need to send data into a component or receive data or event
* Can use property and event binding not only on HTML elements, properties and events
  * Can use on directives and own components, bind custome props and events

## Binding to Custom Properties
* We can use property binding to bind our own properties, properties components
* Now if a component HTML file is trying to access a single element we must create the property in the component.TS file
* Now if we wanted to access a property from the component outside, we want to bind just like we bind disabled
  * Syntax: [name of property in the component]=data to pass
* An error will error saying it can't bind due to unknown property into the component we are passing it to
  * Reason by default all props of components are only accessible from the original component
  * We have to be explicit about properties you want to expose
* To allow parent components to be able to bind to this property, need to add something to the property
  * Need to add a decorator @Input and execute it
* We are able to expose this property to the app, any parent component hosting the component is now able to bind to property
* We can succesfully pass properties down to the component and bind to property in the component
