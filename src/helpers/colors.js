export const setColor = (colorName) => {
  const colorsMap = {
    blue: "#0D99FF",
    yellow: "#FFD500",
    red: "#CC2936",
    success: "#16794B",
    gray: "#5F6368",
  };

  return colorsMap[colorName] || "#5F6368";
};

export const setColorName = (color = "#5F6368") => {
  const colorsNameMap = {
    "#0D99FF": "blue",
    "#FFD500": "yellow",
    "#CC2936": "red",
    "#16794B": "green",
    "#5F6368": "gray",
  };

  return colorsNameMap[color] || "gray";
};
