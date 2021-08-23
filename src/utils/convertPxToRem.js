function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

export default function convertPxToRem(px) {
  if (px === undefined || px === "") {
    return 0;
  }
  return round(px / 10, 1);
}
