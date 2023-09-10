const gridNumber = 12;

const row = {
  row: {
    display: "flex",
    "flex-wrap": "wrap",
  },
};

const cols = {
  ...Array.from({ length: gridNumber }).reduce((acc, curr, index) => {
    const col = index + 1;
    acc[`col-${col}`] = {
      flex: `0 0 ${(100 / gridNumber) * col}%`,
      "max-width": `${(100 / gridNumber) * col}%`,
    };
    return acc;
  }, {}),
};

const grid = {
  ...row,
  ...cols,
};

module.exports = {
  grid,
};
