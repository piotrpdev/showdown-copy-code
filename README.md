# showdown-copy-code

Showdown extension that adds a button above code blocks to quickly and easily copy code to the clipboard.

*~~Yoinked~~ **Heavily inspired** by [this project](https://www.dannyguo.com/blog/how-to-add-copy-to-clipboard-buttons-to-code-blocks-in-hugo/)* (*[go check out the creator](https://github.com/dguo)*).

## How do I install it?

```bash
npm install showdown-copy-code
```

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

* **ONLY FULLY WORKS IN BROWSER** (Adds an event listener to the window to detect button clicks). If you load the module serverside AND on the browser, you may be able to call `showdownCopyCode.addListener()` on the browser. Otherwise, you need to do your own implementation.

* Styles not included out of the box.

* Needs testing.

* Need to make sure the fix for the showdown-highlight `pre` option doesn't mess up.

* Uses `navigator.clipboard`, which [might need a polyfill on older browsers.](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard#browser_compatibility)

## License

MIT

## Resources Used/Help/Credit

* [showdown-highlight](https://github.com/Bloggify/showdown-highlight/blob/master/lib/index.js)

* [Blog post on clipboard buttons](https://www.dannyguo.com/blog/how-to-add-copy-to-clipboard-buttons-to-code-blocks-in-hugo/)

* [Showdown extensions wiki page](https://github.com/showdownjs/showdown/wiki/Extensions)

* [StackOverflow event listener question](https://stackoverflow.com/questions/12045440/difference-between-document-addeventlistener-and-window-addeventlistener)

* [StackOverflow dynamic event listener question](https://stackoverflow.com/questions/11455515/how-to-check-whether-dynamically-attached-event-listener-exists-or-not)

* [StackOverflow RegExp question](https://stackoverflow.com/questions/43784794/javascript-regex-ignore-anything-in-between)
