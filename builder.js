const generator = require("./src/generator");
const { screens } = require("./src/screens");

const { display } = require("./src/styles/display");
const { flex } = require("./src/styles/flex");
const { float } = require("./src/styles/float");
const { margin } = require("./src/styles/margin");
const { overflow } = require("./src/styles/overflow");
const { padding } = require("./src/styles/padding");
const { position } = require("./src/styles/position");
const { zIndex } = require("./src/styles/zIndex");

const styles = {
  ...display,
  ...flex,
  ...float,
  ...margin,
  ...overflow,
  ...padding,
  ...position,
  ...zIndex,
};

const css = (pref = "") => {
  return Object.entries(styles)
    .map(([key, value]) => {
      return `
          .${pref + key} {
            ${Object.entries(value)
              .map(([key, value]) => {
                return `${key}: ${value};`;
              })
              .join("\n")}
          }
        `;
    })
    .join("\n");
};

generator(
  "main.scss",
  `
        ${css()}
        ${screens
          .map((s) => {
            return `
              @media (min-width: ${s.value}px) {
                ${css(s.name + "-")}
              }
            `;
          })
          .join("\n")}
    `
);

generator(
  "classes.txt",
  `${Object.keys(styles)
    .map((k) => "." + k)
    .join("\n")}`
);
