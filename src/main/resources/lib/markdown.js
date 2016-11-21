/**
 * Library to render markdown to html.
 *
 * @namespace markdown
 */

// Create the markdown service.
var service = __.newBean('com.enonic.lib.markdown.MarkdownService');

/**
 * This method render markdown to html.
 *
 * @param {string} markdown Markdown to render.
 * @returns {string} Rendered HTML from markdown.
 */
exports.render = function (markdown) {
    return service.render(markdown);
};
