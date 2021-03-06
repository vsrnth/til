---
date: '2015-11-23'
title: Running NPM tasks in parallel
tags: [JavaScript]
description: You can run multiple NPM script tasks in parallel. This is great for tasks like running build watchers.
book: archive
---

<Notice archived>

**Update (2019):** Consider solutions like [npm-run-all](https://npmjs.com/package/npm-run-all) which will accomplish the things below but in a cross-platform manner.

</Notice>

You can run multiple NPM script tasks in parallel. This is great for tasks like running build watchers. Just use the bash construct `&` to put each command in the background, then finally add `wait` so they can be terminated with `^C`. The final syntax would be:

```bash
command1 & command2 & wait
```

In practice, this looks like so:

```js
{
  "scripts": {
    "watch": "npm run watch:js & npm run watch:css & wait",
    "watch:js": "watchify -v -t babelify -s Editor index.js -o dist/index.js",
    "watch:css": "stylus -w css/style.styl -o dist/index.css",
  }
}
```
