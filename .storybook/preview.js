import "../src/css/index.css";
import "slick-carousel/slick/slick.css";

const customViewports = {
  desktop1960scroll: {
    name: "Desktop 1920 (scroll)",
    type: "desktop",
    styles: {
      width: "1935px",
      height: "1080px",
    },
  },
  desktop1960: {
    name: "Desktop 1920",
    type: "desktop",
    styles: {
      width: "1920px",
      height: "1080px",
    },
  },
  desktop1366scroll: {
    name: "Desktop 1366 (scroll)",
    type: "desktop",
    styles: {
      width: "1381px",
      height: "900px",
    },
  },
  desktop1366: {
    name: "Desktop 1366",
    type: "desktop",
    styles: {
      width: "1366px",
      height: "900px",
    },
  },
  tablet834scroll: {
    name: "Tablet 834 (scroll)",
    type: "desktop",
    styles: {
      width: "849px",
      height: "900px",
    },
  },
  tablet834: {
    name: "Tablet 834",
    type: "desktop",
    styles: {
      width: "834px",
      height: "900px",
    },
  },
  mobile375scroll: {
    name: "Mobile 390 (scroll)",
    styles: {
      height: "900px",
      width: "405px",
    },
    type: "mobile",
  },
  mobile375: {
    name: "Mobile 390",
    styles: {
      height: "900px",
      width: "390px",
    },
    type: "mobile",
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  viewport: {
    viewports: {
      ...customViewports,
    },
  },
  options: {
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
  },
};
