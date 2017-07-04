[![demolive](https://img.shields.io/badge/demo-live-green.svg)](http://angular4.jerouw.nl/)
[![license](https://img.shields.io/npm/l/express.svg)](https://github.com/jeroenouw/Angular4MaterialDesign/blob/master/LICENSE/)
[![dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)](https://github.com/jeroenouw/Angular4MaterialDesign/blob/master/package.json)
[![updates](https://img.shields.io/badge/updates-weekly-yellowgreen.svg)](https://github.com/jeroenouw/Angular4MaterialDesign/commits/master)

![logo](https://jerouw.nl/wp-content/uploads/2017/05/ngfbmd.png "Logo")  

# Angular 4 | Material Design | Firebase - Starter kit
A full stack starter app containing [Angular 4](https://angular.io), [Material](https://material.io/) and [Firebase](https://firebase.google.com/).

### Project is still in progress

## [Live demo](http://angular4.jerouw.nl) 
![loginpage](https://jerouw.nl/wp-content/uploads/2017/05/ngfbmdprintscreen.png "Logo")
![githubauth](https://jerouw.nl/wp-content/uploads/2017/06/ng4githubauth.png "Logo")

## Quick start
First clone this repo: `git clone https://github.com/jeroenouw/Angular4MaterialDesign.git`.  
Change directory to this project  
Run `npm install` to install all the dependencies.  
Run `npm start` or `ng serve` to run this project.  
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  

To build the project run `npm run dist`.

## Development
For own projects please use different keys in app.component.ts:  
``` firebase.initializeApp({ ```   
```     // For other projects use different keys```  
```    apiKey: '[YOUR_KEY]',```  
```     authDomain: '[YOUR_KEY]',```  
```    databaseURL: '[YOUR_KEY]',```  
```    projectId: '[YOUR_KEY]',```  
```   storageBucket: '[YOUR_KEY]',```    
```  messagingSenderId: '[YOUR_KEY]'```  
```    });```  
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Including in this project:
* Angular 4 front-end with Material Design
* Firebase back-end (0Auth authentication and NoSQL database)
* Home page
* About page
* Contact page
* Misc page
* 404 page
* Save email (keep in touch)
* Authentication (Email, Google, Twitter, Facebook, Github and Anonymous)
* Verification email after signup
* Auth Guard
* Profile
* Profile image animation
* Profile settings
* Password reset
* Messaging system
* Alerts
* 360 view
* Multiple pipes
* Carousel
* Translatations
* Tests
* Back to top button
* Loading spinner and progress bar

### Specific Angular 4 usage in this project:
* Animations (@angular/platform-browser/animations)
* ng-template
* ngIf else
* Titlecase pipe

### Specific Material Design usage in this project:
* MD Datepicker
* MD Input
* MD Slide toggle
* MD Menu
* MD Sidenav
* MD Toolbar
* MD Card
* MD Tabs
* MD Buttons
* MD Icon
* MD Progress spinner
* MD Progress bar
* MD Dialog
* MD Tooltip
* MD Snackbar

## To Do List
* Make every component responsive

## To Finish List (known issues)
### Auth
* Cellphone authentication
* Optimizing alerts
* Google, Facebook, Twitter & Github signin/signup
* Error messages: Email already exists, login failed, registration failed

### Sending
* Contact form send

### Profile
* Dialog component
* File uploading
* Change settings
* Messaging layout and functionality

### Tests
* Unit
* e2e

### Other
* i18n translations
* Internal server error 500
* 360 view only working on localhost
