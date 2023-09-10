const cursors = [
  "alias",
  "all-scroll",
  "auto",
  "cell",
  "col-resize",
  "context-menu",
  "copy",
  "crosshair",
  "default",
  "e-resize",
  "ew-resize",
  "grab",
  "grabbing",
  "help",
  "move",
  "n-resize",
  "ne-resize",
  "nesw-resize",
  "ns-resize",
  "nw-resize",
  "nwse-resize",
  "no-drop",
  "none",
  "not-allowed",
  "pointer",
  "progress",
  "row-resize",
  "s-resize",
  "se-resize",
  "sw-resize",
  "text",
  "w-resize",
  "wait",
  "zoom-in",
  "zoom-out",
];

const cursor = {
  ...cursors.reduce((acc, curr, index) => {
    acc[`cursor-${curr}`] = {
      cursor: curr,
    };
    return acc;
  }, {}),
};

module.exports = {
  common: {
    cursor: {
      meta: {
        responsive: false,
      },
      style: cursor,
    },
  },
};
