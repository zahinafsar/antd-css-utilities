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
      "padding-left": value,
      "padding-right": value,
    }),
  },
  {
    name: "py",
    generator: (value) => ({
      "padding-top": value,
      "padding-bottom": value,
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
  {
    name: "ps",
    generator: (value) => ({
      "padding-inline-start": value,
    }),
  },
  {
    name: "pe",
    generator: (value) => ({
      "padding-inline-end": value,
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
    "pa-auto": {
      padding: "auto",
    },
    ...acc,
    ...cur,
  };
}, {});

module.exports = {
  padding: toObject,
};
