/** Преобразовать данные в текст */
const convertToText = (points, sticks, angelX, angelY, distance, size) => {
  let text = "";
  text += `m ${angelX} ${angelY} ${distance} ${size}\n`
  points.forEach((p) => {
    text += `p ${p.x} ${p.y} ${p.z}\n`;
  });
  sticks.forEach((s) => {
    text += `s ${points.indexOf(s.first)}/${points.indexOf(s.last)}\n`;
  });
  return text;
};

export default convertToText;
