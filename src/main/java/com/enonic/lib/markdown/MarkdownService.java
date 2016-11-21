package com.enonic.lib.markdown;

import org.commonmark.node.Node;
import org.commonmark.parser.Parser;
import org.commonmark.renderer.html.HtmlRenderer;

public final class MarkdownService
{
    private final Parser parser;

    private final HtmlRenderer htmlRenderer;

    public MarkdownService()
    {
        this.parser = Parser.builder().build();
        this.htmlRenderer = HtmlRenderer.builder().build();
    }

    public String render( final String input )
    {
        final Node node = this.parser.parse( input );
        return this.htmlRenderer.render( node ).trim();
    }
}
