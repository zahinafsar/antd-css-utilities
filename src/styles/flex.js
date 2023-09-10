const flexDirection = {
  "flex-row": {
    "flex-direction": "row",
  },
  "flex-col": {
    "flex-direction": "column",
  },
  "flex-row-reverse": {
    "flex-direction": "row-reverse",
  },
  "flex-col-reverse": {
    "flex-direction": "column-reverse",
  },
};

const flexGrow = {
  ...Array.from({ length: 4 }).reduce((acc, curr, index) => {
    acc[`flex-grow-${index}`] = {
      "flex-grow": index,
    };
    return acc;
  }, {}),
};

const flexWrap = {
  "flex-wrap": {
    "flex-wrap": "wrap",
  },
  "flex-nowrap": {
    "flex-wrap": "nowrap",
  },
  "flex-wrap-reverse": {
    "flex-wrap": " wrap-reverse",
  },
};

const gaps = {
  ...Array.from({ length: 16 }).reduce((acc, curr, index) => {
    acc[`gap-${++index}`] = {
      gap: index * 2,
    };
    return acc;
  }, {}),
};

const justifyContent = {
  "justify-start": {
    "justify-content": "flex-start",
  },
  "justify-end": {
    "justify-content": "flex-end",
  },
  "justify-center": {
    "justify-content": "center",
  },
  "justify-between": {
    "justify-content": "space-between",
  },
  "justify-around": {
    "justify-content": "space-around",
  },
  "justify-evenly": {
    "justify-content": "space-evenly",
  },
};

const alignItems = {
  "items-start": {
    "align-items": "flex-start",
  },
  "items-end": {
    "align-items": "flex-end",
  },
  "items-center": {
    "align-items": "center",
  },
  "items-baseline": {
    "align-items": "baseline",
  },
  "items-stretch": {
    "align-items": "stretch",
  },
};

const alignContent = {
  "content-start": {
    "align-content": "flex-start",
  },
  "content-end": {
    "align-content": "flex-end",
  },
  "content-center": {
    "align-content": "center",
  },
  "content-between": {
    "align-content": "space-between",
  },
  "content-around": {
    "align-content": "space-around",
  },
  "content-stretch": {
    "align-content": "stretch",
  },
};

const alignSelf = {
  "self-auto": {
    "align-self": "auto",
  },
  "self-start": {
    "align-self": "flex-start",
  },
  "self-end": {
    "align-self": "flex-end",
  },
  "self-center": {
    "align-self": "center",
  },
  "self-stretch": {
    "align-self": "stretch",
  },
};

const flex = {
  ...flexDirection,
  ...flexGrow,
  ...flexWrap,
  ...justifyContent,
  ...alignItems,
  ...alignContent,
  ...alignSelf,
  ...gaps,
};

module.exports = {
  flex,
};
