## Ant Design CSS Utilities
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![npm version](https://img.shields.io/npm/v/antd-css-utilities)

Basic CSS utilities for ant design. As ant design don't have their own CSS utilities, we are here to help you. You easily can use of this library with ant design without over writing any styles of ant design.

## Installation

```sh
$ npm install antd-css-utilities
```

## Add Into Project

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
<!--value: 1-10 & auto -->
```
## Flex Box
```
.d-flex
.d-inline-flex
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
## References

- https://mdzahin.github.io/antd-utility-class/index.css

## License

[MIT](LICENSE)


[npm-url]: https://npmjs.org/package/antd-css-utilities
