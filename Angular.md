# ng commands
## Create new angular project
Creates a new Angular project.

>_ng new project \<projectname>_
## Start development server
Start Angular live devolopment server.

>_ng serve_
## ng generate component <name>
Create a full component in src folder
>_ng generate component \<name>_

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
> _<div *ngIf="condition">Content to render when condition is true.</div>_

### Directive: ngFor
Example 1

>_<app-server *ngFor="let server of servers"></app-server>_

Example 2
>\<div
>>*ngFor="let logItem of log; let i = index"

>>[ngStyle]="{backgroundColor: i >= 4 ? 'blue' : 'transparent'}"

>>[ngClass]="{'white-text': i >= 4}"

>>\>{{ logItem }}

>\</div>

### Directive: ngClass
>\<p
>> [ngClass]="{online: serverStatus === 'online'}">

>>  {{ 'Server' }} with ID {{ serverId }} is {{ getServerStatus() }}

>\</p>


### Directive: ngStyle
>\<p
>>  [ngStyle]="{backgroundColor: getColor()}"

>>  {{ 'Server' }} with ID {{ serverId }} is {{ getServerStatus() }}

>\</p>

## 3 Course Project Basics

## 4 Debugging

## 5 Components & Databinding Deep Dive

## 6 Course Project - Components & Databinding
## 7 Directives Deep Dive

## 8 Course Project - Directives

## 9 Using Services & Dependency Injection

## 10 Course Project - Services & Dependency Injection

## 11 Changing Pages with Routing

## 12 Course Project - Routing

## 13 Understanding Observables

## 14 Course Project Observables

## 15 Handling Forms in Angular Apps

## 16 Course Project - Forms

## 17 Using Pipes to Transform Output

## 18 Making Http Requests

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