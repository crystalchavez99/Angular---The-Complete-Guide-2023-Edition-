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

## Assign Alias to Custom Properties and Events
* There's more to configure our properties such as we binding with @Input or @Output
* May not want to use the same property outside of the component as you use inside it
* You can assign an alias, which can be passed in the @Input with the property you want to have it outside
  * But once you give it an alias it has to be the alias whe nbinding outside the component

## Bind to Custom Events
* We will have a component where something changes and want to inform our parent component (the component that has another component implemented inside it)
  * Instead of passing down, wer're passing up
* For example: the app component implements a cockpit component which, the child has two buttons that can change something where a new server or new blueprint is created
  * It will have methods where it will now refer new instances which we to pass to the parent
* In the child component calling at the parent html file we could listen to the change (the selector we template inside the parent ) PARENT FILE
  * Event doesn't exist by default, we listen some event (any name we want the event to be) and it will execute what we assign to
  * Syntax: <tag (event)="method($event)>
    * the $event catches the data
* We get the data based on what we bind event to where it will call the method and the event should give us the data to expect and catch with $event
* Now the child component needs to emit the events as it will wait for events that we binded CHILD FILE
  * Create properties named after the events
    * Have to make are events we can emit
    * They will be assigned a value `new Event Emitter<>` which is a generic type
      * In between the arrows we define the type of event data we are to emit
* Event Emitter is an object in Angular that allows us to emit our own events
* Now that the properties we created have turned into Event Emitters we can now call on them and can emit the method
  * Inside the methods we emit the new event and pass in the object we want to create or pass
  * That is how we emit our own events, being able to pass the data
* However we did add @Input to make property bindable from outside so we need add something to the events to make it listenable from outside
  * Another decorator @Output as we're not receiving data into the component but passing outside the component

## Custom Property and Event Binding Summary
* Component communication is a key feature
* @Input gives it the ability to make properties bindables from outside the parent component using this component
* @Ouput allows parent components using this component to listen to your own events created with Event Emitter
* Issue is to talk between 2 components stting next to each is complicated emit a ment in one component, change in parent and then pass down to child
  * They can growe complex
* Not practical to chain outputs and inputs

## Understand View Encapsulation
* Angular enforces style encapsulation
* It can be overwritten though
  * Add `encapsulation` property in the component decorator and as a value `ViewEncapsulation`
  * ViewEncapsulation has three modes:
    * Emulate is default
    * None: we don't see strange attributes being added to the elements
      * This will not use viewencapsulation but other components will still use it
    * Native: uses ShadowDom tech, gives you same result as before with emulated but only in browsers supported
      * Most cases choose emulated

## Use Local Reference in Templates
* There will be cases where we don't want to use two way binding
* Other option we would have to place is a local reference on that element
  * Can be placed on any HTML element so not only input, Syntax: `#name`
  * It will reference to this element
    * All its properties
* We can pass it to the method of event binding etc,,
  * You can place anywhere in template BUT ONLY TEMPLATE NOT IN TS CODE
  * just make sure that if we do use reference in a method just make sure the function in the TS file will accept a parameter
* Local reference is anice feature to get access in some elements and use directly in that template like outputting ot passing it on
  * Now we can use it to create instances

## @ViewChild() in Angular 8+
* In Angular 8+, the @ViewChild() syntax is changed slightly
  * Old Syntax:
  ```
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  ```
  * New Syntax:
  ```
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  ```

## Access to Template & Dom with @ViewChild
* Another way to access local ref or element direct from within TS Code
* We learned to pass reference inside a method but sometimes we want access before we call a method
* There is a decorator we can use @ViewChild('selector of element')
  * Not CSS selector, name of local reference
  * Syntax: @ViewChild('reference name') = reference name
  * It gives Element Ref, but if you want the underlying element add `.nativeElement` right after and then .value for the value
* We now have passed directly from the template via the method being element itself
* So now without two way binding local references pass to methods or fetched through View Child


## Projecting Content into Components with ng-content
* There are more ways to pass data around
* Last way for now as we may have times with complex HTML and want to pass into a component from outside and dont wanna set inisde
* Any content placed between the tags of own component is lost by default
  * Simply removed from the dom
* Can be changed by a directive, the directive is the ngContent
  * Syntax: <ng-content></ng-content>
  * Serves as a hook can place in component to makr place for Angular where it should any content it finds between them

## Component LifeCycle
* `ngOnIinit()` is a lifecycle hook and Aungular supports it
* If a new component is created it will instant a new version and add to DOM
  * Angular goes through different phases in the process, hook these phases and execute code
  * First Phase: Hook into ngOnChanges (Called after bound input property changes)
    * Executed mulitple times right at the start when a new comp is created and is always called when one of bind input properties changed ex: @Input
  * Second Phase: ngOnInit (gets executed once compo is initialized)
    * Angular finished the basic initial so props can be access and object created
    * Will run after the constructor
  * Third Phase: ngDoCheck ( called during every change detection run)
    * Runs multiple times as it runs every change that it detectes
    * Angular determins when changes on template or component
  * Fourth: ngAfterContentInit (called after ng-content has been project into view)
  * Fifth: ngAfterContentCheck (called every time projected content has been checked)
  * Sixth: ngAfterViewInit (called after component and children view has been init)
  * Seventh: ngAfterViewChecked (called every time viewss have been checked)
