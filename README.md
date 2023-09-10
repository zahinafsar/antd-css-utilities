## Ant Design CSS Utilities

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![npm version](https://img.shields.io/npm/v/antd-css-utilities)

Basic CSS utilities for ant design. Ant design doesn't have its own CSS utility classes, so we are here to help you. You can easily integrate and start using this library with ant design as well as other frameworks you like.

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
++ import 'antd-css-utilities/utility.min.css'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
```

### Setup Intellisense

- Install VSCode extension [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
- Add this line in your `[PROJECT]/.vscode/settings.json` file

```json
{
  "html-css-class-completion.includeGlobPattern": "node_modules/antd-css-utilities/utility.min.css"
}
```

### If you already use [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)

- Add this line in your `[PROJECT]/.vscode/settings.json` file

```json
{
  "html-css-class-completion.includeGlobPattern": "{[YOUR_PATTERN],node_modules/antd-css-utilities/utility.min.css}"
}
```

## Margin & Padding

| Class Names | Meaning             |
| ----------- | ------------------- |
| ma          | margin(x & y axis)  |
| mx          | margin(x axis)      |
| my          | margin(y axis)      |
| mt          | margin-top          |
| ml          | margin-left         |
| mr          | margin-right        |
| mb          | margin-bottom       |
| pa          | padding(x & y axis) |
| px          | padding(x axis)     |
| py          | padding(y axis)     |
| pt          | padding-top         |
| pl          | padding-left        |
| pr          | padding-right       |
| pb          | padding-bottom      |

#### Example:

```html
<div class="ma-10">
  <div class="ma-auto">Hello World!</div>
</div>
<!--value: 1-16 & auto -->
```

## Other utility support. [See All](https://zahinafsar.github.io/antd-css-utilities/classes.txt)

- Flex
  - Flex
  - Justify
  - Align
  - Direction
  - Wrap
  - Grow
  - Gap
- Float
- Overflow
- Position
  - Position
  - Top
  - Right
  - Bottom
  - Left
- Display
- Cursor
- Height
- Width
- Text

## Responsiveness (Web First)

We have four responsive breakpoints `sm` `md` `lg` `xlg`

| Device Width | Class Prefix |
| ------------ | ------------ |
| 576px        | sm           |
| 768px        | md           |
| 992px        | lg           |
| 1200px       | xlg          |

#### Example:

```html
<div class="sm-absolute">
  <div class="hidden md-visible">My device width is less than 768px</div>
  <div class="visible md-hidden">My device width is more than 768px</div>
</div>
```

## References

https://zahinafsar.github.io/antd-css-utilities/utility.min.css

## License

[MIT](LICENSE)

[npm-url]: https://npmjs.org/package/antd-css-utilities
