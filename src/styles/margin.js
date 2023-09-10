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
      margin: `0px ${value}`,
    }),
  },
  {
    name: "my",
    generator: (value) => ({
      margin: `${value} 0px`,
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
];

const marginValue = Array.from({ length: 17 }).map((_, i) => ({
  suffix: `${i}`,
  value: `${i * 4}px`,
}));


const margins = marginValue.map((m) => {
  return prefix.map(p => ({
    [`${p.name}-${m.suffix}`]: {
      ...p.generator(m.value),
    },
  }))
}).flat();

const toObject = margins.reduce((acc, cur) => {
    return {
        ...acc,
        ...cur,
    }
}, {});

module.exports = {
    margin: toObject,
};
