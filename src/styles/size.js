const height = {
  "h-auto": {
    height: "auto",
  },
  "h-full": {
    height: "100%",
  },
  "h-screen": {
    height: "100vh",
  },
};

const width = {
  "w-auto": {
    width: "auto",
  },
  "w-full": {
    width: "100%",
  },
  "w-screen": {
    width: "100vw",
  },
};

const size = {
  ...height,
  ...width,
};

module.exports = {
  size,
};
