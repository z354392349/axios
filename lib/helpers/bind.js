"use strict";

//
module.exports = function bind(fn, thisArg) {
  return function wrap() {
    // arguments 是 warp的，不是 bind的，返回的方法并没有调用
    // arguments 传入的是 用户的config配置
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};
