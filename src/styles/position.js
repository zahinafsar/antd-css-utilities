const position = {
  static: {
    position: "static",
  },
  fixed: {
    position: "fixed",
  },
  absolute: {
    position: "absolute",
  },
  relative: {
    position: "relative",
  },
  sticky: {
    position: "sticky",
  },
};

const top = {
  ...Array.from({ length: 17 }).reduce((acc, curr, index) => {
    acc[`top-${index}`] = {
      top: `${index * 2}px`,
    };
    return acc;
  }, {}),
};

const bottom = {
  ...Array.from({ length: 17 }).reduce((acc, curr, index) => {
    acc[`bottom-${index}`] = {
      bottom: `${index * 2}px`,
    };
    return acc;
  }, {}),
};

const left = {
  ...Array.from({ length: 17 }).reduce((acc, curr, index) => {
    acc[`left-${index}`] = {
      left: `${index * 2}px`,
    };
    return acc;
  }, {}),
};

const right = {
  ...Array.from({ length: 17 }).reduce((acc, curr, index) => {
    acc[`right-${index}`] = {
      right: `${index * 2}px`,
    };
    return acc;
  }, {}),
};

module.exports = {
  position: {
    ...position,
    ...top,
    ...bottom,
    ...left,
    ...right,
  },
};
