// ==UserScript==
// @name         Fix qwe
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Replaces on qwe
// @author       Bard
// @match        *
// @match        */*
// @grant        none
// ==/UserScript==

(function() {
        setInterval(()=>{document.body.innerHTML = document.body.innerHTML.replace("2007", "2005")}, 100)
})();
