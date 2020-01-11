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
