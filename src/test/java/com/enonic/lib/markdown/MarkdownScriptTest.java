package com.enonic.lib.markdown;

import org.junit.jupiter.api.Test;

import com.enonic.xp.testing.ScriptTestSupport;

public class MarkdownScriptTest
    extends ScriptTestSupport
{
    @Test
    public void testRender()
    {
        runFunction( "/lib/markdown-test.js", "testRender" );
    }
}
