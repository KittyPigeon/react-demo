/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-08-08 10:18:01
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-09 16:15:11
 */
/**
 * @name: setStorage
 * @test: test font
 * @msg: 本地存储
 * @param {name data} 
 * @return: 
 */
function setStorage(name, data) {
    if (!name) {
        return
    }
    if (Object.prototype.toString.call(data) === 'Object object') {
        data=JSON.stringify(data);
    }
    window.localStorage.setItem(name,data)
}

/**
 * @name: getStorage
 * @test: test font
 * @msg: 获取本地存储
 * @param {name data} 
 * @return: 
 */
function getStorage(name, data) {
    if (!name) {
        return
    }

    return window.localStorage.getItem(name);
}


/**
 * 删除localStorage
 */
 const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}

/**
 * @name: throttle
 * @test: test font
 * @msg: 前端节流
 * @param {} 
 * @return: 
 */

var throttle = function (fn, interval) {
    var _self = fn,
        timer,
        firstTime = true;
    return function () {
        var args = arguments;
        var me = this;
        if (firstTime) {
            _self.apply(me, args);
            firstTime = false;
            return;
        }
        if (timer) {
            return false;
        }
        timer = setTimeout(function () {
            clearTimeout(timer);
            timer = null;
            _self.apply(me, args);

        }, interval || 500);
    }
}

/**
 * @name: timeChunk
 * @test: test font
 * @msg:分时函数 一下子往页面添加10000条数据  分时加载
 * @param {ary cb } 
 * @return: 
 */
var timeChunk = function (ary, fn, count) {
    var obj,
        t;
    var len = ary.length;
    var start = function () {
        for (let i = 0; i < Math.min(count || 1, ary.length); i++) {
            var obj = ary.shift(); //删除数组头一个 遍历每次取删掉的内容
            fn(obj);
        }
    }
    return function () {
        t = setInterval(function () {
            if (ary.length === 0) {
                return clearInterval(t);
            }
            start();
        }, 200)
    }
}
export default {
    setStorage,
    getStorage,
    removeStore,
    throttle,
    timeChunk
}