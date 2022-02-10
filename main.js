import "./style.css";
import "highlight.js/styles/github.css";
import "./showdownCopyCodeStyles.css"

import showdown from "showdown";
import showdownHighlight from "showdown-highlight";
import showdownCopyCode from "./lib/index";

let converter = new showdown.Converter({
  extensions: [showdownHighlight, showdownCopyCode],
});

// Now you can Highlight code blocks
let html = converter.makeHtml(`
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

document.querySelector("#app").innerHTML = html;
