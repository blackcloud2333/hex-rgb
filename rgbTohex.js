// 假设rgb是对象形式
/**
 * rgb = {
 *  r:10,
 *  g:10,
 *  b:10
 * }
 * @param {*} rgb
 */
var rgb = {
  r: 10,
  g: 10,
  b: 10
}
var formData = function (rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

function rgbToHex(rgb) {
  var r = formData(rgb.r)
  var g = formData(rgb.g)
  var b = formData(rgb.b)
  return `#${r}${g}${b}`
}