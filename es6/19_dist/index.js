'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var add = function add(x, y) {
    return x + y;
};
console.log(add(1, 2));
var xxxxx = 5;

var Person = function () {
    function Person(name, age) {
        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'say',
        value: function say() {
            console.log('我的名字是' + this.name);
        }
    }]);

    return Person;
}();
