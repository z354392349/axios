"use strict";

var utils = require("./utils");
var bind = require("./helpers/bind");
var Axios = require("./core/Axios");
var mergeConfig = require("./core/mergeConfig");
var defaults = require("./defaults");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  // Axios的实例 返回了，默认配置 和 interceptors request，，response 的实例
  var context = new Axios(defaultConfig);

  // Axios的实例，和request 绑定，并且将默认配置传进去，
  // 等客户再次调用时，传入新配置，则wrap内的arguments 将会将默认配置顶替
  // 返回的是一个方法
  // 默认调用axios 就是调用的request方法
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  // 将要 prototype 方法复制到新的实例
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  // 将默认属性参数复制到新的实例
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
// 系统根据默认参数 创建的 axios 实例
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
// 根据用户的参数创建实例对象
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = require("./cancel/Cancel");
axios.CancelToken = require("./cancel/CancelToken");
axios.isCancel = require("./cancel/isCancel");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require("./helpers/spread");

// Expose isAxiosError
axios.isAxiosError = require("./helpers/isAxiosError");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;
