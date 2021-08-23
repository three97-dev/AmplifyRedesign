// TODO: add missing colors 100, 500, 600, 700, 900
const MARGINS = {
  sm: "component-margins-mobile sm:component-margins",
  md: "component-margins-mobile md:component-margins",
  lg: "component-margins-mobile lg:component-margins",
};
const resolveComponentMargins = mobileSwitch => {
  try {
    return MARGINS[mobileSwitch];
  } catch (err) {
    throw new Error("Failed to get component margins class: ", err);
  }
};

export default resolveComponentMargins;
