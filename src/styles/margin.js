const prefix = [
  {
    name: "ma",
    generator: (value) => ({
      margin: value,
    }),
  },
  {
    name: "mx",
    generator: (value) => ({
      "margin-left": value,
      "margin-right": value,
    }),
  },
  {
    name: "my",
    generator: (value) => ({
      "margin-top": value,
      "margin-bottom": value,
    }),
  },
  {
    name: "ml",
    generator: (value) => ({
      "margin-left": value,
    }),
  },
  {
    name: "mr",
    generator: (value) => ({
      "margin-right": value,
    }),
  },
  {
    name: "mt",
    generator: (value) => ({
      "margin-top": value,
    }),
  },
  {
    name: "mb",
    generator: (value) => ({
      "margin-bottom": value,
    }),
  },
  {
    name: "ms",
    generator: (value) => ({
      "margin-inline-start": value,
    }),
  },
  {
    name: "me",
    generator: (value) => ({
      "margin-inline-end": value,
    }),
  },
];

const marginValue = Array.from({ length: 17 }).map((_, i) => ({
  suffix: `${i}`,
  value: `${i * 4}px`,
}));

const margins = marginValue
  .map((m) => {
    return prefix.map((p) => ({
      [`${p.name}-${m.suffix}`]: {
        ...p.generator(m.value),
      },
    }));
  })
  .flat();

const toObject = margins.reduce((acc, cur) => {
  return {
    "ma-auto": {
      margin: "auto",
    },
    ...acc,
    ...cur,
  };
}, {});

module.exports = {
  margin: toObject,
};
