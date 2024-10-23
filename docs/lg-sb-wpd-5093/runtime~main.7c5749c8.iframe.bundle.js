(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({178:"row-gap-stories",229:"developer-stories-mdx",518:"validation-stories",645:"focus-stories",781:"margin-stories",887:"quick-action-stories",946:"side-nav-stories",1071:"icons-stories",1161:"card-stories",1367:"switch-stories",1428:"colours-stories-mdx",1442:"skeleton-stories",1642:"show-at-stories",1763:"hide-at-stories",2038:"overview-stories",2055:"welcome-stories-mdx",2184:"checkbox-stories",2213:"link-menu-stories",2295:"promo-card-stories",2335:"guide-stories-mdx",2423:"mixins-stories-mdx",2515:"details-stories",2520:"utils-stories-mdx",2649:"forms-design-stories-mdx",2745:"banner-stories",2801:"form-stories",2994:"data-point-stories",3023:"sr-alert-message-stories",3259:"tabs-stories",3322:"checkbox-group-stories",3399:"button-stories",3524:"feature-toggle-stories",3823:"alert-stories",4082:"progress-bar-stories",4111:"kebab-case-stories",4181:"welcome-stories",4507:"brand-icons-stories",4623:"pagination-stories",5062:"colours-stories",5869:"promotions-stories",5977:"table-stories",6096:"header-stories",6239:"accordion-stories",6324:"breadcrumb-stories",6486:"filter-multiple-stories",6666:"page-stories",6944:"date-field-stories",6962:"blockquote-stories",7015:"sort-code-stories",7101:"input-stories",7421:"spinner-stories",7463:"grid-stories",7514:"lists-stories",7589:"carousel-stories",7762:"modal-stories",7869:"primary-message-stories",7908:"overview-stories-mdx",7912:"blockquote-stories-mdx",7946:"variant-stories",7988:"tab-nav-bar-stories",8107:"filter-container-stories",8419:"heading-stories",8540:"camel-case-stories",8656:"layout-grid-and-spacing-stories-mdx",8683:"select-stories",8719:"link-stories",8885:"hero-img-stories",9007:"hero-stories",9191:"shadow-stories",9210:"segment-stories",9267:"writing-stories-mdx",9326:"footer-stories",9396:"separator-stories",9441:"button-group-stories",9575:"orientation-stories",9610:"filter-single-stories",9802:"padding-stories",9810:"typography-stories-mdx",9812:"typography-stories",9870:"progress-indicator-stories",9964:"radio-stories"}[chunkId]||chunkId)+"."+{13:"6164ef7d",178:"2b0e203f",229:"ad027424",518:"32ff7074",645:"26ea99e6",739:"d15ea902",781:"0a1099da",887:"ac3e8725",914:"77696343",946:"4cbd39cc",1071:"b6897ac3",1161:"5cbd5a2e",1367:"3705e1c0",1428:"4eca90a6",1433:"35881328",1442:"e1e62dc4",1642:"ad6af5b2",1763:"f1bcd698",2038:"fd57180e",2055:"b6ae5886",2184:"3a2e4742",2213:"b863ec15",2273:"1682c92e",2295:"9804d30c",2335:"5abcd19a",2348:"6d702733",2423:"05376534",2515:"ef1744c7",2520:"384544c8",2649:"63b5583d",2705:"548e2952",2745:"745100ed",2763:"5a6316cc",2801:"9b3a9750",2812:"cd9f301e",2994:"dcb60dc9",3023:"af51eb1a",3078:"98f5f0f0",3259:"8535f4e1",3322:"95d9650e",3399:"96869e66",3524:"9bee15f9",3823:"69cdec0b",3969:"7f5c5932",4082:"5767d0b6",4111:"f7ad6031",4151:"f5a515ef",4181:"26e75a00",4507:"5b560715",4599:"afdf7826",4620:"1c18b735",4623:"4e6801a9",4879:"172197bc",4920:"c8e035e1",5062:"ae1716de",5205:"53cd5ad9",5243:"82f95394",5252:"e7120fbc",5869:"a3e843d6",5944:"50d556a7",5977:"a510b727",6096:"94f74f67",6128:"356e464b",6239:"b8410533",6276:"7294de1d",6324:"fc1f6be8",6389:"f4ce1d23",6447:"158ff15e",6451:"0d41d351",6486:"0179de7f",6666:"bfe94753",6944:"769c814d",6962:"33993d28",7015:"6a77be66",7101:"6d9c702e",7139:"ab374b23",7340:"1368d832",7421:"6c49d796",7463:"ee3d9af4",7514:"47e5fa90",7589:"f1ddc4e1",7762:"14afa5d9",7869:"7522b041",7896:"e544cc33",7908:"d9ee0793",7912:"ba1b953b",7946:"9ad3184c",7988:"5a883710",8107:"55a6250d",8419:"cab3ae31",8540:"85701880",8656:"49aa549b",8683:"85d54c12",8719:"ab43c3dc",8885:"fd49f2f6",9007:"7bfc338b",9191:"911cf8f7",9210:"9759baaf",9267:"894950da",9326:"af4eb29c",9381:"73ef903c",9396:"67222bf2",9441:"9b2765e2",9489:"bb0865bf",9575:"538e4f97",9610:"22deade3",9716:"45241711",9802:"c35ae9b9",9810:"a94263e8",9812:"83d1b237",9870:"ab6b7c45",9953:"28ee0b51",9964:"deb6c8f5",9967:"0cfee0a2"}[chunkId]+".iframe.bundle.js"),__webpack_require__.miniCssF=chunkId=>{},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@legal-and-general/canopy:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@legal-and-general/canopy:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();