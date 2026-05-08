var assert = require('/lib/xp/testing');
var markdown = require('/lib/markdown.js');

exports.testRender = function () {
    var html = markdown.render('Hello *World*!');
    assert.assertEquals('<p>Hello <em>World</em>!</p>', html);
};
