Web-Handbook
============
A collection of resources on Javascript and coding for the web.

## Other working materials

[Google Doc](https://docs.google.com/document/d/1VOw8QANeKeQoANMjAcm8sYywmslGq9e5mSgsUZaxp7c/edit)

To turn markdown pages into html, use [marked](https://www.npmjs.com/package/marked). You will want to include the appropriate markdown css, as is used by drawing.md.

We may eventually set up a Makefile to run marked on all the relevant markdown files.

```bash
marked -i something.md -o something.html --gfm
```
## Live Example Changes Below.

We are working with git right now.

## Running the jekyll build locally

You need to specify a special base url in order for relative links to work.

Run the following command to get jekyll building and hosting the site on port 4000. Then navigate to `http://localhost:4000/` in your chosen browser.

```
jekyll serve --baseurl=""
```

Note that you may need to restart jekyll from the command line multiple times while working. It is pretty crashy.
