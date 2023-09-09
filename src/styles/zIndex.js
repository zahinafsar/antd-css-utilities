const zIndex = {
  ...Array.from({ length: 4 }).reduce((acc, curr, index) => {
    acc[`z-index-${index}`] = {
      "z-index": index,
    };
    return acc;
  }, {}),
  "z-index-auto": {
    "z-index": "auto",
  },
  "z-index-top": {
    "z-index": 99999,
  },
  "z-index-bottom": {
    "z-index": -99999,
  },
};

module.exports = {
  zIndex,
};
