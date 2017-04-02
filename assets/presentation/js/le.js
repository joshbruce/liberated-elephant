(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function headerResize() {
    window.addEventListener('scroll', function(e){
      var header = document.getElementById("header-primary");
      // console.log(header);
      var distanceY = window.pageYOffset;
      var shrinkOn = 300
      if (distanceY > shrinkOn) {
          header.classList.add('smaller');

      } else {
          header.classList.remove('smaller');

      }
    });
}

window.onload = headerResize;

},{}],2:[function(require,module,exports){
'use strict';

require('./components/header.js');

},{"./components/header.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfZGV2L2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwiX2Rldi9qcy9zdGFydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gaGVhZGVyUmVzaXplKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbihlKXtcbiAgICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1wcmltYXJ5XCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coaGVhZGVyKTtcbiAgICAgIHZhciBkaXN0YW5jZVkgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICB2YXIgc2hyaW5rT24gPSAzMDBcbiAgICAgIGlmIChkaXN0YW5jZVkgPiBzaHJpbmtPbikge1xuICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzbWFsbGVyJyk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3NtYWxsZXInKTtcblxuICAgICAgfVxuICAgIH0pO1xufVxuXG53aW5kb3cub25sb2FkID0gaGVhZGVyUmVzaXplO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuL2NvbXBvbmVudHMvaGVhZGVyLmpzJyk7XG4iXX0=
