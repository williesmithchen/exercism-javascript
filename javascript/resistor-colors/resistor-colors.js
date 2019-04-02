export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const findColorIndex = (color) => COLORS.findIndex((c) => c === color);

export const colorCode = (color) => findColorIndex(color);

export const value = (searchColor) => {
  let result = '';
  searchColor.forEach((color) => result += findColorIndex(color));
  return +result;
};
