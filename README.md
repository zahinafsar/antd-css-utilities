## Ant Design CSS Utilities
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![npm version](https://img.shields.io/npm/v/antd-css-utilities)

Basic CSS utilities for ant design. As ant design don't have their own CSS utilities, we are here to help you. You easily can use this library with ant design. It is also usable with Vue.js and HTML.

## Installation

```sh
$ npm install antd-css-utilities
```

## Add Into Your Project
### React.js (index.js)
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
++ import 'antd-css-utilities/utility.min.css'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
```
### Vue.js (main.js)
```js
import App from './App.vue'
import router from './router'
import store from './store'
++ import 'antd-css-utilities/utility.min.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
```
### HTML
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="https://zahinafsar.github.io/antd-utility-class/utility.min.css">
</head>
<body></body>
</html>
```

## Margin & Padding
Class Names | Meaning
------------- | -------------
ma | margin(x & y axis)
mx | margin(x axis)
my | margin(y axis)
mt | margin-top
ml | margin-left
mr | margin-right
mb | margin-bottom
pa | padding(x & y axis)
px | padding(x axis)
py | padding(y axis)
pt | padding-top
pl | padding-left
pr | padding-right
pb | padding-bottom
#### Example:

```html
<div class="ma-10" >
    <div class="ma-auto">Hello World!</div>
</div>
<!--value: 1-16 & auto -->
```
## Flex Box
```
.flex-fill
.flex-row
.flex-column
.flex-row-reverse
.flex-column-reverse
.flex-grow-0
.flex-grow-1
.flex-shrink-0
.flex-shrink-1
.flex-wrap
.flex-nowrap
.flex-wrap-reverse
```
## Flex Justify
```
.justify-start
.justify-end
.justify-center
.justify-space-between
.justify-space-around
```
## Flex Align
```
.align-start
.align-end
.align-center
.align-baseline
.align-stretch
.align-content-start
.align-content-end
.align-content-center
.align-content-space-between
.align-content-space-around
.align-content-stretch
.align-self-auto
.align-self-start
.align-self-end
.align-self-center
.align-self-baseline
.align-self-stretch
```
## Text
```
.text-center
.text-no-wrap
```
## Display
```
.d-none 
.d-inline 
.d-inline-block 
.d-block 
.d-table 
.d-table-row 
.d-table-cell 
.d-flex 
.d-inline-flex 
.d-grid 
```
## Position
```
.position-static 
.position-relative 
.position-absolute 
.position-fixed 
.position-sticky 
```
## Overflow
```
.overflow-visible 
.overflow-hidden 
.overflow-scroll 
.overflow-auto 
.overflow-x-visible 
.overflow-x-hidden 
.overflow-x-scroll 
.overflow-x-auto 
.overflow-y-visible 
.overflow-y-hidden 
.overflow-y-scroll 
.overflow-y-auto 
```
## Z-Index
```
.z-1
.z-10
.z-100
.z-1000
.z-10000
```
## Height & Width
```
.w-90
.w-100
.w-auto
.h-100
.h-100vh
.h-auto
```
## Responsiveness
We have four responsive breakpoints `sm` `md` `lg` `xlg`
Device Width | Class Prefix
------------- | -------------
576px | sm
768px | md
992px | lg
1200px | xlg

#### Example:

```html
<div class="sm-position-absolute" >
    <div class="d-none md-d-block">My device width is less than 768px</div>
    <div class="d-block md-d-none">My device width is more than 768px</div>
</div>
```
## Responsive Prefix Available For
- flex
- Justify
- Display
- Align
- Position

## References

- https://zahinafsar.github.io/antd-utility-class/utility.min.css

## License

[MIT](LICENSE)


[npm-url]: https://npmjs.org/package/antd-css-utilities
