// use-jQuery.js 依赖jQuery,但在代码中，没有jQuery
// https://github.com/webpack/imports-loader
require("imports?$=../module/jquery!../module/jquery-console.js");
require("../module/react-demo.js");
