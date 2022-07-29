/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./assets/src/revealable.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Revealable() {
  var _this = this;

  this.el = null, this.elTriggers = [], this.isOpen = false, this.render = function (selector, triggerSelector) {
    _this.el = document.querySelector(selector);
    _this.elTriggers = document.querySelectorAll(triggerSelector);

    if (!_this.el) {
      return;
    }

    _this.initialize();

    _this.handleEvent();
  }, this.initialize = function () {
    if (!_this.isOpen) {
      if (window.innerWidth >= 768) {
        var size = _this.el.offsetWidth + 'px';
        _this.el.style.transform = 'translateX(' + size + ')';
      } else {
        var size = _this.el.offsetHeight + 'px';
        _this.el.style.transform = 'translateY(' + size + ')';
      }
    }
  }, this.handleEvent = function () {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var el = _this.el; // Attach on resize

    _this.attachInitializeOnResize(); // Attach trigger open event


    _this.attachTriggerOpen(); // Attach trigger close event


    _this.attachTriggerClose();
  }, this.attachInitializeOnResize = function () {
    var self = _this;

    window.onresize = function () {
      self.initialize();
    };
  }, this.attachTriggerOpen = function () {
    var self = _this;

    if (!_this.elTriggers.length) {
      return;
    }

    _this.elTriggers.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.style.overflow = 'hidden';
        self.isOpen = true;

        if (window.innerWidth >= 768) {
          self.el.style.transform = 'translateX(0px)';
        } else {
          self.el.style.transform = 'translateY(0px)';
        }
      });
    });
  };

  this.attachTriggerClose = function () {
    var self = _this;

    var revealClose = _this.el.querySelector('.revealable-close');

    revealClose.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.style.overflow = 'auto';
      self.isOpen = false; // TODO: Conditional width

      var theWidth;

      if (window.innerWidth >= 768) {
        theWidth = self.el.offsetWidth + 'px';
      } else {
        theWidth = '100%';
      }

      if (window.innerWidth >= 768) {
        self.el.style.transform = 'translateX(' + theWidth + ')';
      } else {
        self.el.style.transform = 'translateY(' + theWidth + ')';
      }
    });
  };
}

window.revealable = new Revealable();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Revealable());
/******/ })()
;