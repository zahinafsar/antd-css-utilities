const prefix = [
  {
    name: "pa",
    generator: (value) => ({
      padding: value,
    }),
  },
  {
    name: "px",
    generator: (value) => ({
      padding: `0px ${value}`,
    }),
  },
  {
    name: "py",
    generator: (value) => ({
      padding: `${value} 0px`,
    }),
  },
  {
    name: "pl",
    generator: (value) => ({
      "padding-left": value,
    }),
  },
  {
    name: "pr",
    generator: (value) => ({
      "padding-right": value,
    }),
  },
  {
    name: "pt",
    generator: (value) => ({
      "padding-top": value,
    }),
  },
  {
    name: "pb",
    generator: (value) => ({
      "padding-bottom": value,
    }),
  },
];

const paddingValue = Array.from({ length: 17 }).map((_, i) => ({
  suffix: `${i}`,
  value: `${i * 4}px`,
}));

const paddings = paddingValue
  .map((m) => {
    return prefix.map((p) => ({
      [`${p.name}-${m.suffix}`]: {
        ...p.generator(m.value),
      },
    }));
  })
  .flat();

const toObject = paddings.reduce((acc, cur) => {
  return {
    ...acc,
    ...cur,
  };
}, {});

module.exports = {
  padding: toObject,
};
