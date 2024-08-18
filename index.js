// ==UserScript==
// @name          	SCRIPT
// @description     SCRIPT DESCRIPTION
// @icon            https://raw.github.com/sepehr/userscript-SCRIPT/master/SCRIPT.png
//
// @author			Sepehr Lajevardi <me@sepehr.ws>
// @namespace       http://github.com/sepehr
// @downloadURL		https://raw.github.com/sepehr/userscript-SCRIPT/master/SCRIPT.user.js
//
// @license         GPLv3 - http://www.gnu.org/licenses/gpl-3.0.txt
// @copyright       Copyright (C) 2012, by Sepehr Lajevardi <me@sepehr.ws>
//
// @include         http://*.example.com/*
// @exclude         http://example.net/
// @match			http://*.example.com/*
//
// @require         http://code.jquery.com/jquery-1.8.0.min.js
//
// @version         1.0
// @updateURL		https://raw.github.com/sepehr/userscript-SCRIPT/master/SCRIPT.user.js
//
// @run-at			document-start|document-end
// @resource		resourceName	http://www.example.com/example.png
// @unwrap
// ==/UserScript==

/**
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * SCRIPT DESCRIPTION.
 *
 * @see http://wiki.greasespot.net/API_reference
 * @see http://wiki.greasespot.net/Metadata_Block
 */
(function() {	
	alert(1);
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
