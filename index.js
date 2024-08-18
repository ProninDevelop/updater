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

    alert(12);
    // create a TreeWalker of all text nodes
var allTextNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT),
    // some temp references for performance
    tmptxt,
    tmpnode,
    // compile the RE and cache the replace string, for performance
    cakeRE = /cake/g,
    replaceValue = "pie";

// iterate through all text nodes
while (allTextNodes.nextNode()) {
    tmpnode = allTextNodes.currentNode;
    tmptxt = tmpnode.nodeValue;
    tmpnode.nodeValue = tmptxt.replace(2007, 2005);
}

// create a TreeWalker of all text nodes
var allTextNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT),
    // some temp references for performance
    tmptxt,
    tmpnode,
    // compile the RE and cache the replace string, for performance
    cakeRE = /cake/g,
    replaceValue = "pie";

// iterate through all text nodes
while (allTextNodes.nextNode()) {
    tmpnode = allTextNodes.currentNode;
    tmptxt = tmpnode.nodeValue;
    tmpnode.nodeValue = tmptxt.replace(2021, 2019);
}

})();
