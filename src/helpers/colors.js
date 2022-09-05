export const setColor = (colorName) => {
  const colorsMap = {
    blue: "#0D99FF",
    yellow: "#FFD500",
    red: "#CC2936",
    success: "#16794B",
    gray: "#5F6368",
  };

  return colorsMap[colorName] || "gray";
};
