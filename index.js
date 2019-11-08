const fs = require("fs");
const json5 = require('json5')
const content = fs.readFileSync("data.txt");
let data = content.toString();

// 去掉注释块儿 (/* | * | */)
data = data
  .replace("/*", "")
  .replace("*/", "")
  .replace(/[\*]/g, "")

// @router('user/list/:type') 匹配这种模式
const singleLineMode = data.match(/@route\((.*)\)/g);
console.log(singleLineMode);

// @router({}) 匹配这种模式
const multiLineMode = data.match(/@route\(\{[\S\s]*\}\)/g);
console.log(multiLineMode);
