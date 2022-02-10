# showdown-copy-code

Showdown extension that adds a button above code blocks to quickly and easily copy code to the clipboard.

*~~Yoinked~~ **Heavily inspired** by [this project](https://www.dannyguo.com/blog/how-to-add-copy-to-clipboard-buttons-to-code-blocks-in-hugo/)* (*[go check out the creator](https://github.com/dguo)*).

## Usage

```js
const showdown = require("showdown");
const showdownHighlight = require("showdown-highlight");
const showdownCopyCode = require("showdown-copy-code");

let converter = new showdown.Converter({
  extensions: [showdownHighlight, showdownCopyCode],
});

const html = converter.makeHtml(`
## Highlighting Code with Showdown

Below we have a piece of JavaScript code:

<br>

\`\`\`js
document.querySelector('#master-yoda')
// => <div id="master-yoda">Yoda</div>

document.querySelector('.class-of-assassins')
// => <div class="class-of-assassins">Assassin</div>

document.querySelector('p')
// => <p>The three little pigs</p>

document.querySelector('[data-type="rocket"]')
// => <div data-type="rocket">🚀</div>
\`\`\`
`);

console.log(html);
```

## Warning

* Styles not included out of the box.

* Needs testing.

* Need to make sure the fix for the showdown-highlight `pre` option doesn't mess up.

* Uses `navigator.clipboard`, which [might need a polyfill on older browsers.](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard#browser_compatibility)

## Resources Used/Help/Credit

* https://github.com/Bloggify/showdown-highlight/blob/master/lib/index.js

* https://www.dannyguo.com/blog/how-to-add-copy-to-clipboard-buttons-to-code-blocks-in-hugo/

* https://github.com/showdownjs/showdown/wiki/Extensions

* https://stackoverflow.com/questions/12045440/difference-between-document-addeventlistener-and-window-addeventlistener

* https://stackoverflow.com/questions/11455515/how-to-check-whether-dynamically-attached-event-listener-exists-or-not

* https://stackoverflow.com/questions/43784794/javascript-regex-ignore-anything-in-between