

# ng commands

## Create new angular project

Creates a new Angular project.

>_ng new project \<projectname>_

## Start development server

Start Angular live devolopment server.

>_ng serve_

## ng generate component

Create a full component in src folder
>_ng generate component \<name>_

oder

>_ng g c \<name>_

# npm commands


## Install bootstrap

Install newest version of bootstrap

>_npm install --save bootstrap_

## Fix severity vulnerabilities

Fix severity vulnerabilities in project.

>_npm audit fix_

# manual project changes

## add bootstrap to new project

Add "./node_modules/bootstrap/dist/css/bootstrap.min.css" line in .angular-cli.json file in app.styles array.

>see example 1.1

# angular

## 1 Getting started

### Setup Development Environment

    1. Get newest NodeJs from nodejs.org 
    2. run _npm install -g npm_
    3. run _npm uninstall -g angular/cli_
    4. run _npm cache clean_
    5. run _npm install -g @angular/cli_

## 2 Basics

### Component

### Databinding: ngModel

>_\<input type="text" [(ngModel)]="name">_

It accepts a domain model as an optional Input. If you have a one-way binding to ngModel with [] syntax, changing the value of the domain model in the component class sets the value in the view. If you have a two-way binding with [()] syntax (also known as 'banana-box syntax'), the value in the UI always syncs back to the domain model in your class.

### Databinding: string interpolation

One way databinding from model to view

>_{{propertyName}}_

### Directive: ngIf

>_\<div *ngIf="condition">Content to render when condition is true.\</div>_

### Directive: ngFor

Example 1

>_\<app-server *ngFor="let server of servers">\</app-server>_

Example 2
>\<div
>>*ngFor="let logItem of log; let i = index"\
>>[ngStyle]="{backgroundColor: i >= 4 ? 'blue' : 'transparent'}"\
>>[ngClass]="{'white-text': i >= 4}"\>\
>>{{ logItem }}\
>\</div>

### Directive: ngClass

>\<p
>>[ngClass]="{online: serverStatus === 'online'}">
>>{{ 'Server' }} with ID {{ serverId }} is {{ getServerStatus() }}
>\</p>

### Directive: ngStyle

>\<p
>>[ngStyle]="{backgroundColor: getColor()}"
>>{{ 'Server' }} with ID {{ serverId }} is {{ getServerStatus() }}
>\</p>

## 3 Course Project Basics

## 4 Debugging

### Use Chrome Debugging Tools

Open Chrome debugging tools after by pressing F12.

### Use SourceMaps

Angular CLI adds SourceMaps to Javascript files when it sets up bundles for the browser to get an reference between JavaScript files and TypeScript files. Only available in development mode. They are not provided in production
mode.

Access TypeScript files:
>Chrome-> F12 -> Sources -> top -> webpack -> . -> src -> app

Here you find your TypeScript file like in your dev environment.

### Use Augury

Augury is a chrome extension to debbug your Angular app. 
You can see your Router, Components and Models. Helps you 
understand and analyse your Angular app at runtime.

## 5 Databinding: Components & Databinding Deep Dive

### Component life cycle

| Event                   | Description
| ------------------------|-------------------------------------------------------------------------------
| ngOnChanges             | Called after a bound input property changes
| ngOnInit                | Called once the component is initialized
| ngDoCheck               | Called during every change detection run
| ngAfterContentInit      | Called after content (ng-content) has been projected into view
| ngAfterContentChecked   | Called every time the projected content has been checked
| ngAfterViewInit         | Called after the component’s view (and child views) has been initialized
| ngAfterViewChecked      | Called every time the view (and child views) have been checked
| ngOnDestroy             | Called once the component is about to be destroyed

### @Input

Decorator that marks a class field as an input property and supplies configuration metadata. The input property is bound to a DOM property in the template. During change detection, Angular automatically updates the data property with the DOM property's value.

### @Output()

Decorator that marks a class field as an output property and supplies configuration metadata. The DOM property bound to the output property is automatically updated during change detection.

### EventEmitter\<type>

Use in components with the @Output directive to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance.

>@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();

### @ViewChild

Property decorator that configures a view query. The change detector looks for the first element or the directive matching the selector in the view DOM. If the view DOM changes, and a new child matches the selector, the property is updated.

### @ContentChild

Use to get the first element or the directive matching the selector from the content DOM. If the content DOM changes, and a new child matches the selector, the property will be updated.

Content queries are set before the ngAfterContentInit callback is called.

Does not retrieve elements or directives that are in other components' templates, since a component's template is always a black box to its ancestors.

## 6 Databinding: Course Project - Components & Databinding

## 7 Directives Deep Dive

## 8 Course Project - Directives

## 9 Using Services & Dependency Injection

### @Injectable

Decorator that marks a class as available to be provided and injected as a dependency.

## 10 Course Project - Services & Dependency Injection

## 11 Changing Pages with Routing

## 12 Course Project - Routing

## 13 Understanding Observables

## 14 Course Project Observables

## 15 Handling Forms in Angular Apps

## 16 Course Project - Forms

## 17 Using Pipes to Transform Output

### pipe operator like in unix

{{ server.instanceType | uppercase }}

### Chaining pipes

You can add the output from one pipe to the input to another pipe.
The order is from left to right.

{{ server.started | date:'fullDate' | uppercase }}

### convert a text to uppercase

{{ server.instanceType | uppercase }}

### convert a datetime

{{ server.started | date:'fullDate' | uppercase }}

Sunday, August 8, 1920

If a pipe allows parameters it will be added an seperated by :

### Build in pipes

Build in pipes are documented at angular.io website.
Under documentation -> API reference and filter for pipes

### Create a new pipe with CLI

> ng generate pipe \<name of pipe>

or

> ng g p \<name of pipe>

### Pure pipe

>@pipe\
>{  
>>name: nameOfPipe,\
>>pure: false; //default value is true  
>} 


When true, the pipe is pure, meaning that the transform() method is invoked only when its input arguments change. Pipes are pure by default.

If the pipe has internal state (that is, the result depends on state other than its arguments), set pure to false. In this case, the pipe is invoked on each change-detection cycle, even if the arguments have not changed.

### Create your own pipe

see folder "17 - pipes-final"

### async pipe

Use async pipe on promise and oberservables.

## 18 Making Http Requests

Call backend by using http calls.
Used to get data from a server or store data at a server.

### HTTP Verbs

    -POST
    -GET
    -PUT
    -OPTION
    Always call by the browser before a POST is called.
    -DELETE

### Create an Firebase backend

    -go to firebase.google.com
    -login with your google account
    -go to console at firebase.google.com
    -add a new firebase project
    -go to database and create a new realtime database
    -after creation you see a URL to send HTTP request to the database

### Setup a HTTP request

    -goto app.module.ts
    -Add HttpClientModule from @angular/common/http
    -go to your component and inject HttpClient from @angular/common/http
    -create post 

### Sending a post request to firebase


## 19 Course Project - Http

## 20 Authentication & Route Protection in Angular

## 21 Dynamic Components

## 22 Angular Modules & Optimizing Angular Apps

## 23 Deploying an Angular App

## 24 Bonus: Working with ngRx in our Project

## 25 Bonus: Angular Universal

## 26 Angular Animations

## 27 Adding Offline Capabilities with Service Workers

## 28 A Basic Introduction to Unit Testing in Angular Apps

## 29 Angular Changes & New Features

## 30 Course Roundup

## 31 Custom Project & Workflow Setup

## 32 Bonus: TypeScript Introduction (for Angular 2 Usage)