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
const { grid } = require("./src/styles/grid");
const { size } = require("./src/styles/size");
const { typography } = require("./src/styles/text");
const { common } = require("./src/styles/common");

const styles = {
  ...display,
  ...flex,
  ...float,
  ...margin,
  ...overflow,
  ...padding,
  ...position,
  ...zIndex,
  ...grid,
  ...size,
  ...typography,
  ...common,
};

const css = (s, pref = "") => {
  return Object.entries(s)
    .map(([key, value]) => {
      if (value.meta) {
        if (pref && !value.meta.responsive) {
          return "";
        } else {
          return css(value.style);
        }
      }
      return `
          .${pref + key} {
            ${Object.entries(value)
              .map(([key, value]) => {
                return `${key}: ${value} !important;`;
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
        ${css(styles)}
        ${screens
          .map((s) => {
            return `
              @media (max-width: ${s.value}px) {
                ${css(styles, s.name + "-")}
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
