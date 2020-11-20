/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/DOMmanager.ts":
/*!***************************!*\
  !*** ./src/DOMmanager.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DOMManager; });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/tools.ts\");\n\r\nclass DOMManager {\r\n    static deselectToolButtons() {\r\n        for (let i = 0; i < this.tools.length; i++) {\r\n            const el = this.tools[i];\r\n            el.classList.remove(\"tool-selected\");\r\n        }\r\n    }\r\n    static addToolButtonListener(listener) {\r\n        for (let i = 0; i < this.tools.length; i++) {\r\n            const el = this.tools[i];\r\n            el.addEventListener(\"mousedown\", event => {\r\n                this.deselectToolButtons();\r\n                el.classList.add(\"tool-selected\");\r\n                const toolStr = el.dataset.toolType;\r\n                const tool = _tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"][toolStr];\r\n                listener(tool);\r\n            }, false);\r\n        }\r\n    }\r\n    static updateInfo(item) {\r\n        const x = document.querySelectorAll(\"[data-info-name='x']\")[0];\r\n        const y = document.querySelectorAll(\"[data-info-name='y']\")[0];\r\n        const width = document.querySelectorAll(\"[data-info-name='width']\")[0];\r\n        const height = document.querySelectorAll(\"[data-info-name='height']\")[0];\r\n        const r = document.querySelectorAll(\"[data-info-name='r']\")[0];\r\n        const g = document.querySelectorAll(\"[data-info-name='g']\")[0];\r\n        const b = document.querySelectorAll(\"[data-info-name='b']\")[0];\r\n        const a = document.querySelectorAll(\"[data-info-name='a']\")[0];\r\n        if (item === undefined) {\r\n            x.innerText = \"0\";\r\n            y.innerText = \"0\";\r\n            width.innerText = \"0\";\r\n            height.innerText = \"0\";\r\n            r.innerText = \"0\";\r\n            g.innerText = \"0\";\r\n            b.innerText = \"0\";\r\n            a.innerText = \"0\";\r\n        }\r\n        else {\r\n            const { pos, dims } = item.getTransform().get();\r\n            const fill = item.getFillColor();\r\n            const stroke = item.getStrokeColor();\r\n            x.innerText = pos.getX().toString();\r\n            y.innerText = pos.getY().toString();\r\n            width.innerText = dims.getX().toString();\r\n            height.innerText = dims.getY().toString();\r\n            r.innerText = fill.getR().toString();\r\n            g.innerText = fill.getG().toString();\r\n            b.innerText = fill.getB().toString();\r\n            a.innerText = fill.getA().toString();\r\n        }\r\n    }\r\n}\r\nDOMManager.tools = document.getElementsByClassName(\"tool\");\r\n\n\n//# sourceURL=webpack:///./src/DOMmanager.ts?");

/***/ }),

/***/ "./src/action/action.ts":
/*!******************************!*\
  !*** ./src/action/action.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Action; });\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user */ \"./src/user.ts\");\n/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transform */ \"./src/transform.ts\");\n\r\n\r\nclass Action {\r\n    constructor(type) {\r\n        this.type = type;\r\n        this.info = { originPos: _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMouse().getVirtualPos() };\r\n    }\r\n    getType() {\r\n        return this.type;\r\n    }\r\n    setType(type) {\r\n        this.type = type;\r\n    }\r\n    getRawInfo() {\r\n        return this.info;\r\n    }\r\n    getRect() {\r\n        const mousePos = _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMouse().getVirtualPos();\r\n        const { originPos } = this.info;\r\n        const dims = mousePos.sub(originPos);\r\n        return new _transform__WEBPACK_IMPORTED_MODULE_1__[\"default\"](originPos, dims);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/action/action.ts?");

/***/ }),

/***/ "./src/action/actionHandler.ts":
/*!*************************************!*\
  !*** ./src/action/actionHandler.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ActionHandler; });\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user */ \"./src/user.ts\");\n/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionType */ \"./src/action/actionType.ts\");\n\r\n\r\nclass ActionHandler {\r\n    static addEventListener(action, listener) {\r\n        this.listeners[action] = listener;\r\n    }\r\n    static executeListeners() {\r\n        const action = _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAction();\r\n        const listener = this.listeners[action.getType()];\r\n        listener(action);\r\n    }\r\n}\r\nActionHandler.listeners = {\r\n    [_actionType__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Nothing]: (action) => { },\r\n    [_actionType__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BoxBlueprint]: (action) => { },\r\n    [_actionType__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BoxCreate]: (action) => { },\r\n    [_actionType__WEBPACK_IMPORTED_MODULE_1__[\"default\"].CircleBlueprint]: (action) => { },\r\n    [_actionType__WEBPACK_IMPORTED_MODULE_1__[\"default\"].CircleCreate]: (action) => { },\r\n    [_actionType__WEBPACK_IMPORTED_MODULE_1__[\"default\"].TextBlueprint]: (action) => { },\r\n    [_actionType__WEBPACK_IMPORTED_MODULE_1__[\"default\"].TextCreate]: (action) => { },\r\n    [_actionType__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ImageBlueprint]: (action) => { },\r\n    [_actionType__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ImageCreate]: (action) => { },\r\n    [_actionType__WEBPACK_IMPORTED_MODULE_1__[\"default\"].TableBlueprint]: (action) => { },\r\n    [_actionType__WEBPACK_IMPORTED_MODULE_1__[\"default\"].TableCreate]: (action) => { },\r\n    [_actionType__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Resize]: (action) => { },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/action/actionHandler.ts?");

/***/ }),

/***/ "./src/action/actionType.ts":
/*!**********************************!*\
  !*** ./src/action/actionType.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ActionType;\r\n(function (ActionType) {\r\n    ActionType[ActionType[\"Nothing\"] = 0] = \"Nothing\";\r\n    ActionType[ActionType[\"BoxBlueprint\"] = 1] = \"BoxBlueprint\";\r\n    ActionType[ActionType[\"BoxCreate\"] = 2] = \"BoxCreate\";\r\n    ActionType[ActionType[\"CircleBlueprint\"] = 3] = \"CircleBlueprint\";\r\n    ActionType[ActionType[\"CircleCreate\"] = 4] = \"CircleCreate\";\r\n    ActionType[ActionType[\"TextBlueprint\"] = 5] = \"TextBlueprint\";\r\n    ActionType[ActionType[\"TextCreate\"] = 6] = \"TextCreate\";\r\n    ActionType[ActionType[\"ImageBlueprint\"] = 7] = \"ImageBlueprint\";\r\n    ActionType[ActionType[\"ImageCreate\"] = 8] = \"ImageCreate\";\r\n    ActionType[ActionType[\"TableBlueprint\"] = 9] = \"TableBlueprint\";\r\n    ActionType[ActionType[\"TableCreate\"] = 10] = \"TableCreate\";\r\n    ActionType[ActionType[\"Resize\"] = 11] = \"Resize\";\r\n})(ActionType || (ActionType = {}));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActionType);\r\n\n\n//# sourceURL=webpack:///./src/action/actionType.ts?");

/***/ }),

/***/ "./src/color.ts":
/*!**********************!*\
  !*** ./src/color.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Color; });\nclass Color {\r\n    constructor(r, g, b, a = 1) {\r\n        this.r = r;\r\n        this.g = g;\r\n        this.b = b;\r\n        this.a = a;\r\n    }\r\n    getR() {\r\n        return this.r;\r\n    }\r\n    getG() {\r\n        return this.g;\r\n    }\r\n    getB() {\r\n        return this.b;\r\n    }\r\n    getA() {\r\n        return this.a;\r\n    }\r\n    toArray() {\r\n        return [this.r, this.g, this.b, this.a];\r\n    }\r\n    toRGBAString() {\r\n        return `rgba(${this.r},${this.g},${this.b},${this.a})`;\r\n    }\r\n}\r\nColor.CLEAR = new Color(0, 0, 0, 0);\r\n\n\n//# sourceURL=webpack:///./src/color.ts?");

/***/ }),

/***/ "./src/item/box.ts":
/*!*************************!*\
  !*** ./src/item/box.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Box; });\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item/item.ts\");\n\r\nclass Box extends _item__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(transform) {\r\n        super(transform);\r\n    }\r\n    draw(ctx) {\r\n        this.setStyling(ctx);\r\n        Box.drawBlueprints(this.transform, ctx);\r\n    }\r\n}\r\nBox.drawBlueprints = (transform, ctx) => {\r\n    const { pos, dims } = transform.get();\r\n    ctx.fillRect(pos.getX(), pos.getY(), dims.getX(), dims.getY());\r\n    ctx.strokeRect(pos.getX(), pos.getY(), dims.getX(), dims.getY());\r\n};\r\n\n\n//# sourceURL=webpack:///./src/item/box.ts?");

/***/ }),

/***/ "./src/item/circle.ts":
/*!****************************!*\
  !*** ./src/item/circle.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Circle; });\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item/item.ts\");\n\r\nclass Circle extends _item__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(transform) {\r\n        super(transform);\r\n    }\r\n    draw(ctx) {\r\n        this.setStyling(ctx);\r\n        Circle.drawBlueprints(this.transform, ctx);\r\n    }\r\n}\r\nCircle.drawBlueprints = (transform, ctx) => {\r\n    const { pos, dims } = transform.get();\r\n    ctx.beginPath();\r\n    ctx.ellipse(pos.getX() + dims.getX() / 2, pos.getY() + dims.getY() / 2, dims.getX() / 2, dims.getY() / 2, 0, 0, Math.PI * 2);\r\n    ctx.closePath();\r\n    ctx.fill();\r\n    ctx.stroke();\r\n};\r\n\n\n//# sourceURL=webpack:///./src/item/circle.ts?");

/***/ }),

/***/ "./src/item/item.ts":
/*!**************************!*\
  !*** ./src/item/item.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Item; });\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color */ \"./src/color.ts\");\n\r\nclass Item {\r\n    constructor(transform, fillColor = Item.DEFAULT_FILL_COLOR, strokeColor = Item.DEFAULT_STROKE_COLOR) {\r\n        this.transform = transform;\r\n        this.fillColor = fillColor;\r\n        this.strokeColor = strokeColor;\r\n        this.fillColorEnabled = true;\r\n        this.strokeColorEnabled = false;\r\n        Item.list.push(this);\r\n    }\r\n    static remove(item) {\r\n        const index = this.list.indexOf(item);\r\n        this.list.splice(index, 1);\r\n    }\r\n    static iterate(iter) {\r\n        for (let i = 0; i < this.list.length; i++) {\r\n            iter(this.list[i]);\r\n        }\r\n    }\r\n    setStyling(ctx) {\r\n        if (this.fillColorEnabled) {\r\n            ctx.fillStyle = this.fillColor.toRGBAString();\r\n        }\r\n        else {\r\n            ctx.fillStyle = _color__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CLEAR.toRGBAString();\r\n        }\r\n        if (this.strokeColorEnabled) {\r\n            ctx.strokeStyle = this.strokeColor.toRGBAString();\r\n        }\r\n        else {\r\n            ctx.strokeStyle = _color__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CLEAR.toRGBAString();\r\n        }\r\n    }\r\n    getTransform() {\r\n        return this.transform;\r\n    }\r\n    setTransform(transform) {\r\n        this.transform = transform;\r\n    }\r\n    setFillColor(color) {\r\n        this.fillColor = color;\r\n    }\r\n    setStrokeColor(color) {\r\n        this.strokeColor = color;\r\n    }\r\n    getFillColor() {\r\n        return this.fillColor;\r\n    }\r\n    getStrokeColor() {\r\n        return this.strokeColor;\r\n    }\r\n    hasFillColor() {\r\n        return this.fillColorEnabled;\r\n    }\r\n    hasStrokeColor() {\r\n        return this.strokeColorEnabled;\r\n    }\r\n}\r\nItem.BLUEPRINT_COLOR = new _color__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 0, 0.3);\r\nItem.DEFAULT_FILL_COLOR = new _color__WEBPACK_IMPORTED_MODULE_0__[\"default\"](70, 70, 70);\r\nItem.DEFAULT_STROKE_COLOR = new _color__WEBPACK_IMPORTED_MODULE_0__[\"default\"](40, 40, 40);\r\nItem.list = [];\r\n\n\n//# sourceURL=webpack:///./src/item/item.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/user.ts\");\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools */ \"./src/tools.ts\");\n/* harmony import */ var _action_actionType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action/actionType */ \"./src/action/actionType.ts\");\n/* harmony import */ var _item_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item/item */ \"./src/item/item.ts\");\n/* harmony import */ var _item_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item/box */ \"./src/item/box.ts\");\n/* harmony import */ var _DOMmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMmanager */ \"./src/DOMmanager.ts\");\n/* harmony import */ var _action_actionHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action/actionHandler */ \"./src/action/actionHandler.ts\");\n/* harmony import */ var _item_circle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item/circle */ \"./src/item/circle.ts\");\n/* harmony import */ var _resizeBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resizeBox */ \"./src/resizeBox.ts\");\n/* harmony import */ var _nonItem_nonItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nonItem/nonItem */ \"./src/nonItem/nonItem.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst canvas = document.getElementsByClassName(\"page\")[0];\r\nconst ctx = canvas.getContext(\"2d\");\r\nfunction updateSelected() {\r\n    const mousePos = mouse.getVirtualPos();\r\n    let selected;\r\n    _item_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"].iterate(item => {\r\n        if (item.getTransform().isCollidingVector(mousePos)) {\r\n            selected = item;\r\n        }\r\n    });\r\n    _resizeBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"].init(selected);\r\n    _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setSelected(selected);\r\n}\r\nconst mouse = _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMouse();\r\nmouse.onDown(event => {\r\n    if (_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTool() === _tools__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Pointer) {\r\n        const isResizing = _resizeBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"].checkNodeSelect();\r\n        if (isResizing) {\r\n            _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newAction(_action_actionType__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Resize);\r\n        }\r\n        else {\r\n            updateSelected();\r\n        }\r\n    }\r\n    else if (_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTool() === _tools__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Box) {\r\n        _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newAction(_action_actionType__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BoxBlueprint);\r\n    }\r\n    else if (_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTool() === _tools__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Circle) {\r\n        _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newAction(_action_actionType__WEBPACK_IMPORTED_MODULE_2__[\"default\"].CircleBlueprint);\r\n    }\r\n});\r\nmouse.onUp(event => {\r\n    if (_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAction().getType() === _action_actionType__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BoxBlueprint)\r\n        _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newAction(_action_actionType__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BoxCreate, true);\r\n    else if (_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAction().getType() === _action_actionType__WEBPACK_IMPORTED_MODULE_2__[\"default\"].CircleBlueprint)\r\n        _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newAction(_action_actionType__WEBPACK_IMPORTED_MODULE_2__[\"default\"].CircleCreate, true);\r\n    else if (_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAction().getType() === _action_actionType__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Resize)\r\n        _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newAction(_action_actionType__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Nothing);\r\n});\r\nmouse.addEventListeners(canvas);\r\n_DOMmanager__WEBPACK_IMPORTED_MODULE_5__[\"default\"].addToolButtonListener(tool => {\r\n    _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setTool(tool);\r\n});\r\nfunction drawItems() {\r\n    _item_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"].iterate(item => {\r\n        item.draw(ctx);\r\n    });\r\n}\r\nfunction drawNonItems() {\r\n    _nonItem_nonItem__WEBPACK_IMPORTED_MODULE_9__[\"default\"].iterate(nonItem => {\r\n        nonItem.draw(ctx);\r\n    });\r\n}\r\n_action_actionHandler__WEBPACK_IMPORTED_MODULE_6__[\"default\"].addEventListener(_action_actionType__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Resize, actions => {\r\n    _resizeBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"].update();\r\n});\r\n_action_actionHandler__WEBPACK_IMPORTED_MODULE_6__[\"default\"].addEventListener(_action_actionType__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BoxBlueprint, action => {\r\n    const transform = action.getRect();\r\n    ctx.fillStyle = _item_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"].BLUEPRINT_COLOR.toRGBAString();\r\n    _item_box__WEBPACK_IMPORTED_MODULE_4__[\"default\"].drawBlueprints(transform, ctx);\r\n});\r\n_action_actionHandler__WEBPACK_IMPORTED_MODULE_6__[\"default\"].addEventListener(_action_actionType__WEBPACK_IMPORTED_MODULE_2__[\"default\"].CircleBlueprint, action => {\r\n    const transform = action.getRect();\r\n    ctx.fillStyle = _item_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"].BLUEPRINT_COLOR.toRGBAString();\r\n    _item_circle__WEBPACK_IMPORTED_MODULE_7__[\"default\"].drawBlueprints(transform, ctx);\r\n});\r\n_action_actionHandler__WEBPACK_IMPORTED_MODULE_6__[\"default\"].addEventListener(_action_actionType__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BoxCreate, action => {\r\n    const transform = action.getRect();\r\n    new _item_box__WEBPACK_IMPORTED_MODULE_4__[\"default\"](transform);\r\n    _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newAction(_action_actionType__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Nothing);\r\n});\r\n_action_actionHandler__WEBPACK_IMPORTED_MODULE_6__[\"default\"].addEventListener(_action_actionType__WEBPACK_IMPORTED_MODULE_2__[\"default\"].CircleCreate, action => {\r\n    const transform = action.getRect();\r\n    new _item_circle__WEBPACK_IMPORTED_MODULE_7__[\"default\"](transform);\r\n    _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newAction(_action_actionType__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Nothing);\r\n});\r\nfunction main() {\r\n    document.getElementById(\"debug\").innerText = `Action=${_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAction().getType().toString()}`;\r\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n    _DOMmanager__WEBPACK_IMPORTED_MODULE_5__[\"default\"].updateInfo(_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSelected());\r\n    drawItems();\r\n    drawNonItems();\r\n    _resizeBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"].draw(ctx);\r\n    _action_actionHandler__WEBPACK_IMPORTED_MODULE_6__[\"default\"].executeListeners();\r\n    window.requestAnimationFrame(main);\r\n}\r\nmain();\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/nonItem/nonItem.ts":
/*!********************************!*\
  !*** ./src/nonItem/nonItem.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NonItem; });\nclass NonItem {\r\n    constructor() {\r\n        NonItem.list.push(this);\r\n    }\r\n    static remove(nonItem) {\r\n        const index = this.list.indexOf(nonItem);\r\n        this.list.splice(index, 1);\r\n    }\r\n    static iterate(iter) {\r\n        for (let i = 0; i < this.list.length; i++) {\r\n            iter(this.list[i]);\r\n        }\r\n    }\r\n    draw(ctx) { }\r\n}\r\nNonItem.list = [];\r\n\n\n//# sourceURL=webpack:///./src/nonItem/nonItem.ts?");

/***/ }),

/***/ "./src/resizeBox.ts":
/*!**************************!*\
  !*** ./src/resizeBox.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResizeBox; });\n/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ \"./src/vector.ts\");\n/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform */ \"./src/transform.ts\");\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color */ \"./src/color.ts\");\n/* harmony import */ var _item_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item/box */ \"./src/item/box.ts\");\n/* harmony import */ var _item_circle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item/circle */ \"./src/item/circle.ts\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user */ \"./src/user.ts\");\n/* harmony import */ var _resizeRules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resizeRules */ \"./src/resizeRules.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass ResizeBox {\r\n    static initPointPair() {\r\n        this.pointPair = this.item.getTransform().getPointPair();\r\n    }\r\n    static getNodes() {\r\n        const { pointPair } = this;\r\n        const posA = pointPair[0];\r\n        const posB = pointPair[1];\r\n        const dims = posB.sub(posA);\r\n        return [\r\n            new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](posA.getX(), posA.getY()),\r\n            new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](posA.getX() + dims.getX() / 2, posA.getY()),\r\n            new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](posA.getX() + dims.getX(), posA.getY()),\r\n            new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](posA.getX() + dims.getX(), posA.getY() + dims.getY() / 2),\r\n            new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](posA.getX() + dims.getX(), posA.getY() + dims.getY()),\r\n            new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](posA.getX() + dims.getX() / 2, posA.getY() + dims.getY()),\r\n            new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](posA.getX(), posA.getY() + dims.getY()),\r\n            new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](posA.getX(), posA.getY() + dims.getY() / 2)\r\n        ];\r\n    }\r\n    static init(item) {\r\n        if (item !== undefined) {\r\n            this.enabled = true;\r\n            this.item = item;\r\n            this.initPointPair();\r\n        }\r\n        else {\r\n            this.enabled = false;\r\n        }\r\n    }\r\n    static checkNodeSelect() {\r\n        if (!this.enabled)\r\n            return;\r\n        const nodes = this.getNodes();\r\n        const mousePos = _user__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getMouse().getVirtualPos();\r\n        for (let i = 0; i < nodes.length; i++) {\r\n            const node = nodes[i];\r\n            if (mousePos.dist(node) < this.NODE_SELECT_RADIUS) {\r\n                this.activeNode = i;\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    static conformItem() {\r\n        const transform = _transform__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fromPointPair(this.pointPair);\r\n        this.item.setTransform(transform);\r\n    }\r\n    static update() {\r\n        if (!this.enabled)\r\n            return;\r\n        const node = this.activeNode;\r\n        const pair = this.pointPair;\r\n        const mousePos = _user__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getMouse().getVirtualPos();\r\n        const rule = _resizeRules__WEBPACK_IMPORTED_MODULE_6__[\"indexedResizeRules\"][node];\r\n        switch (rule) {\r\n            case _resizeRules__WEBPACK_IMPORTED_MODULE_6__[\"ResizeRules\"].axay:\r\n                pair[0] = mousePos.clone();\r\n                break;\r\n            case _resizeRules__WEBPACK_IMPORTED_MODULE_6__[\"ResizeRules\"].ay:\r\n                pair[0].setY(mousePos.getY());\r\n                break;\r\n            case _resizeRules__WEBPACK_IMPORTED_MODULE_6__[\"ResizeRules\"].aybx:\r\n                pair[0].setY(mousePos.getY());\r\n                pair[1].setX(mousePos.getX());\r\n                break;\r\n            case _resizeRules__WEBPACK_IMPORTED_MODULE_6__[\"ResizeRules\"].bx:\r\n                pair[1].setX(mousePos.getX());\r\n                break;\r\n            case _resizeRules__WEBPACK_IMPORTED_MODULE_6__[\"ResizeRules\"].bxby:\r\n                pair[1] = mousePos.clone();\r\n                break;\r\n            case _resizeRules__WEBPACK_IMPORTED_MODULE_6__[\"ResizeRules\"].by:\r\n                pair[1].setY(mousePos.getY());\r\n                break;\r\n            case _resizeRules__WEBPACK_IMPORTED_MODULE_6__[\"ResizeRules\"].axby:\r\n                pair[0].setX(mousePos.getX());\r\n                pair[1].setY(mousePos.getY());\r\n                break;\r\n            case _resizeRules__WEBPACK_IMPORTED_MODULE_6__[\"ResizeRules\"].ax:\r\n                pair[0].setX(mousePos.getX());\r\n                break;\r\n        }\r\n        this.conformItem();\r\n    }\r\n    static draw(ctx) {\r\n        if (!this.enabled)\r\n            return;\r\n        const transform = _transform__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fromPointPair(this.pointPair);\r\n        const nodes = this.getNodes();\r\n        ctx.fillStyle = _color__WEBPACK_IMPORTED_MODULE_2__[\"default\"].CLEAR.toRGBAString();\r\n        ctx.strokeStyle = \"rgb(90, 150, 252)\";\r\n        ctx.lineWidth = 1;\r\n        _item_box__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawBlueprints(transform, ctx);\r\n        for (let i = 0; i < nodes.length; i++) {\r\n            const node = nodes[i].sub(new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3));\r\n            const transform = new _transform__WEBPACK_IMPORTED_MODULE_1__[\"default\"](node, new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](6));\r\n            ctx.fillStyle = \"rgb(255, 255, 255)\";\r\n            ctx.lineWidth = 2;\r\n            _item_circle__WEBPACK_IMPORTED_MODULE_4__[\"default\"].drawBlueprints(transform, ctx);\r\n        }\r\n    }\r\n}\r\nResizeBox.NODE_SELECT_RADIUS = 20;\r\nResizeBox.enabled = false;\r\n\n\n//# sourceURL=webpack:///./src/resizeBox.ts?");

/***/ }),

/***/ "./src/resizeRules.ts":
/*!****************************!*\
  !*** ./src/resizeRules.ts ***!
  \****************************/
/*! exports provided: ResizeRules, indexedResizeRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResizeRules\", function() { return ResizeRules; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"indexedResizeRules\", function() { return indexedResizeRules; });\nvar ResizeRules;\r\n(function (ResizeRules) {\r\n    ResizeRules[ResizeRules[\"axay\"] = 0] = \"axay\";\r\n    ResizeRules[ResizeRules[\"ay\"] = 1] = \"ay\";\r\n    ResizeRules[ResizeRules[\"aybx\"] = 2] = \"aybx\";\r\n    ResizeRules[ResizeRules[\"bx\"] = 3] = \"bx\";\r\n    ResizeRules[ResizeRules[\"bxby\"] = 4] = \"bxby\";\r\n    ResizeRules[ResizeRules[\"by\"] = 5] = \"by\";\r\n    ResizeRules[ResizeRules[\"axby\"] = 6] = \"axby\";\r\n    ResizeRules[ResizeRules[\"ax\"] = 7] = \"ax\";\r\n})(ResizeRules || (ResizeRules = {}));\r\nconst indexedResizeRules = [\r\n    ResizeRules.axay,\r\n    ResizeRules.ay,\r\n    ResizeRules.aybx,\r\n    ResizeRules.bx,\r\n    ResizeRules.bxby,\r\n    ResizeRules.by,\r\n    ResizeRules.axby,\r\n    ResizeRules.ax\r\n];\r\n\r\n\n\n//# sourceURL=webpack:///./src/resizeRules.ts?");

/***/ }),

/***/ "./src/tools.ts":
/*!**********************!*\
  !*** ./src/tools.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Tools;\r\n(function (Tools) {\r\n    Tools[Tools[\"Pointer\"] = 0] = \"Pointer\";\r\n    Tools[Tools[\"Box\"] = 1] = \"Box\";\r\n    Tools[Tools[\"Circle\"] = 2] = \"Circle\";\r\n    Tools[Tools[\"Text\"] = 3] = \"Text\";\r\n    Tools[Tools[\"Image\"] = 4] = \"Image\";\r\n    Tools[Tools[\"Table\"] = 5] = \"Table\";\r\n})(Tools || (Tools = {}));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tools);\r\n\n\n//# sourceURL=webpack:///./src/tools.ts?");

/***/ }),

/***/ "./src/transform.ts":
/*!**************************!*\
  !*** ./src/transform.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Transform; });\n/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ \"./src/vector.ts\");\n\r\nclass Transform {\r\n    constructor(pos, dims) {\r\n        this.pos = pos;\r\n        this.dims = dims;\r\n        this.ensureCoherence();\r\n    }\r\n    static fromVector(vector) {\r\n        return new Transform(vector, _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ZERO);\r\n    }\r\n    static fromPointPair(arr) {\r\n        const pos = arr[0];\r\n        const dims = arr[1].sub(arr[0]);\r\n        return new Transform(pos, dims);\r\n    }\r\n    ensureDimensionPositivity() {\r\n        if (this.dims.getX() < 0) {\r\n            this.dims.setX(Math.abs(this.dims.getX()));\r\n            this.pos = new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.pos.getX() - this.dims.getX(), this.pos.getY());\r\n        }\r\n        if (this.dims.getY() < 0) {\r\n            this.dims.setY(Math.abs(this.dims.getY()));\r\n            this.pos = new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.pos.getX(), this.pos.getY() - this.dims.getY());\r\n        }\r\n    }\r\n    ensureCoherence() {\r\n        this.ensureDimensionPositivity();\r\n    }\r\n    setPos(pos) {\r\n        this.pos = pos;\r\n    }\r\n    setDims(dims) {\r\n        this.dims = dims;\r\n    }\r\n    get() {\r\n        return { pos: this.pos.clone(), dims: this.dims.clone() };\r\n    }\r\n    getPointPair() {\r\n        const { pos, dims } = this;\r\n        return [pos.clone(), pos.add(dims)];\r\n    }\r\n    isColliding(transform) {\r\n        const { pos, dims } = this;\r\n        const posB = transform.get().pos;\r\n        const dimsB = transform.get().dims;\r\n        return (pos.getX() < posB.getX() + dimsB.getX() && pos.getX() + dims.getX() > posB.getX()\r\n            && pos.getY() < posB.getY() + dimsB.getY() && pos.getY() + dims.getY() > posB.getY());\r\n    }\r\n    isCollidingVector(vector) {\r\n        return this.isColliding(Transform.fromVector(vector));\r\n    }\r\n    clone() {\r\n        return new Transform(this.pos.clone(), this.dims.clone());\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/transform.ts?");

/***/ }),

/***/ "./src/user.ts":
/*!*********************!*\
  !*** ./src/user.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/tools.ts\");\n/* harmony import */ var _action_actionType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action/actionType */ \"./src/action/actionType.ts\");\n/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector */ \"./src/vector.ts\");\n/* harmony import */ var _action_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action/action */ \"./src/action/action.ts\");\n\r\n\r\n\r\n\r\nconst emptyFunction = () => { };\r\nclass Mouse {\r\n    constructor() {\r\n        this.events = {\r\n            move: emptyFunction,\r\n            down: emptyFunction,\r\n            up: emptyFunction,\r\n        };\r\n        this.isDown = false;\r\n        this.pos = _vector__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ZERO;\r\n        this.virtualDisplacement = _vector__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ZERO;\r\n    }\r\n    addEventListeners(canvas) {\r\n        canvas.addEventListener(\"mousemove\", event => {\r\n            this.pos = new _vector__WEBPACK_IMPORTED_MODULE_2__[\"default\"](event.offsetX, event.offsetY);\r\n            this.events.move(event);\r\n        }, false);\r\n        canvas.addEventListener(\"mousedown\", event => {\r\n            this.isDown = true;\r\n            this.events.down(event);\r\n        }, false);\r\n        canvas.addEventListener(\"mouseup\", event => {\r\n            this.isDown = false;\r\n            this.events.up(event);\r\n        }, false);\r\n    }\r\n    getVirtualPos() {\r\n        return this.pos.add(this.virtualDisplacement);\r\n    }\r\n    getTruePos() {\r\n        return this.pos;\r\n    }\r\n    virtuallyDisplaceX(displacement) {\r\n        this.virtualDisplacement.setX(displacement);\r\n    }\r\n    virtuallyDisplaceY(displacement) {\r\n        this.virtualDisplacement.setY(displacement);\r\n    }\r\n    resetVirtualDisplacement() {\r\n        this.virtualDisplacement = _vector__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ZERO;\r\n    }\r\n    onMove(event) {\r\n        this.events.move = event;\r\n    }\r\n    onDown(event) {\r\n        this.events.down = event;\r\n    }\r\n    onUp(event) {\r\n        this.events.up = event;\r\n    }\r\n}\r\nclass User {\r\n    static getMouse() {\r\n        return this.mouse;\r\n    }\r\n    static getTool() {\r\n        return this.tool;\r\n    }\r\n    static getAction() {\r\n        return this.action;\r\n    }\r\n    static getSelected() {\r\n        return this.selected;\r\n    }\r\n    static setTool(tool) {\r\n        this.tool = tool;\r\n    }\r\n    static setSelected(item) {\r\n        this.selected = item;\r\n    }\r\n    static newAction(actionType, keepInfo = false) {\r\n        if (keepInfo) {\r\n            this.action.setType(actionType);\r\n        }\r\n        else {\r\n            this.action = new _action_action__WEBPACK_IMPORTED_MODULE_3__[\"default\"](actionType);\r\n        }\r\n    }\r\n}\r\nUser.DEFAULT_TOOL = _tools__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Pointer;\r\nUser.RESIZE_NODE_RADIUS = 20;\r\nUser.mouse = new Mouse();\r\nUser.tool = User.DEFAULT_TOOL;\r\nUser.action = new _action_action__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_action_actionType__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Nothing);\r\n\n\n//# sourceURL=webpack:///./src/user.ts?");

/***/ }),

/***/ "./src/vector.ts":
/*!***********************!*\
  !*** ./src/vector.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector; });\nclass Vector {\r\n    constructor(x, y = x) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    add(vector) {\r\n        return new Vector(this.x + vector.getX(), this.y + vector.getY());\r\n    }\r\n    sub(vector) {\r\n        return new Vector(this.x - vector.getX(), this.y - vector.getY());\r\n    }\r\n    mult(vector) {\r\n        return new Vector(this.x * vector.getX(), this.y * vector.getY());\r\n    }\r\n    div(vector) {\r\n        return new Vector(this.x / vector.getX(), this.y / vector.getY());\r\n    }\r\n    abs() {\r\n        return new Vector(Math.abs(this.x), Math.abs(this.y));\r\n    }\r\n    getMag() {\r\n        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));\r\n    }\r\n    normalized() {\r\n        const mag = this.getMag();\r\n        let vector = this.clone();\r\n        vector = vector.mult(new Vector(mag));\r\n        return vector;\r\n    }\r\n    dist(vector) {\r\n        return this.sub(vector).abs().getMag();\r\n    }\r\n    newMag(mag) {\r\n        let vector = this.clone().normalized();\r\n        vector.x *= mag;\r\n        vector.y *= mag;\r\n        return vector;\r\n    }\r\n    setX(value) {\r\n        this.x = value;\r\n    }\r\n    setY(value) {\r\n        this.y = value;\r\n    }\r\n    getX() {\r\n        return this.x;\r\n    }\r\n    getY() {\r\n        return this.y;\r\n    }\r\n    clone() {\r\n        return new Vector(this.x, this.y);\r\n    }\r\n}\r\nVector.ZERO = new Vector(0);\r\n\n\n//# sourceURL=webpack:///./src/vector.ts?");

/***/ })

/******/ });