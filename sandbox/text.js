// function bind(fn, thisArg) {
//   return function wrap() {
//     // arguments 是 warp的，不是 bind的，返回的方法并没有调用
//     // arguments 传入的是 用户的config配置
//     var args = new Array(arguments.length);
//     for (var i = 0; i < args.length; i++) {
//       args[i] = arguments[i];
//     }
//     return fn.apply(thisArg, args);
//   };
// }

// function extend(a, b, thisArg) {
//   forEach(b, function assignValue(val, key) {
//     if (thisArg && typeof val === "function") {
//       a[key] = bind(val, thisArg);
//     } else {
//       a[key] = val;
//     }
//   });
//   return a;
// }
// var x = "all x";
// function obj() {
//   this.x = "obj.x";
// }

// obj.prototype.b = function () {
//   console.log("this b,", this.x);
// };
// obj.prototype.c = function () {
//   console.log("this c,", this.x);
// };

// var Obj = new obj();

// var instance = bind(obj.prototype.b, Obj);
// instance["c"] = bind(obj.prototype.c, Obj);

// console.log("Obj.x;", Obj.x);
// instance();
// instance.c();

// var resolveHandle;
// new Promise((resolve) => {
//   resolveHandle = resolve;
// }).then((val) => {
//   console.log("resolve", val);
// });

// setTimeout(() => {
//   resolveHandle("ok");
// }, 10000);
// resolveHandle("ok");

function a(b) {
  b(function c(params) {});
}
