(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{126:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(23);function ForceUnmountingComponent(_ref){var children=_ref.children,DemoComponent=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return children}),[{}]);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DemoComponent,{})}ForceUnmountingComponent.displayName="ForceUnmountingComponent",__webpack_exports__.a=ForceUnmountingComponent;try{ForceUnmountingComponent.displayName="ForceUnmountingComponent",ForceUnmountingComponent.__docgenInfo={description:"",displayName:"ForceUnmountingComponent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/storyHelpers/ForceUnmountingComponent.tsx#ForceUnmountingComponent"]={docgenInfo:ForceUnmountingComponent.__docgenInfo,name:"ForceUnmountingComponent",path:"src/utils/storyHelpers/ForceUnmountingComponent.tsx#ForceUnmountingComponent"})}catch(__react_docgen_typescript_loader_error){}},127:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return useVerticalScrollInfo})),__webpack_require__.d(__webpack_exports__,"a",(function(){return useChildrenMeasure})),__webpack_require__.d(__webpack_exports__,"b",(function(){return useTimer})),__webpack_require__.d(__webpack_exports__,"d",(function(){return useWatchGeolocationPermissions}));__webpack_require__(60),__webpack_require__(3),__webpack_require__(8),__webpack_require__(7),__webpack_require__(13),__webpack_require__(12),__webpack_require__(9),__webpack_require__(11),__webpack_require__(10),__webpack_require__(5),__webpack_require__(19);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=(__webpack_require__(960),__webpack_require__(92));__webpack_require__(915),__webpack_require__(52);__webpack_require__(232),__webpack_require__(189),__webpack_require__(956);function common_slicedToArray(arr,i){return function common_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function common_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function common_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return common_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return common_arrayLikeToArray(o,minLen)}(arr,i)||function common_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function common_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__(500);var identity=__webpack_require__(962);function getScrollInfo(target){var inEndPos=!1,inStartPos=!1,scrollValue=0,elHeight=0,scrollHeight=0;return target&&("pageYOffset"in target?(scrollValue=target.pageYOffset,elHeight=target.outerHeight,scrollHeight=target.outerHeight):(scrollValue=target.scrollTop,elHeight=target.clientHeight,scrollHeight=target.scrollHeight),inEndPos=elHeight+scrollValue===scrollHeight,inStartPos=0===scrollValue),{inStartPos:inStartPos,inEndPos:inEndPos,value:scrollValue}}function useVerticalScrollInfo(callback){var triggerOnElementChange=arguments.length>1&&void 0!==arguments[1]&&arguments[1],disposeRef=react_default.a.useRef(),runListener=react_default.a.useCallback((function(element){if(!element)return identity.a;triggerOnElementChange&&callback(getScrollInfo(element));var scrollHandler=function scrollHandler(){return callback(getScrollInfo(element))};return element.addEventListener("scroll",scrollHandler),function(){return element.removeEventListener("scroll",scrollHandler)}}),[callback,triggerOnElementChange]);return react_default.a.useEffect((function(){return function(){return disposeRef.current&&disposeRef.current()}}),[]),react_default.a.useCallback((function(el){disposeRef.current&&disposeRef.current(),disposeRef.current=runListener(el)}),[runListener])}__webpack_require__(26);function useChildrenMeasure_slicedToArray(arr,i){return function useChildrenMeasure_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useChildrenMeasure_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function useChildrenMeasure_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return useChildrenMeasure_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useChildrenMeasure_arrayLikeToArray(o,minLen)}(arr,i)||function useChildrenMeasure_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useChildrenMeasure_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function useChildrenMeasure(){var useResizeObserver=arguments.length>0&&void 0!==arguments[0]&&arguments[0],_React$useState=react_default.a.useState(null),_React$useState2=useChildrenMeasure_slicedToArray(_React$useState,2),measures=_React$useState2[0],setMeasures=_React$useState2[1],_React$useState3=react_default.a.useState(null),_React$useState4=useChildrenMeasure_slicedToArray(_React$useState3,2),relativeMeasures=_React$useState4[0],setRelativeMeasures=_React$useState4[1],elementRef=react_default.a.useRef(null),update=react_default.a.useCallback((function(){if(elementRef.current){var childrenRects=Object(esm.c)(elementRef.current.children).map((function(element){return element.getBoundingClientRect()})),parentRect=elementRef.current.getBoundingClientRect();setMeasures(childrenRects),setRelativeMeasures(childrenRects.map((function(childrenRect){var x=childrenRect.x-parentRect.x,y=childrenRect.y-parentRect.y;return{toJSON:function toJSON(){return""},width:childrenRect.width,height:childrenRect.height,x:x,y:y,left:x,top:y,bottom:y+childrenRect.height,right:x+childrenRect.width}})))}}),[]),initRef=react_default.a.useCallback((function(element){elementRef.current=element,element&&(useResizeObserver?new ResizeObserver(update).observe(element):update())}),[update,useResizeObserver]);return{measures:measures,relativeMeasures:relativeMeasures,initRef:initRef,update:update}}var isNil=__webpack_require__(955);function useTimer(_ref){var finisher=_ref.finisher,tickHandler=_ref.tickHandler,initialValue=_ref.initialValue,interval=_ref.interval,onSuccess=_ref.onSuccess,forceUpdate=function useForceUpdate(){var updateState=common_slicedToArray(Object(react.useState)({}),2)[1];return Object(react.useCallback)((function(){return updateState({})}),[])}(),timerRef=Object(react.useRef)(null),valueRef=Object(react.useRef)(initialValue()||0),start=Object(react.useCallback)((function(seconds){clearInterval(timerRef.current),valueRef.current=Object(isNil.a)(seconds)?initialValue():seconds,forceUpdate(),finisher(valueRef.current)?onSuccess&&onSuccess():timerRef.current=setInterval((function(){valueRef.current=tickHandler(valueRef.current),forceUpdate(),finisher(valueRef.current)&&(clearInterval(timerRef.current),onSuccess&&onSuccess())}),interval)}),[finisher,forceUpdate,tickHandler,initialValue,interval,onSuccess]),stop=Object(react.useCallback)((function(){onSuccess&&onSuccess(),clearInterval(timerRef.current)}),[onSuccess]);return Object(react.useEffect)((function(){return valueRef.current=initialValue(),function(){return clearInterval(timerRef.current)}}),[]),{value:valueRef.current,start:start,stop:stop}}__webpack_require__(76);__webpack_require__(217),__webpack_require__(32),__webpack_require__(922),__webpack_require__(55),__webpack_require__(77),__webpack_require__(16),__webpack_require__(328),__webpack_require__(64);__webpack_require__(473);__webpack_require__(954);__webpack_require__(957),__webpack_require__(958),__webpack_require__(963);function useWatchGeolocationPermissions_slicedToArray(arr,i){return function useWatchGeolocationPermissions_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useWatchGeolocationPermissions_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function useWatchGeolocationPermissions_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return useWatchGeolocationPermissions_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useWatchGeolocationPermissions_arrayLikeToArray(o,minLen)}(arr,i)||function useWatchGeolocationPermissions_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useWatchGeolocationPermissions_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function useWatchGeolocationPermissions(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ones=_ref.ones,permissionStatusRef=Object(react.useRef)(),_useState=Object(react.useState)({granted:null,denied:null,prompt:null}),_useState2=useWatchGeolocationPermissions_slicedToArray(_useState,2),permissions=_useState2[0],setPermissions=_useState2[1],setPromptPermission=function setPromptPermission(){return setPermissions({granted:!1,denied:!1,prompt:!0})},setGrantedPermission=function setGrantedPermission(){return setPermissions({granted:!0,denied:!1,prompt:!1})},setDeniedPermission=function setDeniedPermission(){return setPermissions({granted:!1,denied:!0,prompt:!1})};function onChangeGeolocationPermission(){"prompt"===this.state&&setPromptPermission(),"denied"===this.state&&setDeniedPermission(),"granted"===this.state&&setGrantedPermission()}Object(react.useEffect)((function(){return navigator.permissions.query({name:"geolocation"}).then((function(permissionStatus){onChangeGeolocationPermission.call(permissionStatus),ones||(permissionStatus.onchange=onChangeGeolocationPermission,permissionStatusRef.current=permissionStatus)})),function(){permissionStatusRef.current&&(permissionStatusRef.current.onchange=null)}}),[]);var isReceivedState=function isReceivedState(){return null!==permissions.denied&&null!==permissions.granted&&null!==permissions.prompt};return Object.assign({},permissions,{receivedState:isReceivedState()})}},524:function(module,exports,__webpack_require__){__webpack_require__(525),__webpack_require__(681),__webpack_require__(682),__webpack_require__(932),__webpack_require__(933),__webpack_require__(938),__webpack_require__(939),__webpack_require__(937),__webpack_require__(934),__webpack_require__(940),__webpack_require__(935),__webpack_require__(936),module.exports=__webpack_require__(883)},591:function(module,exports){},682:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(375)},883:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(375).configure)([__webpack_require__(884),__webpack_require__(885)],module,!1)}).call(this,__webpack_require__(226)(module))},884:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=884},885:function(module,exports,__webpack_require__){var map={"./stories/useChildrenWidthDetector/index.stories.tsx":941,"./stories/useTimer/index.stories.tsx":924,"./stories/useVanillaPopper/index.stories.tsx":942,"./stories/useVerticalScrollInfo/index.stories.tsx":929,"./stories/useWatchGeolocationPermissions/index.stories.tsx":930};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=885},924:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"useTimerInfo",(function(){return useTimerInfo}));__webpack_require__(16),__webpack_require__(184),__webpack_require__(0);var _hooks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(127),_utils_storyHelpers_controls__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(94),_utils_storyHelpers_ForceUnmountingComponent__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(126),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(23),Demo=function Demo(_ref){var addedValue=_ref.addedValue,_initialValue=_ref.initialValue,interval=_ref.interval,finishValue=_ref.finishValue,_useTimer=Object(_hooks__WEBPACK_IMPORTED_MODULE_3__.b)({interval:interval,finisher:function finisher(value){return value>=finishValue},initialValue:function initialValue(){return _initialValue},onSuccess:function onSuccess(){},tickHandler:function tickHandler(value){return value+addedValue}}),value=_useTimer.value,start=_useTimer.start,stop=_useTimer.stop;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{children:["Count: ",value]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:function onClick(){return start()},children:"start"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:stop,children:"stop"})]})};Demo.displayName="Demo",__webpack_exports__.default={title:"Hooks/useTimer",component:Demo,argTypes:{interval:Object.assign({name:"Интервал изменения счетчика",defaultValue:1e3},Object(_utils_storyHelpers_controls__WEBPACK_IMPORTED_MODULE_4__.c)(100,1e4,50)),initialValue:Object.assign({name:"Начальное значение",defaultValue:0},Object(_utils_storyHelpers_controls__WEBPACK_IMPORTED_MODULE_4__.c)(0,100,1)),addedValue:Object.assign({name:"Прибавляемое значение",defaultValue:1},Object(_utils_storyHelpers_controls__WEBPACK_IMPORTED_MODULE_4__.c)(0,10,1)),finishValue:Object.assign({name:"Значение, при достижении которого счетчик остановится",defaultValue:10},Object(_utils_storyHelpers_controls__WEBPACK_IMPORTED_MODULE_4__.c)(10,500,1))}};var Template=function Template(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_utils_storyHelpers_ForceUnmountingComponent__WEBPACK_IMPORTED_MODULE_5__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Demo,Object.assign({},props))})};Template.displayName="Template";var useTimerInfo=Template.bind({});useTimerInfo.args={},useTimerInfo.storyName="useTimer",useTimerInfo.parameters=Object.assign({storySource:{source:"(props) => {\r\n  return (\r\n    <ForceUnmountingComponent>\r\n      <Demo {...props} />\r\n    </ForceUnmountingComponent>\r\n  );\r\n}"}},useTimerInfo.parameters)},925:function(module,exports,__webpack_require__){var api=__webpack_require__(926),content=__webpack_require__(927);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},927:function(module,exports,__webpack_require__){(exports=__webpack_require__(928)(!1)).push([module.i,"\r\n.tooltip[data-popper-placement^='top'] > .arrow {\r\n    bottom: -4px;\r\n}\r\n\r\n.tooltip[data-popper-placement^='bottom'] > .arrow {\r\n    top: -4px;\r\n}\r\n\r\n.tooltip[data-popper-placement^='left'] > .arrow {\r\n    right: -4px;\r\n}\r\n\r\n.tooltip[data-popper-placement^='right'] > .arrow {\r\n    left: -4px;\r\n}\r\n",""]),module.exports=exports},929:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"UseVerticalScrollInfo",(function(){return UseVerticalScrollInfo}));__webpack_require__(184),__webpack_require__(16),__webpack_require__(60),__webpack_require__(3),__webpack_require__(8),__webpack_require__(7),__webpack_require__(13),__webpack_require__(12),__webpack_require__(9),__webpack_require__(11),__webpack_require__(10),__webpack_require__(5),__webpack_require__(19);var react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(0),ramda__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(943),_hooks__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(127),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(23);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Demo=function Demo(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)({}),2),result=_useState2[0],setResult=_useState2[1],init=Object(_hooks__WEBPACK_IMPORTED_MODULE_15__.c)(setResult);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{ref:init,style:{overflowY:"scroll",height:"100px",border:"1px solid red"},children:Object(ramda__WEBPACK_IMPORTED_MODULE_14__.a)((function(i){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{children:i})}),30)}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{children:["Result: ",JSON.stringify(result)]})]})};Demo.displayName="Demo",__webpack_exports__.default={title:"Hooks/useVerticalScroll",component:Demo,parameters:{componentSource:{code:"\n      useVerticalScrollInfo(callback: (args: {\n        inStartPos: boolean;\n        inEndPos: boolean;\n        value: number;\n      }) => void,\n      triggerOnElementChange = false): (el: (HTMLElement | Window | null)) => void",language:"typescript"}}};var Template=function Template(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(Demo,{})};Template.displayName="Template";var UseVerticalScrollInfo=Template.bind({});UseVerticalScrollInfo.args={},UseVerticalScrollInfo.storyName="useVerticalScroll",UseVerticalScrollInfo.parameters=Object.assign({storySource:{source:"() => <Demo />"}},UseVerticalScrollInfo.parameters)},930:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"useWatchGeolocationPermissionsInfo",(function(){return useWatchGeolocationPermissionsInfo}));__webpack_require__(16),__webpack_require__(184),__webpack_require__(60),__webpack_require__(3),__webpack_require__(8),__webpack_require__(7),__webpack_require__(13),__webpack_require__(12),__webpack_require__(9),__webpack_require__(11),__webpack_require__(10),__webpack_require__(5),__webpack_require__(19);var react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(0),_hooks__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(127),_utils_storyHelpers_ForceUnmountingComponent__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(126),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(23);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Demo=function Demo(_ref){var ones=_ref.ones,_useWatchGeolocationP=Object(_hooks__WEBPACK_IMPORTED_MODULE_14__.d)({ones:ones}),denied=_useWatchGeolocationP.denied,granted=_useWatchGeolocationP.granted,prompt=_useWatchGeolocationP.prompt,receivedState=_useWatchGeolocationP.receivedState,_useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)(null),2),state=_useState2[0],setState=_useState2[1],_useState4=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)(null),2),error=_useState4[0],setError=_useState4[1];return Object(react__WEBPACK_IMPORTED_MODULE_13__.useEffect)((function(){return navigator.geolocation.getCurrentPosition((function(position){setState(position),setError(null)}),(function(error){setError(error),setState(null)}))}),[denied,granted,prompt,receivedState]),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{children:[denied&&"Геолокация запрещена",granted&&"Геолокация разрешена",prompt&&"Ожидание пользователя",!prompt&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{children:[state&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("span",{children:["latitude: ",null==state?void 0:state.coords.latitude," longitude:",null==state?void 0:state.coords.longitude]}),error&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span",{children:null==error?void 0:error.message})]})]})};Demo.displayName="Demo",__webpack_exports__.default={title:"Hooks/useWatchGeolocationPermissions",component:Demo,argTypes:{ones:{name:"Изменение разрешения геолокации произойдет один раз при маунте компонента"}},parameters:{componentSource:{code:"\n      useWatchGeolocationPermissions({ ones }?: { ones?: boolean }):  {\n        granted: null | boolean; \n        denied: null | boolean;\n        prompt: null | boolean;\n        receivedState: null | boolean \n      }\n      ",language:"typescript"}}};var Template=function Template(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_utils_storyHelpers_ForceUnmountingComponent__WEBPACK_IMPORTED_MODULE_15__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(Demo,Object.assign({},props))})};Template.displayName="Template";var useWatchGeolocationPermissionsInfo=Template.bind({});useWatchGeolocationPermissionsInfo.args={ones:!1},useWatchGeolocationPermissionsInfo.storyName="useWatchGeolocationPermissions",useWatchGeolocationPermissionsInfo.parameters=Object.assign({storySource:{source:"(props) => {\r\n  return (\r\n    <ForceUnmountingComponent>\r\n      <Demo {...props} />\r\n    </ForceUnmountingComponent>\r\n  );\r\n}"}},useWatchGeolocationPermissionsInfo.parameters)},94:function(module,__webpack_exports__,__webpack_require__){"use strict";function selectControl(options){return{control:{type:"select",options:options}}}function numbersControl(min,max,step){return{control:{type:"number",mim:min,max:max,step:step}}}function rangeControl(min,max,step){return{control:{type:"range",mim:min,max:max,step:step}}}function booleanControl(){return{control:{type:"boolean"}}}__webpack_require__.d(__webpack_exports__,"d",(function(){return selectControl})),__webpack_require__.d(__webpack_exports__,"b",(function(){return numbersControl})),__webpack_require__.d(__webpack_exports__,"c",(function(){return rangeControl})),__webpack_require__.d(__webpack_exports__,"a",(function(){return booleanControl}));try{selectControl.displayName="selectControl",selectControl.__docgenInfo={description:"",displayName:"selectControl",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/storyHelpers/controls.tsx#selectControl"]={docgenInfo:selectControl.__docgenInfo,name:"selectControl",path:"src/utils/storyHelpers/controls.tsx#selectControl"})}catch(__react_docgen_typescript_loader_error){}},941:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"useChildrenWidthDetectorInfo",(function(){return useChildrenWidthDetectorInfo}));__webpack_require__(886),__webpack_require__(26),__webpack_require__(16),__webpack_require__(184),__webpack_require__(0);var ForceUnmountingComponent=__webpack_require__(126),jsx_runtime=__webpack_require__(23);function DebugComponent(_ref){var data=_ref.data;return Object(jsx_runtime.jsx)("pre",{style:{fontSize:10},children:JSON.stringify(data,null,2)})}DebugComponent.displayName="DebugComponent";try{DebugComponent.displayName="DebugComponent",DebugComponent.__docgenInfo={description:"",displayName:"DebugComponent",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/storyHelpers/DebugComponent.tsx#DebugComponent"]={docgenInfo:DebugComponent.__docgenInfo,name:"DebugComponent",path:"src/utils/storyHelpers/DebugComponent.tsx#DebugComponent"})}catch(__react_docgen_typescript_loader_error){}var controls=__webpack_require__(94),hooks=__webpack_require__(127),defaultElements=function defaultElements(){return new Array(5).fill(null)},index_stories_Demo=function Demo(props){var _useChildrenMeasure=Object(hooks.a)(props.useResizeObserver),update=_useChildrenMeasure.update,initRef=_useChildrenMeasure.initRef,measures=_useChildrenMeasure.measures;return Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("div",{ref:initRef,children:defaultElements().map((function(_,index){return Object(jsx_runtime.jsxs)("div",{children:["item ",index]})}))}),Object(jsx_runtime.jsx)(DebugComponent,{data:measures}),Object(jsx_runtime.jsx)("div",{onClick:update,style:{marginTop:20,cursor:"pointer",fontWeight:700},children:"Update widths"})]})};index_stories_Demo.displayName="Demo";var index_stories_Template=function Template(props){return Object(jsx_runtime.jsx)(ForceUnmountingComponent.a,{children:Object(jsx_runtime.jsx)(index_stories_Demo,Object.assign({},props))})};index_stories_Template.displayName="Template";__webpack_exports__.default={title:"Hooks/useChildrenWidthDetector",component:index_stories_Demo,argTypes:{useResizeObserver:Object.assign({name:"Использовать ResizeObserver",defaultValue:!0},Object(controls.a)())},parameters:{componentSource:{code:"\n      useChildrenWidthDetector(useResizeObserver?: boolean): { \n        widths: number[] | null,\n        initRef: (element: (HTMLElement | null)) => void,\n        update: () => void\n      }",language:"typescript"}}};var useChildrenWidthDetectorInfo=index_stories_Template.bind({});useChildrenWidthDetectorInfo.args={},useChildrenWidthDetectorInfo.storyName="useChildrenWidthDetector",useChildrenWidthDetectorInfo.parameters=Object.assign({storySource:{source:"(props) => {\r\n  return (\r\n    <ForceUnmountingComponent>\r\n      <Demo {...props} />\r\n    </ForceUnmountingComponent>\r\n  );\r\n}"}},useChildrenWidthDetectorInfo.parameters)},942:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"useVanillaPopperInfo",(function(){return useVanillaPopperInfo}));__webpack_require__(16),__webpack_require__(184),__webpack_require__(60),__webpack_require__(3),__webpack_require__(8),__webpack_require__(7),__webpack_require__(13),__webpack_require__(12),__webpack_require__(9),__webpack_require__(11),__webpack_require__(10),__webpack_require__(5),__webpack_require__(19);var react=__webpack_require__(0),lib_popper=__webpack_require__(959);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var EMPTY_MODIFIERS=[];var ForceUnmountingComponent=__webpack_require__(126),controls=__webpack_require__(94),jsx_runtime=(__webpack_require__(925),__webpack_require__(23));function index_stories_slicedToArray(arr,i){return function index_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function index_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function index_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return index_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return index_stories_arrayLikeToArray(o,minLen)}(arr,i)||function index_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function index_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var index_stories_Demo=function Demo(_ref){var _state$styles,_state$attributes,placement=_ref.placement,flip=_ref.flip,offset=_ref.offset,_useState2=index_stories_slicedToArray(Object(react.useState)(null),2),referenceElement=_useState2[0],setReferenceElement=_useState2[1],_useState4=index_stories_slicedToArray(Object(react.useState)(null),2),popperElement=_useState4[0],setPopperElement=_useState4[1],_useState6=index_stories_slicedToArray(Object(react.useState)(null),2),arrowElement=_useState6[0],setArrowElement=_useState6[1],_useVanillaPopper=function useVanillaPopper(reference,tooltip,options){var _useState2=_slicedToArray(Object(react.useState)(),2),popperInstance=_useState2[0],setPopperInstance=_useState2[1],popperOptions=Object(react.useMemo)((function(){return{onFirstUpdate:options.onFirstUpdate,placement:options.placement||"bottom",strategy:options.strategy||"absolute",modifiers:options.modifiers||EMPTY_MODIFIERS}}),[options.modifiers,options.placement,options.strategy,options.onFirstUpdate]);return Object(react.useLayoutEffect)((function(){if(reference&&tooltip){var popper=Object(lib_popper.a)(reference,tooltip,popperOptions);return setPopperInstance(popper),function(){return popper.destroy()}}}),[reference,tooltip,popperOptions]),{forceUpdate:popperInstance?popperInstance.forceUpdate:null,update:popperInstance?popperInstance.update:null,state:popperInstance?popperInstance.state:null}}(referenceElement,popperElement,{placement:placement,modifiers:Object(react.useMemo)((function(){return[{name:"computeStyles",options:{adaptive:!1}},{name:"flip",enabled:flip},{name:"hide",enabled:!1},{name:"offset",options:{offset:[0,offset]}},{name:"arrow",enabled:null!=arrowElement,options:{element:arrowElement}}]}),[arrowElement])}),state=_useVanillaPopper.state;return Object(jsx_runtime.jsxs)("div",{style:{width:"100%",height:"200vh",display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(jsx_runtime.jsx)("button",{type:"button",ref:setReferenceElement,children:"Reference element"}),Object(jsx_runtime.jsxs)("div",Object.assign({className:"tooltip",ref:setPopperElement,style:Object.assign({background:"#333",color:"white",padding:"50px",fontSize:"13px",borderRadius:"4px"},null==state||null===(_state$styles=state.styles)||void 0===_state$styles?void 0:_state$styles.popper)},null==state||null===(_state$attributes=state.attributes)||void 0===_state$attributes?void 0:_state$attributes.popper,{children:["Popper element",Object(jsx_runtime.jsx)("div",{className:"arrow",ref:setArrowElement,style:{backgroundColor:"#aaa",width:20,height:20}})]}))]})};index_stories_Demo.displayName="Demo";__webpack_exports__.default={title:"Hooks/useVanillaPopper",component:index_stories_Demo,argTypes:{placement:Object.assign({name:"Положение тултипа",defaultValue:"bottom"},Object(controls.d)(["top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end","auto","auto-start","auto-end","top","bottom","right","left"])),flip:Object.assign({name:"Будет ли поппер изменять свое положение сам",defaultValue:!0},Object(controls.a)()),offset:Object.assign({name:"Отступ от reference елемента",defaultValue:8},Object(controls.b)(0,100,1))},parameters:{componentSource:{code:"\n        useVanillaPopper(reference: HTMLElement | null, tooltip: HTMLElement | null, options: Options): {\n          state: PopperState | null;\n          forceUpdate: () => void;\n          update: () => Promise<Partial<State>>;\n        }",language:"typescript"}}};var index_stories_Template=function Template(props){return Object(jsx_runtime.jsx)(ForceUnmountingComponent.a,{children:Object(jsx_runtime.jsx)(index_stories_Demo,Object.assign({},props))})};index_stories_Template.displayName="Template";var useVanillaPopperInfo=index_stories_Template.bind({});useVanillaPopperInfo.args={},useVanillaPopperInfo.storyName="useVanillaPopper",useVanillaPopperInfo.parameters=Object.assign({storySource:{source:"(props) => {\r\n  return (\r\n    <ForceUnmountingComponent>\r\n      <Demo {...props} />\r\n    </ForceUnmountingComponent>\r\n  );\r\n}"}},useVanillaPopperInfo.parameters)}},[[524,2,3]]]);