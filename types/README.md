# @enonic-types/lib-markdown

[![npm version](https://img.shields.io/npm/v/@enonic-types/lib-markdown.svg)](https://www.npmjs.com/package/@enonic-types/lib-markdown)
[![License](https://img.shields.io/github/license/enonic/lib-markdown.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

TypeScript type definitions for [lib-markdown](https://github.com/enonic/lib-markdown), the Markdown library for Enonic XP.

This package contains types only. The library itself is distributed as a Gradle dependency (`com.enonic.lib:lib-markdown`).

## Install

```bash
npm install --save-dev @enonic-types/lib-markdown
```

The package version follows the library version, so use the same version as your `com.enonic.lib:lib-markdown` dependency in `build.gradle`:

```groovy
dependencies {
    include 'com.enonic.lib:lib-markdown:<version>'
}
```

## Setup

Map the `/lib/markdown` import to this package in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "/lib/markdown": ["./node_modules/@enonic-types/lib-markdown"]
    }
  }
}
```

## Usage

```ts
import {render} from '/lib/markdown';

export function get() {
    const html: string = render('Hello *World*!');

    return {
        status: 200,
        body: html,
        contentType: 'text/html'
    };
}
```

## API

### `render(input: string): string`

Renders markdown to HTML.

| Parameter | Type     | Description                |
|-----------|----------|----------------------------|
| `input`   | `string` | Markdown source to render. |

Returns the rendered HTML.

## Links

- [Source and documentation](https://github.com/enonic/lib-markdown)
- [Issues](https://github.com/enonic/lib-markdown/issues)

## License

[Apache-2.0](http://www.apache.org/licenses/LICENSE-2.0.html)
