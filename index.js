const fs = require("fs");
const content = fs.readFileSync("data.txt");
let data = content.toString();

// 去掉注释块儿 (/* | * | */)
data = data
  .replace("/*", "")
  .replace("*/", "")
  .replace(/[\*]/g, "")
  .replace(/\/\/(.*)/);

// @router('user/list/:type') 匹配这种模式
const singleLineMode = data.match(/@route\((.*)\)/g);
console.log(singleLineMode);

// @router({}) 匹配这种模式
const multilineMode = data.match(/@route\(\{[\S\s]*\}\)/g);
console.log(multilineMode);
