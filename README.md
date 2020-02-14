# dom [![Build Status](https://travis-ci.org/benjaminreid/dom.svg?branch=master)](https://travis-ci.org/benjaminreid/dom) ![File Size](https://img.badgesize.io/benjaminreid/dom/master/src/index.ts?compression=gzip)

`dom` aims to be a small and simple module to interact with the DOM. It has a
tiny footprint and comes with support for TypeScript. It won’t brew you a coffee
any time soon but it may save you a few keystrokes.

## Installing

Install with your package manager of choice.

```
yarn add @benjaminreid/dom
```

```
npm install @benjaminreid/dom
```

## Usage

```js
import { $, $$ } from "@benjaminreid/dom";

// a wrapper around document.querySelector
const $element = $("#button");

// a wrapper around document.querySelectorAll
const $elements = $$(".button");

// except you’ll get an Array back, not a NodeList
$elements.map($element => $element.innerText);

// $ and $$ take a second argument so you can select an element withing another
const $parent = $("#parent");
const $children = $$(".children", $parent);
```

## Tests

`dom` is fully tested with [Jest](https://jestjs.io/) and
[Testing Library](https://testing-library.com/). You can run them yourself
with...

```
yarn test
```

```
npm test
```

## Contributing

Pull requests are very much welcome. If you have some useful DOM related
functions which you’ve been copying from project to project like me and think
they might be at home here, please post your ideas.
