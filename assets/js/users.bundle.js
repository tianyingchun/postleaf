"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){!function(e,r){"function"==typeof define&&define.amd?define(r):"object"===("undefined"==typeof n?"undefined":_typeof(n))?t.exports=r():e.NProgress=r()}(this,function(){function e(e,t,n){return e<t?t:e>n?n:e}function t(e){return 100*(-1+e)}function n(e,n,r){var o;return o="translate3d"===c.positionUsing?{transform:"translate3d("+t(e)+"%,0,0)"}:"translate"===c.positionUsing?{transform:"translate("+t(e)+"%,0)"}:{"margin-left":t(e)+"%"},o.transition="all "+n+"ms "+r,o}function r(e,t){var n="string"==typeof e?e:a(e);return n.indexOf(" "+t+" ")>=0}function o(e,t){var n=a(e),o=n+t;r(n,t)||(e.className=o.substring(1))}function i(e,t){var n,o=a(e);r(e,t)&&(n=o.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function a(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function s(e){e&&e.parentNode&&e.parentNode.removeChild(e)}var u={};u.version="0.2.0";var c=u.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};u.configure=function(e){var t,n;for(t in e)n=e[t],void 0!==n&&e.hasOwnProperty(t)&&(c[t]=n);return this},u.status=null,u.set=function(t){var r=u.isStarted();t=e(t,c.minimum,1),u.status=1===t?null:t;var o=u.render(!r),i=o.querySelector(c.barSelector),a=c.speed,s=c.easing;return o.offsetWidth,l(function(e){""===c.positionUsing&&(c.positionUsing=u.getPositioningCSS()),f(i,n(t,a,s)),1===t?(f(o,{transition:"none",opacity:1}),o.offsetWidth,setTimeout(function(){f(o,{transition:"all "+a+"ms linear",opacity:0}),setTimeout(function(){u.remove(),e()},a)},a)):setTimeout(e,a)}),this},u.isStarted=function(){return"number"==typeof u.status},u.start=function(){u.status||u.set(0);var e=function t(){setTimeout(function(){u.status&&(u.trickle(),t())},c.trickleSpeed)};return c.trickle&&e(),this},u.done=function(e){return e||u.status?u.inc(.3+.5*Math.random()).set(1):this},u.inc=function(t){var n=u.status;return n?("number"!=typeof t&&(t=(1-n)*e(Math.random()*n,.1,.95)),n=e(n+t,0,.994),u.set(n)):u.start()},u.trickle=function(){return u.inc(Math.random()*c.trickleRate)},function(){var e=0,t=0;u.promise=function(n){return n&&"resolved"!==n.state()?(0===t&&u.start(),e++,t++,n.always(function(){t--,0===t?(e=0,u.done()):u.set((e-t)/e)}),this):this}}(),u.render=function(e){if(u.isRendered())return document.getElementById("nprogress");o(document.documentElement,"nprogress-busy");var n=document.createElement("div");n.id="nprogress",n.innerHTML=c.template;var r,i=n.querySelector(c.barSelector),a=e?"-100":t(u.status||0),l=document.querySelector(c.parent);return f(i,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),c.showSpinner||(r=n.querySelector(c.spinnerSelector),r&&s(r)),l!=document.body&&o(l,"nprogress-custom-parent"),l.appendChild(n),n},u.remove=function(){i(document.documentElement,"nprogress-busy"),i(document.querySelector(c.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&s(e)},u.isRendered=function(){return!!document.getElementById("nprogress")},u.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var l=function(){function e(){var n=t.shift();n&&n(e)}var t=[];return function(n){t.push(n),1==t.length&&e()}}(),f=function(){function e(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})}function t(e){var t=document.body.style;if(e in t)return e;for(var n,r=o.length,i=e.charAt(0).toUpperCase()+e.slice(1);r--;)if(n=o[r]+i,n in t)return n;return e}function n(n){return n=e(n),i[n]||(i[n]=t(n))}function r(e,t,r){t=n(t),e.style[t]=r}var o=["Webkit","O","Moz","ms"],i={};return function(e,t){var n,o,i=arguments;if(2==i.length)for(n in t)o=t[n],void 0!==o&&t.hasOwnProperty(n)&&r(e,n,o);else r(e,i[1],i[2])}}();return u})},{}],2:[function(e,t,n){var r=e("nprogress");$(function(){var e=$("[data-search]").attr("data-action");$("#users").selectable({items:".card",multiple:!0,change:function(e){var t=$(this).selectable("getElements");$("[data-open], [data-edit]").prop("disabled",1!==e.length),$("[data-delete]").prop("disabled",0===e.length),$("#users").prop("hidden",0===t.length),$("#empty").prop("hidden",0!==t.length)},doubleClick:function(e,t){var n=$(t).attr("data-edit-action");n&&(location.href=n)}}).selectable("change"),$("main").on("click",function(e){$(e.target).parents().addBack().is(".card")||$("#users").selectable("selectNone")});var t="",n=void 0,o=void 0;$("[data-search]").on("change keyup paste",function(){var r=this.value,i=$("#users").selectable("value");clearTimeout(n),r!==t&&(n=setTimeout(function(){o&&o.abort(),o=$.ajax({url:e,type:"GET",data:{search:r,render:"userCards"}}).done(function(e){o=null,t=r,e.html&&$("#users").html(e.html).selectable("value",i)})},300))}),$("[data-open]").on("click",function(){var e=$("#users").selectable("getElements",!0)[0].getAttribute("data-open-action");e&&(location.href=e)}),$("[data-edit]").on("click",function(){var e=$("#users").selectable("getElements",!0)[0].getAttribute("data-edit-action");e&&(location.href=e)}),$("[data-delete]").on("click",function(){var e=$("#users").selectable("getElements",!0),t=$(this).attr("data-confirm"),n=e.length,o=0;$.alertable.confirm(t).then(function(){r.start(),$.each(e,function(e,t){var i=$(t).attr("data-value"),a=$(t).attr("data-delete-action");$.ajax({url:a,type:"DELETE"}).done(function(){var e=$("#users").selectable("getElements",i);$(e).parent().fadeOut({duration:300,complete:function(){$(this).remove(),$("#users").selectable("change")}})}).always(function(){return r.set(++o/n)})})})})})},{nprogress:1}]},{},[2]);