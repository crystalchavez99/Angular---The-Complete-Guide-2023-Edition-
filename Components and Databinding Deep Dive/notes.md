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
* 
