(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{149:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return useVerticalScrollInfo})),__webpack_require__.d(__webpack_exports__,"a",(function(){return useTimer})),__webpack_require__.d(__webpack_exports__,"c",(function(){return useWatchGeolocationPermissions}));__webpack_require__(63),__webpack_require__(3),__webpack_require__(8),__webpack_require__(7),__webpack_require__(13),__webpack_require__(12),__webpack_require__(9),__webpack_require__(11),__webpack_require__(10),__webpack_require__(6),__webpack_require__(18);var react=__webpack_require__(0),react_default=__webpack_require__.n(react);__webpack_require__(930),__webpack_require__(89);__webpack_require__(896),__webpack_require__(48);__webpack_require__(215),__webpack_require__(460),__webpack_require__(927);function common_slicedToArray(arr,i){return function common_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function common_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function common_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return common_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return common_arrayLikeToArray(o,minLen)}(arr,i)||function common_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function common_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__(487);var identity=__webpack_require__(932);function getScrollInfo(target){var inEndPos=!1,inStartPos=!1,scrollValue=0,elHeight=0,scrollHeight=0;return target&&("pageYOffset"in target?(scrollValue=target.pageYOffset,elHeight=target.outerHeight,scrollHeight=target.outerHeight):(scrollValue=target.scrollTop,elHeight=target.clientHeight,scrollHeight=target.scrollHeight),inEndPos=elHeight+scrollValue===scrollHeight,inStartPos=0===scrollValue),{inStartPos:inStartPos,inEndPos:inEndPos,value:scrollValue}}function useVerticalScrollInfo(callback){var triggerOnElementChange=arguments.length>1&&void 0!==arguments[1]&&arguments[1],disposeRef=react_default.a.useRef(),runListener=react_default.a.useCallback((function(element){if(!element)return identity.a;triggerOnElementChange&&callback(getScrollInfo(element));var scrollHandler=function scrollHandler(){return callback(getScrollInfo(element))};return element.addEventListener("scroll",scrollHandler),function(){return element.removeEventListener("scroll",scrollHandler)}}),[callback,triggerOnElementChange]);return react_default.a.useEffect((function(){return function(){return disposeRef.current&&disposeRef.current()}}),[]),react_default.a.useCallback((function(el){disposeRef.current&&disposeRef.current(),disposeRef.current=runListener(el)}),[runListener])}__webpack_require__(25);var isNil=__webpack_require__(926);function useTimer(_ref){var finisher=_ref.finisher,tickHandler=_ref.tickHandler,initialValue=_ref.initialValue,interval=_ref.interval,onSuccess=_ref.onSuccess,forceUpdate=function useForceUpdate(){var updateState=common_slicedToArray(Object(react.useState)({}),2)[1];return Object(react.useCallback)((function(){return updateState({})}),[])}(),timerRef=Object(react.useRef)(null),valueRef=Object(react.useRef)(initialValue()||0),start=Object(react.useCallback)((function(seconds){clearInterval(timerRef.current),valueRef.current=Object(isNil.a)(seconds)?initialValue():seconds,forceUpdate(),finisher(valueRef.current)?onSuccess&&onSuccess():timerRef.current=setInterval((function(){valueRef.current=tickHandler(valueRef.current),forceUpdate(),finisher(valueRef.current)&&(clearInterval(timerRef.current),onSuccess&&onSuccess())}),interval)}),[finisher,forceUpdate,tickHandler,initialValue,interval,onSuccess]),stop=Object(react.useCallback)((function(){onSuccess&&onSuccess(),clearInterval(timerRef.current)}),[onSuccess]);return Object(react.useEffect)((function(){return valueRef.current=initialValue(),function(){return clearInterval(timerRef.current)}}),[]),{value:valueRef.current,start:start,stop:stop}}__webpack_require__(73);__webpack_require__(201),__webpack_require__(28),__webpack_require__(901),__webpack_require__(51),__webpack_require__(74),__webpack_require__(16),__webpack_require__(313),__webpack_require__(60);__webpack_require__(312);__webpack_require__(925);__webpack_require__(928),__webpack_require__(929),__webpack_require__(933);function useWatchGeolocationPermissions_slicedToArray(arr,i){return function useWatchGeolocationPermissions_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useWatchGeolocationPermissions_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function useWatchGeolocationPermissions_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return useWatchGeolocationPermissions_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useWatchGeolocationPermissions_arrayLikeToArray(o,minLen)}(arr,i)||function useWatchGeolocationPermissions_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useWatchGeolocationPermissions_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function useWatchGeolocationPermissions(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ones=_ref.ones,permissionStatusRef=Object(react.useRef)(),_useState=Object(react.useState)({granted:null,denied:null,prompt:null}),_useState2=useWatchGeolocationPermissions_slicedToArray(_useState,2),permissions=_useState2[0],setPermissions=_useState2[1],setPromptPermission=function setPromptPermission(){return setPermissions({granted:!1,denied:!1,prompt:!0})},setGrantedPermission=function setGrantedPermission(){return setPermissions({granted:!0,denied:!1,prompt:!1})},setDeniedPermission=function setDeniedPermission(){return setPermissions({granted:!1,denied:!0,prompt:!1})};function onChangeGeolocationPermission(){"prompt"===this.state&&setPromptPermission(),"denied"===this.state&&setDeniedPermission(),"granted"===this.state&&setGrantedPermission()}Object(react.useEffect)((function(){return navigator.permissions.query({name:"geolocation"}).then((function(permissionStatus){onChangeGeolocationPermission.call(permissionStatus),ones||(permissionStatus.onchange=onChangeGeolocationPermission,permissionStatusRef.current=permissionStatus)})),function(){permissionStatusRef.current&&(permissionStatusRef.current.onchange=null)}}),[]);var isReceivedState=function isReceivedState(){return null!==permissions.denied&&null!==permissions.granted&&null!==permissions.prompt};return Object.assign({},permissions,{receivedState:isReceivedState()})}},232:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(41);function ForceUnmountingComponent(_ref){var children=_ref.children,DemoComponent=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return children}),[{}]);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DemoComponent,{})}ForceUnmountingComponent.displayName="ForceUnmountingComponent",__webpack_exports__.a=ForceUnmountingComponent;try{ForceUnmountingComponent.displayName="ForceUnmountingComponent",ForceUnmountingComponent.__docgenInfo={description:"",displayName:"ForceUnmountingComponent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/storyHelpers/ForceUnmountingComponent.tsx#ForceUnmountingComponent"]={docgenInfo:ForceUnmountingComponent.__docgenInfo,name:"ForceUnmountingComponent",path:"src/utils/storyHelpers/ForceUnmountingComponent.tsx#ForceUnmountingComponent"})}catch(__react_docgen_typescript_loader_error){}},509:function(module,exports,__webpack_require__){__webpack_require__(510),__webpack_require__(671),__webpack_require__(672),__webpack_require__(907),__webpack_require__(908),__webpack_require__(913),__webpack_require__(914),__webpack_require__(912),__webpack_require__(909),__webpack_require__(915),__webpack_require__(910),__webpack_require__(911),module.exports=__webpack_require__(868)},577:function(module,exports){},672:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(365)},868:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(365).configure)([__webpack_require__(869),__webpack_require__(870)],module,!1)}).call(this,__webpack_require__(172)(module))},869:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=869},870:function(module,exports,__webpack_require__){var map={"./stories/useTimer/index.stories.tsx":916,"./stories/useVerticalScrollInfo/index.stories.tsx":904,"./stories/useWatchGeolocationPermissions/index.stories.tsx":905};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=870},904:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"UseVerticalScrollInfo",(function(){return UseVerticalScrollInfo}));__webpack_require__(302),__webpack_require__(16),__webpack_require__(63),__webpack_require__(3),__webpack_require__(8),__webpack_require__(7),__webpack_require__(13),__webpack_require__(12),__webpack_require__(9),__webpack_require__(11),__webpack_require__(10),__webpack_require__(6),__webpack_require__(18);var react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(0),ramda__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(917),_hooks__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(149),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(41);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Demo=function Demo(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)({}),2),result=_useState2[0],setResult=_useState2[1],init=Object(_hooks__WEBPACK_IMPORTED_MODULE_15__.b)(setResult);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{ref:init,style:{overflowY:"scroll",height:"100px",border:"1px solid red"},children:Object(ramda__WEBPACK_IMPORTED_MODULE_14__.a)((function(i){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{children:i})}),30)}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{children:["Result: ",JSON.stringify(result)]})]})};Demo.displayName="Demo",__webpack_exports__.default={title:"Hooks/useVerticalScroll",component:Demo};var Template=function Template(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(Demo,{})};Template.displayName="Template";var UseVerticalScrollInfo=Template.bind({});UseVerticalScrollInfo.args={},UseVerticalScrollInfo.storyName="useVerticalScroll",UseVerticalScrollInfo.parameters=Object.assign({storySource:{source:"() => <Demo />"}},UseVerticalScrollInfo.parameters)},905:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"useWatchGeolocationPermissionsInfo",(function(){return useWatchGeolocationPermissionsInfo}));__webpack_require__(16),__webpack_require__(302),__webpack_require__(63),__webpack_require__(3),__webpack_require__(8),__webpack_require__(7),__webpack_require__(13),__webpack_require__(12),__webpack_require__(9),__webpack_require__(11),__webpack_require__(10),__webpack_require__(6),__webpack_require__(18);var react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(0),_hooks__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(149),_utils_storyHelpers_ForceUnmountingComponent__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(232),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(41);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Demo=function Demo(_ref){var ones=_ref.ones,_useWatchGeolocationP=Object(_hooks__WEBPACK_IMPORTED_MODULE_14__.c)({ones:ones}),denied=_useWatchGeolocationP.denied,granted=_useWatchGeolocationP.granted,prompt=_useWatchGeolocationP.prompt,receivedState=_useWatchGeolocationP.receivedState,_useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)(null),2),state=_useState2[0],setState=_useState2[1],_useState4=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)(null),2),error=_useState4[0],setError=_useState4[1];return Object(react__WEBPACK_IMPORTED_MODULE_13__.useEffect)((function(){return navigator.geolocation.getCurrentPosition((function(position){setState(position),setError(null)}),(function(error){setError(error),setState(null)}))}),[denied,granted,prompt,receivedState]),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{children:[denied&&"Геолокация запрещена",granted&&"Геолокация разрешена",prompt&&"Ожидание пользователя",!prompt&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{children:[state&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("span",{children:["latitude: ",null==state?void 0:state.coords.latitude," longitude:",null==state?void 0:state.coords.longitude]}),error&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span",{children:null==error?void 0:error.message})]})]})};Demo.displayName="Demo",__webpack_exports__.default={title:"Hooks/useWatchGeolocationPermissions",component:Demo,argTypes:{ones:{name:"Изменение разрешения геолокации произойдет один раз при маунте компонента"}}};var Template=function Template(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_utils_storyHelpers_ForceUnmountingComponent__WEBPACK_IMPORTED_MODULE_15__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(Demo,Object.assign({},props))})};Template.displayName="Template";var useWatchGeolocationPermissionsInfo=Template.bind({});useWatchGeolocationPermissionsInfo.args={ones:!1},useWatchGeolocationPermissionsInfo.storyName="useWatchGeolocationPermissions",useWatchGeolocationPermissionsInfo.parameters=Object.assign({storySource:{source:"(props) => {\n  return (\n    <ForceUnmountingComponent>\n      <Demo {...props} />\n    </ForceUnmountingComponent>\n  );\n}"}},useWatchGeolocationPermissionsInfo.parameters)},916:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"useTimerInfo",(function(){return useTimerInfo}));__webpack_require__(16),__webpack_require__(302);var react=__webpack_require__(0),hooks=__webpack_require__(149);function selectControl(options){return{control:{type:"select",options:options}}}function rangeControl(min,max,step){return{control:{type:"range",mim:min,max:max,step:step}}}try{selectControl.displayName="selectControl",selectControl.__docgenInfo={description:"",displayName:"selectControl",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/storyHelpers/controls.tsx#selectControl"]={docgenInfo:selectControl.__docgenInfo,name:"selectControl",path:"src/utils/storyHelpers/controls.tsx#selectControl"})}catch(__react_docgen_typescript_loader_error){}var ForceUnmountingComponent=__webpack_require__(232),jsx_runtime=__webpack_require__(41),index_stories_Demo=function Demo(_ref){var addedValue=_ref.addedValue,_initialValue=_ref.initialValue,interval=_ref.interval,finishValue=_ref.finishValue,_useTimer=Object(hooks.a)({interval:interval,finisher:function finisher(value){return value>=finishValue},initialValue:function initialValue(){return _initialValue},onSuccess:function onSuccess(){},tickHandler:function tickHandler(value){return value+addedValue}}),value=_useTimer.value,start=_useTimer.start;_useTimer.stop;return Object(react.useEffect)((function(){return start()}),[]),Object(jsx_runtime.jsx)("div",{children:value})};index_stories_Demo.displayName="Demo";__webpack_exports__.default={title:"Hooks/useTimer",component:index_stories_Demo,argTypes:{interval:Object.assign({name:"Интервал изменения счетчика",defaultValue:1e3},rangeControl(100,1e4,50)),initialValue:Object.assign({name:"Начальное значение",defaultValue:0},rangeControl(0,100,1)),addedValue:Object.assign({name:"Прибавляемое значение",defaultValue:1},rangeControl(0,10,1)),finishValue:Object.assign({name:"Значение, при достижении которого счетчик остановится",defaultValue:10},rangeControl(10,500,1))}};var index_stories_Template=function Template(props){return Object(jsx_runtime.jsx)(ForceUnmountingComponent.a,{children:Object(jsx_runtime.jsx)(index_stories_Demo,Object.assign({},props))})};index_stories_Template.displayName="Template";var useTimerInfo=index_stories_Template.bind({});useTimerInfo.args={},useTimerInfo.storyName="useTimer",useTimerInfo.parameters=Object.assign({storySource:{source:"(props) => {\n  return (\n    <ForceUnmountingComponent>\n      <Demo {...props} />\n    </ForceUnmountingComponent>\n  );\n}"}},useTimerInfo.parameters)}},[[509,2,3]]]);