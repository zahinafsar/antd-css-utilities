const text = {
  "text-center": {
    "text-align": "center",
  },
  "text-left": {
    "text-align": "left",
  },
  "text-right": {
    "text-align": "right",
  },
};

const font = {
  "font-bold": {
    "font-weight": "bold",
  },
  "font-normal": {
    "font-weight": "normal",
  },
  "font-light": {
    "font-weight": "light",
  },
  "font-italic": {
    "font-style": "italic",
  },
  "font-underline": {
    "text-decoration": "underline",
  },
  "font-overline": {
    "text-decoration": "overline",
  },
  "font-line-through": {
    "text-decoration": "line-through",
  },
};

const typography = {
  ...text,
  ...font,
};

module.exports = {
  typography,
};
