"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[179],{598:function(e,t,r){var n=r(294),o=r(745);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){var n,o,l;n=e,o=t,l=r[t],(o=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}(o))in n?Object.defineProperty(n,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[o]=l})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=function(e,t){switch(t.type){case 0:return[].concat(function(e){if(Array.isArray(e))return i(e)}(r=e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[t.newTask]);case 1:return e.filter((function(e){return e.id!==t.taskId}));case 2:return e.map((function(e){return e.id===t.taskId?c(c({},e),{},{title:t.newTitle}):e}));case 3:return e.map((function(e){return e.id===t.taskId?c(c({},e),{},{completed:!e.completed}):e}));default:return e}var r};function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,l,c=[],i=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{if(!i&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f=function(){var e=s(n.useReducer(u,[]),2),t=e[0],r=e[1],o=s(n.useState("all"),2),a=o[0],l=o[1],c=t.filter((function(e){return e.completed})),i=t.filter((function(e){return!e.completed}));return n.createElement("main",{className:"my-5 max-w-md mx-auto px-4"},n.createElement("h1",{className:"text-xl"},"Tasks"),n.createElement("ul",{role:"menu",className:"flex gap-2 overflow-auto py-2 pl-1","aria-label":"Filter tasks"},["all","completed","uncompleted"].map((function(e,r){return n.createElement("li",{role:"menuitemradio","aria-checked":a===e,tabIndex:0,className:"py-1 px-4 text-sm rounded-full cursor-pointer select-none".concat(a===e?" bg-primary-accent-light":" bg-surface-1 hover:bg-surface-2"),key:r,onClick:function(){return l(e)},onKeyDown:function(t){return(" "===t.key||"Enter"===t.key)&&l(e)}},e.charAt(0).toUpperCase().concat(e.slice(1)),n.createElement("strong",{className:"ml-2"},("all"===e?t:"completed"===e?c:i).length))}))),n.createElement("ul",null,("all"===a?t:"completed"===a?c:i).map((function(e){return n.createElement("li",{key:e.id,className:"flex gap-2 items-center mt-2"},n.createElement("input",{type:"checkbox",className:"border-main w-4 h-4 rounded-sm",checked:e.completed,onChange:function(){return r({type:3,taskId:e.id})},"aria-label":e.completed?"mark task as uncompleted":"mark task as completed"}),n.createElement("input",{placeholder:"To-do",className:"flex-1 bg-surface border-0 p-0 focus:outline-0".concat(e.completed?" line-through":""),value:e.title,onChange:function(t){return r({type:2,taskId:e.id,newTitle:t.target.value})}}),n.createElement("button",{className:"flex items-center justify-center bg-surface-1 hover:bg-surface-2 w-8 h-8 rounded-full border-0 cursor-pointer select-none",onClick:function(){return r({type:1,taskId:e.id})},"aria-label":"Delete task"},n.createElement("svg",{className:"opacity-75","aria-hidden":!0,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("g",{strokeWidth:"0"}),n.createElement("g",{strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("g",null,n.createElement("g",null,n.createElement("path",{d:"M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})," ")," "))))}))),n.createElement("button",{className:"flex select-none gap-2 mt-2 border-0 bg-surface text-primary-accent px-2 py-1 cursor-pointer",onClick:function(){return r({type:0,newTask:{id:(new Date).getTime().toString(),title:"",completed:"completed"===a}})}},n.createElement("span",{"aria-hidden":!0},"+"),n.createElement("span",null,"Add task")))};(0,o.s)(document.getElementById("app")).render(n.createElement(f,null))}},function(e){e.O(0,[514],(function(){return 598,e(e.s=598)})),e.O()}]);