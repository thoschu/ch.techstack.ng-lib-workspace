# [letter-count](https://www.npmjs.com/package/letter-count) for Angular

<p align="center">
  <img src="https://www.thomas-schulte.de/images/letter-count-pipe.png" width="160" border="0" alt="LETTER-COUNT-PIPE">
  <br/><br/>
  <a href="https://www.npmjs.com/package/ng-letter-count-2">
    <img src="https://img.shields.io/npm/v/ng-letter-count-2.svg?style=flat-square" alt="npm">
  </a>
  <a href="https://app.circleci.com/pipelines/github/thoschu/ch.techstack.ng-lib-workspace">
    <img alt="CircleCI" src="https://img.shields.io/circleci/build/github/thoschu/ch.techstack.ng-lib-workspace/main">
  </a>
  <a href='https://coveralls.io/github/thoschu/ch.techstack.ng-lib-workspace?branch=main'>
    <img src='https://coveralls.io/repos/github/thoschu/ch.techstack.ng-lib-workspace/badge.svg?branch=main' alt='Coverage Status'>
  </a>
  <a href="https://github.com/thoschu/ng-lib-workspace/blob/main/LICENSE.md">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="MIT licensed">
  </a>
  <a href="https://packagequality.com/#?package=ng-letter-count-2">
    <img src="https://packagequality.com/shield/ng-letter-count-2.png" alt="Package Quality">
  </a>
  <a href="https://codeclimate.com/github/thoschu/ch.techstack.ng-lib-workspace">
    <img src="https://codeclimate.com/github/thoschu/de.schulte360.npm.letter-count/badges/gpa.svg" alt="Codeclimate">
  </a>
  <a href="https://snyk.io/test/github/thoschu/ch.techstack.ng-lib-workspace">
    <img src="https://snyk.io/test/github/thoschu/ch.techstack.ng-lib-workspace/badge.svg" alt="snyk.io">
  </a>
  <br><br>
  <b>Useful letter-count-pipe for Angular</b>
  <br><br>
  <a href="https://www.npmjs.com/package/ng-letter-count-2">
    <img src="https://nodei.co/npm/ng-letter-count-2.png?downloads=true" alt="Package Quality">
  </a>
</p>

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.0.

## Table of contents

- [Installation](#installation)
- [Changelog](CHANGELOG.md)
- [Useage](#useage)
- [Options](https://www.npmjs.com/package/letter-count)

## Installation

1. Use [npm](https://www.npmjs.com/) to install the package:

```terminal
$ npm install ng-letter-count-2 --save 
```

2. Use [yarn](https://yarnpkg.com/) to install the package:

```terminal
$ yarn add ng-letter-count-2
```

## Useage

1. You could either add into your module `imports` the `NgLetterCountModule` in order to add everything.

  ```typescript
  import { NgLetterCountModule } from 'ng-letter-count-2';
  
  @NgModule({
   // ...
   imports: [
     // ...
     NgLetterCountModule
   ]
  })
  ```

2. Or Pipes are also injectable and can be used in Components / Services / etc..

  ```typescript  
  import { NgLetterCountPipe } from 'ng-letter-count-2';

  @Component({
    // ..
    providers: [NgLetterCountPipe]
  })
  export class AppComponent {
    public title = 'AppComponent by Tom S.';
    
    constructor(private readonly ngLetterCountPipe: NgLetterCountPipe) {
      ngLetterCountPipe.transform(this.title, '-w'); // Returns: 4
    }
    // ..
  }
  ```

3. You can use pipes as part of your template for ex.

```html
<p>{{ 'AppComponent by Tom S.' | letterCount }}</p> <!-- Output: 22 -->
```

and it's also possible to stack multiple pipes

```html
<p>{{title | uppercase | letterCount: '-c'}}</p> <!-- Output: 22 -->
```
***

## NPM

[https://npmjs.com/package/ch.techstack.ng-lib-workspace](https://www.npmjs.com/package/ch.techstack.ng-lib-workspace)

***

## Doc

[![jsdoc logo](https://www.thomas-schulte.de/images/jsdoc.jpg "JSDoc")](https://techstack.ch/)

***

## RinKit

[https://npm.runkit.com/ng-letter-count-2](https://npm.runkit.com/ng-letter-count-2)

***

## Links

[Author](https://thomas-schulte.de)

[techstack.ch](https://techstack.ch/)

[ShieldsIO](https://shields.io)

***

## License

***This library is available under the [MIT](https://mths.be/mit) license.***

---
