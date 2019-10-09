//不用写任何路径，直接写模块名字，默认从内置模块，再从node——modules中引入。
// 从package.json里面或取main字段的路径，然后把jquery.js模块引入。
const $ = require("jquery")
console.log($)