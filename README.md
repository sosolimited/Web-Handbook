Sosolimited Code Camp

Javascript Edition

This repo contains documents describing various aspects of working with Javascript.

[Google Doc](https://docs.google.com/document/d/1VOw8QANeKeQoANMjAcm8sYywmslGq9e5mSgsUZaxp7c/edit)

To turn markdown pages into html, use [marked](https://www.npmjs.com/package/marked). You will want to include the appropriate markdown css, as is used by drawing.md.

We may eventually set up a Makefile to run marked on all the relevant markdown files.

```bash
marked -i something.md -o something.html --gfm
```
