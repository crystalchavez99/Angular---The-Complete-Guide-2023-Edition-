# Directives Deep Dive

## Understanding Directives
* We got attribute and structural directives.
    * Attribute directives are called like this because they sit on elements, Just like attributes,
    * Structural directives basically do the same, but they also change the structure of the DOM around this element.
* Attribute Directives
  * Resemble HTML attribute like event binding
  * Only affect the element added to
* Structural Directives
  * Looks like a HTML attribute but with a * in front
  * Affects whole area in the DOM elements get added or removed

## Create Basic Attribute Directive
* We can build a directive which can be aimed towards attribute or structural
* Create a folder to place directives
  * Create a file for directive with syntax: `name.directive.ts`
* We had component files, now we have a element of directive
* To make the class directive we use the Directive Decorator
  * Syntax: `@Directive()`
  * Configurations:
    * selector: needs a seelctor to place directives in template to attach to elements; value = `appName`
      * To make it an attribrute wrap the value in square brackets
* To give directive access to an element by injecting
* contructor must be created with an argument for the injection when created
  * argument is reference to element `private elementRef: ElementRef` has to be that type
  * that will give us access to the element and do something with it
* We want it applied on instance creation so we use the OnInit lifecycke and add ngOnInit
  * Inside there we would apply the action of the directive
```
ngOnInit(){
  this.elementRef.nativeElement.etc...
}
```
* Now we have to inform Angular  we have a new directive and place in the App Module withint the declarations
* Angular knows we have it and can place the directive towards any HTML tag
  * <p directivename></p>
* Not best practice

## Use Renderer to build better
* Angular is able to render templates without a dom and properties might not be available
* Create Directive with CLI: `ng g d name`
* May create central shared folder for directives
* Time to inject better tool
* Within the directive file, in the class pass a argument of Renderer2 as the argument in the constructor
  * Syntax: `constructor(private renderer: Renderer2)`
* So we still want to apply the action of the directive in ngOnInit
  * It will be different from the ElementRef
```
ngOnInit(){
  this.renderer.setStyle()
}
```
  * It has helper methods to work with the DOM
* We need to have the element to set the style, we can inject the ElementRef
  * `constructor(private elRef: ElementRef, private renderer: Renderer2)`
  * `this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue)`;
  * Recommend look at docs to see what you can do with renderer
* Now we have to inform Angular  we have a new directive and place in the App Module withint the declarations
* Angular knows we have it and can place the directive towards any HTML tag
  * <p directivename></p>

## Use HostListener to Listen to Host Events
* We may want directives to be applied when its listening for any host events such as hovering over text
* Quick easy way is to add a decorator called `@HostListener` and add a method want to execute
  * Syntax: `@HostListener('argument name') function() {}`
  * It takes an argument name as input one of the vents supported by
  * The function next to it can receive event data as well
* Host Listener is just a way of listen to events on that element

## Use HostBinder to bind host properties
* `@HostBinding` marks a DOM property or an element class, style or attribute as a host-binding property and supplies configuration metadata.
* We need to bind to some property ex: background color
  * Ex:  `@HostBinding() backgroundColor: string;`
* We pass a string defining property of element we want to bind and with a init value;
  * Ex: `@HostBinding('style.backgroundColor) backgroundColor: string;`
  * We tell Angular on the element it sits on access the style property or whichever we pass in to and access the subproperty and set to whatever we have the property variable.
* Once we created the HostBinding, we can simply add the functioanlity of the HostListeners to not rely on renderer and apply the code directly there without helper methods
* These are the ways we can create and apply directives

## Bind to Directive Properties

* Just like how we bind events and properties

## Build a structural Directive

* Create new directive with CLI
* Add Input Decorator to class, we will use property binding with square brackets since Angular was transform for us
* Bind the decorator after with name we want, and implement setter with set keyword before name
  * `@Input() setuseless`
  * This will turn into a method as it gets executed whenever property changes outside of this directive
    * Will need a value passed in and can now apply the code we want inside
```
@Input() setuseless(val){

}
```
* Now we can get it to access template and place in document to render
  * Inject by adding templateRef to constructor just like elementRef to give us access it is on
```
constructor(private templateRef: TemplateRef<any>){

}
```
* We need the view container and the type to refer is ViewContainerRef wher ewe pass to the constructor
  * Marks the place where put the directive in the document
* So we createEmbeddedView to create a view in the container whenever directive says so
* If we want to clear view use .clear
* To pass to element same syntax: `*directive`
