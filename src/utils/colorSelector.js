const COLORS = {
  "blue-gem": {
    100: "text-blue-gem-100",
    300: "text-other-blue-gem-300",
    500: "text-blue-gem-500",
    600: "text-blue-gem-600",
    700: "text-blue-gem-700",
    800: "text-other-blue-gem-800",
    900: "text-blue-gem-900",
  },
  "jagged-ice": {
    100: "text-jagged-ice-100",
    300: "text-other-jagged-ice-300",
    500: "text-jagged-ice-500",
    600: "text-jagged-ice-600",
    700: "text-jagged-ice-700",
    800: "text-other-jagged-ice-800",
    900: "text-jagged-ice-900",
  },
  linen: {
    100: "text-linen-100",
    300: "text-other-linen-300",
    500: "text-linen-500",
    600: "text-linen-600",
    700: "text-linen-700",
    800: "text-other-linen-800",
    900: "text-linen-900",
  },
  pippin: {
    100: "text-pippin-100",
    300: "text-other-pippin-300",
    500: "text-pippin-500",
    600: "text-pippin-600",
    700: "text-pippin-700",
    800: "text-other-pippin-800",
    900: "text-pippin-900",
  },
  natural: {
    100: "text-natural-100",
    500: "text-natural-500",
    600: "text-natural-600",
    700: "text-natural-700",
    800: "text-natural-800",
    900: "text-natural-900",
  },
  honeydew: {
    300: "text-other-honeydew-300",
    800: "text-other-honeydew-800",
  },
};
const convertColor = (color, number) => {
  try {
    return COLORS[color][number];
  } catch (err) {
    throw new Error("Failed to convert color: ", err);
  }
};

export default convertColor;
