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
