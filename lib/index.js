function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import tab from './components/tab';

function v6Engine() {
  console.log(1);
}

function v8Engine() {
  var a = 1;
  return a;
  var n = 2;
  return n;
}

v8Engine();

var Person =
/*#__PURE__*/
function () {
  function Person() {
    _classCallCheck(this, Person);

    _defineProperty(this, "hello", function () {
      return 1;
    });
  }

  _createClass(Person, [{
    key: "sayHello",
    value: function sayHello() {
      console.log('hello');
    }
  }]);

  return Person;
}();