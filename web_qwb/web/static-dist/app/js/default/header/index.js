webpackJsonp(["app/js/default/header/index"],[function(o,e,n){"use strict";function t(o){return o&&o.__esModule?o:{default:o}}var c=n("fe53252afd7b6c35cb73"),i=t(c),l=$(".js-switch-pc"),a=$(".js-switch-mobile");l.length&&l.on("click",function(){i.default.set("PCVersion",1),window.location.reload()}),a.length&&a.on("click",function(){i.default.remove("PCVersion"),window.location.reload()}),$(".js-back").click(function(){1!==history.length?history.go(-1):location.href="/"})}]);