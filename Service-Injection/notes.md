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
