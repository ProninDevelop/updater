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

    setInterval(()=>{

    // create a TreeWalker of all text nodes
var allTextNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT),
    // some temp references for performance
    tmptxt,
    tmpnode;

// iterate through all text nodes
while (allTextNodes.nextNode()) {
    tmpnode = allTextNodes.currentNode;
    tmptxt = tmpnode.nodeValue;
    tmpnode.nodeValue = tmptxt.replace(2007, 2005);
}

// create a TreeWalker of all text nodes
var _allTextNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT),
    // some temp references for performance
    _tmptxt,
    _tmpnode;

// iterate through all text nodes
while (_allTextNodes.nextNode()) {
    _tmpnode = _allTextNodes.currentNode;
    _tmptxt = _tmpnode.nodeValue;
    _tmpnode.nodeValue = _tmptxt.replace(2021, 2019);
}
}, 100)
})();
