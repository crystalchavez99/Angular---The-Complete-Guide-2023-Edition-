# Using Services and Dependency Injections

* We have components with some methods, some cases they are repeating and duplicating
  * It's a use case for a service
* Service is another piece in Angular, another class to add to act as a central repo.
* As a central unit we can store code

## Create A Service (example logging)
* Choose fitting place to create Service
  * Syntax: `ng g s name`
* A service is a normal Typescript class it has no decorators
* Simple create the methods in the class so the code is centralized
  * Now we can use this in our components
* Import Service in the corresponding Components
  * Thus you can create instance of service
  * Ex: `const service = new ServiceClassName()`

## Inject Service into Components
* Inform Angular we require instance of service
* Add constructor to class where we want to use our service
```
constructor(private service: Service)
```
* This will tell Angular we need instance of this service
* Now we need to provide a service
  * meaning how to create it
  * add one extra property at the component decorator
  * the `providers` array passe in the service
* When analyze it should able to give service, setup, and bind component

## Now to store and manage data with Service
* Create Service
* Any data you have in app would move to the new service
* Now create logic methods that can be used over the components
* We can inject our service to the components we want
  * Pass into the constructor and import the service and pass as provider in providers
  * Assign property to equal a start value then in ngOnInit reassign to the service property
  * If you are emitting events you can remove it and inject the service

## Understand Hiearchical Injector
* Angular dependence inject is a hierachical injector
  * If we provide a service in one components, it knows how to create for that component and children
* Highest possible level is App
  * If we provide in the App Module then its in the whole app
  * If we provide in App Component its available fro all components but not for other services
    * If so remove it from providers in rest of the components
  * Any other component is available for compo and children
