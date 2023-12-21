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
