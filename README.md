Markdown library for Enonic XP
==============================

[![Build Status](https://travis-ci.org/enonic/lib-markdown.svg?branch=master)](https://travis-ci.org/enonic/lib-markdown)
[![codecov](https://codecov.io/gh/enonic/lib-markdown/branch/master/graph/badge.svg)](https://codecov.io/gh/enonic/lib-markdown)
[![License](https://img.shields.io/github/license/enonic/lib-markdown.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

This is a library for rendering markdown in Enonic XP. It exposes a single function `render` that renders markdown to html. The library
uses [CommonMark-Java](https://github.com/atlassian/commonmark-java) for the actual processing.

Compatibility
-------------

| Version | XP Version | Dependency                        |
|---------|------------|-----------------------------------|
| 0.5.0   | 6.7.x      | com.enonic.lib:lib-markdown:0.5.0 |

Usage
-----

First, you will need to add Enonic repository to the repository list:

    repositories {
        maven {
            url 'http://repo.enonic.com/public'
        }
    }

After this, add the following dependency (where ``<version>`` is the actual version to use):

    dependencies {
        include 'com.enonic.lib:lib-markdown:<version>'
    }

Example
-------

Here's a simple example rendering markdown to html. First, you will need to add the lib into your
``build.gradle`` file:

    dependencies {
        include 'com.enonic.lib:lib-markdown:<version>'
    }
    
You can then use this inside your javascript controller or other parts of your app. Here's an example of using it inside a controller:
    
    // Include the library
    var markdown = require('/lib/markdown');

    // Render markdown
    exports.get = function(req) {
    
        // Render markdown to html
        var result = markdown.render('Hello *World*!');
        
        // Return the result as html
        return {
            status: 200,
            body: result,
            contentType: 'text/html'
        };
        
    };
    