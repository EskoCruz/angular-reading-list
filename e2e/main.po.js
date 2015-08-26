/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.contEl = element(by.css('.container'));
  this.h1El = this.contEl.element(by.css('h1'));
  //this.imgEl = this.contEl.element(by.css('img'));
  this.thumbnailEls = element(by.css('body')).all(by.repeater('book in main.books'));
};

module.exports = new MainPage();
