import Point from "../entities/Point";
import Stick from "../entities/Stick";

/** Преобразовать данные из текста */
const convertFromText = (text) => {
  let points = [];
  let sticks = [];
  let x = 45;
  let y = -45;
  let d = 10;
  let sz = 1000;
  text.split("\n").forEach((t) => {
    let el = t.split(" ");
    if (el[0] === "p") {
      points.push(new Point(Number(el[1]), Number(el[2]), Number(el[3])));
    } else if (el[0] === "s") {
      let nums = el[1].split("/");
      sticks.push([Number(nums[0]), Number(nums[1])]);
    } else if (el[0] === "m"){
      x = Number(el[1]);
      y = Number(el[2]);
      d = Number(el[3]);
      sz = Number(el[4]);
    }
  });
  sticks = sticks.map((s) => new Stick(points[s[0]], points[s[1]]));
  return [points, sticks, x, y, d, sz];
};

export default convertFromText;
