// ==UserScript==
// @name         Gosuslugi Year Fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Replaces "2007" with "2005" on gosuslugi.ru and its subdomains
// @author       Bard
// @match        https://gosuslugi.ru/*
// @match        https://lk.gosuslugi.ru/*
// @match        https://*.gosuslugi.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const targetYear = "2007";
    const replacementYear = "2005";

    function replaceYear() {
        const elements = document.querySelectorAll("*:not(script):not(style)");
        elements.forEach(element => {
            element.textContent = element.textContent.replace(targetYear, replacementYear);
        });
    }

    replaceYear();

    // Observe DOM changes for new content
    const observer = new MutationObserver(replaceYear);
    observer.observe(document.body, { childList: true, subtree: true });
})();
