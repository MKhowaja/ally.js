define(function defineDemoFocusableExpected(require) {
  'use strict';

  // This file contains all the selectors of focusable/index.html that we expect to be focusable

  return {
    name: 'expected',
    userAgent: 'Rodney\'s brain',
    "focusable": [
      "BODY",
      "[contenteditable]",
      "[contenteditable]:empty",
      "[contenteditable][tabindex=-1]",
      "[tabindex= +2]",
      "[tabindex=\"-1\"]{flexbox}",
      "[tabindex=+2]",
      "[tabindex=-1]",
      "[tabindex=3 ]",
      "[tabindex=3x]",
      "[tabindex=-2]",
      "[tabindex=0]",
      "[tabindex=1]",
      "area[href].upper",
      "area[href].lower",
      "a:has([ismap])",
      "a[tabindex=-1]:has([ismap])",
      "a:has([ismap][tabindex=-1])",
      "a > img[ismap][tabindex=-1]",
      "a[href=\"\"]",
      "a[href]",
      "a[href][tabindex=-1]",
      "audio[controls]",
      "audio[controls][tabindex=-1]",
      "a{flexbox}",
      "button[type=button]",
      "button[type=button][tabindex=-1]",
      "embed",
      "embed[tabindex=-1]",
      "iframe",
      "iframe[tabindex=-1]",
      "img[tabindex=-1] area[href].lower",
      "img[tabindex=-1] area[href].upper",
      "img[usemap][tabindex=-1]",
      "input[type=checkbox]",
      "input[type=checkbox][tabindex=-1]",
      "input[type=password]",
      "input[type=password][tabindex=-1]",
      "input[type=radio]",
      "input[type=radio][tabindex=-1]",
      "input[type=submit]",
      "input[type=submit][tabindex=-1]",
      "input[type=text]",
      "input[type=text][tabindex=-1]",
      "input[type=reset]",
      "input[type=reset][tabindex=-1]",
      "fieldset input",
      "keygen",
      "keygen[tabindex=-1]",
      "details summary",
      "details[tabindex=-1]",
      "details[tabindex=-1] summary",
      "details summary[tabindex=-1]",
      "details[open] summary",
      "details[open] a[href]",
      "link[itemprop][href]",
      "map.invalid-image area[href].lower",
      "map.invalid-image area[href].upper",
      "object[src=swf]",
      "object[src=swf][height=0]",
      "object[src=swf][tabindex=-1]",
      "object[src=svg]",
      "object[src=svg][height=0]",
      "object[src=svg][tabindex=-1]",
      "object[usemap]",
      "select",
      "select[tabindex=-1]",
      "span{user-modify}",
      "span{user-modify}[tabindex=-1]",
      "svg a[xlink|href]",
      "svg a[xlink|href][tabindex=-1]",
      "svg a[xlink|href][tabindex=0]",
      "svg[tabindex=-1]",
      "svg[tabindex=-1] a[xlink|href]",
      "table tbody tr td a",
      "table tbody tr{collapse} td a{visible}",
      "table tbody tr{collapse} td{visible} a",
      "textarea",
      "textarea[tabindex=-1]",
      "video[controls]",
      "video[controls][tabindex=-1]",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "canvas > input",
      "canvas > input[tabindex=-1]",
      "canvas > a",
      "canvas > a[tabindex=-1]",
      "canvas > [tabindex=0]",
      "canvas > [tabindex=-1]"
    ],
    "focusEvents": [
      "BODY",
      "[contenteditable]",
      "[contenteditable]:empty",
      "[contenteditable][tabindex=-1]",
      "[tabindex= +2]",
      "[tabindex=\"-1\"]{flexbox}",
      "[tabindex=+2]",
      "[tabindex=-1]",
      "[tabindex=3 ]",
      "[tabindex=3x]",
      "[tabindex=-2]",
      "[tabindex=0]",
      "[tabindex=1]",
      "area[href].upper",
      "area[href].lower",
      "a:has([ismap])",
      "a[tabindex=-1]:has([ismap])",
      "a:has([ismap][tabindex=-1])",
      "a > img[ismap][tabindex=-1]",
      "a[href=\"\"]",
      "a[href]",
      "a[href][tabindex=-1]",
      "audio[controls]",
      "audio[controls][tabindex=-1]",
      "a{flexbox}",
      "button[type=button]",
      "button[type=button][tabindex=-1]",
      "embed",
      "embed[tabindex=-1]",
      "iframe",
      "iframe[tabindex=-1]",
      "img[tabindex=-1] area[href].lower",
      "img[tabindex=-1] area[href].upper",
      "img[usemap][tabindex=-1]",
      "input[type=checkbox]",
      "input[type=checkbox][tabindex=-1]",
      "input[type=password]",
      "input[type=password][tabindex=-1]",
      "input[type=radio]",
      "input[type=radio][tabindex=-1]",
      "input[type=submit]",
      "input[type=submit][tabindex=-1]",
      "input[type=text]",
      "input[type=text][tabindex=-1]",
      "input[type=reset]",
      "input[type=reset][tabindex=-1]",
      "fieldset input",
      "keygen",
      "keygen[tabindex=-1]",
      "details summary",
      "details[tabindex=-1]",
      "details[tabindex=-1] summary",
      "details summary[tabindex=-1]",
      "details[open] summary",
      "details[open] a[href]",
      "link[itemprop][href]",
      "map.invalid-image area[href].lower",
      "map.invalid-image area[href].upper",
      "object[src=swf]",
      "object[src=swf][height=0]",
      "object[src=swf][tabindex=-1]",
      "object[src=svg]",
      "object[src=svg][height=0]",
      "object[src=svg][tabindex=-1]",
      "object[usemap]",
      "select",
      "select[tabindex=-1]",
      "span{user-modify}",
      "span{user-modify}[tabindex=-1]",
      "svg a[xlink|href]",
      "svg a[xlink|href][tabindex=-1]",
      "svg a[xlink|href][tabindex=0]",
      "svg[tabindex=-1]",
      "svg[tabindex=-1] a[xlink|href]",
      "table tbody tr td a",
      "table tbody tr{collapse} td a{visible}",
      "table tbody tr{collapse} td{visible} a",
      "textarea",
      "textarea[tabindex=-1]",
      "video[controls]",
      "video[controls][tabindex=-1]",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "canvas > input",
      "canvas > input[tabindex=-1]",
      "canvas > a",
      "canvas > a[tabindex=-1]",
      "canvas > [tabindex=0]",
      "canvas > [tabindex=-1]"
    ],
    "focusRedirection": [],
    "noFocusMethod": [],
    "tabOrder": [
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "[tabindex=3x]",
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=reset]",
      "select",
      "textarea",
      "button[type=button]",
      "a[href]",
      "a[href=\"\"]",
      "area[href].upper",
      "area[href].lower",
      "map.invalid-image area[href].upper",
      "map.invalid-image area[href].lower",
      "img[tabindex=-1] area[href].upper",
      "img[tabindex=-1] area[href].lower",
      "a:has([ismap])",
      "a:has([ismap][tabindex=-1])",
      "iframe",
      "audio[controls]",
      "a{flexbox}",
      "video[controls]",
      "keygen",
      "details summary",
      "details[tabindex=-1] summary",
      "details[open] summary",
      "details[open] a[href]",
      "link[itemprop][href]",
      "svg a[xlink|href]",
      "svg[tabindex=-1] a[xlink|href]",
      "svg a[xlink|href][tabindex=0]",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[tabindex=0]",
      "fieldset input",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}",
      "span{user-modify}",
      "canvas > input",
      "canvas > a",
      "canvas > [tabindex=0]"
    ],
    "ally": {
      "focusable": [],
      "tabOrder": [],
    },
    "jquery": {
      "focusable": [],
      "tabOrder": [],
    },
  };
});