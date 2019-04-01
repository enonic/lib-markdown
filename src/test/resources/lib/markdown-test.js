var assert = require('/lib/xp/testing.js');
var markdown = require('/lib/markdown.js');
var thymeleaf = require('/lib/thymeleaf');

function assertHtmlEquals(res, actual) {
    testInstance.assertHtmlEquals(resolve(res), actual);
}

exports.testRender = function () {
    var html = markdown.render('Hello *World*!');
    assert.assertEquals('<p>Hello <em>World</em>!</p>', html);
};

exports.testThymeleaf = function () {

    var model = {
        title: 'My Title',
        body: markdown.render('Hello *World*!')
    };

    var view = resolve('/view/thymeleaf1.html');
    var html = thymeleaf.render(view, model);

    assertHtmlEquals('/view/thymeleaf1-result.html', html);
};

exports.testThymeleafJsExec = function () {

    var model = {
        title: 'My Title',
        body: 'Hello *World*!',
        markdownToHtml: markdown.render
    };

    var view = resolve('/view/thymeleaf2.html');
    var html = thymeleaf.render(view, model);

    assertHtmlEquals('/view/thymeleaf2-result.html', html);
};
