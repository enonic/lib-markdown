declare module "/lib/markdown" {
    /**
     * Renders markdown to HTML.
     *
     * @param input Markdown source to render.
     * @returns The rendered HTML.
     */
    export function render(input: string): string;
}

export {};
