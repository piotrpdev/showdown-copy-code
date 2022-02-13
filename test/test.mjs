
  /**
   * @license
   * author: Piotr Placzek (piotrpdev)
   * showdownCopyCode.js v1.0.2
   * Released under the MIT license.
   */

import assert from 'assert';
import showdown from 'showdown';
import showdownHighlight from 'showdown-highlight';

/**
 * Adds an event listener to the window that listens for clicks.
 * @param {String} className The class name of the button.
 */
function addListener(className) {
    if (typeof window !== "undefined" && window.copyCodeListener !== true) {
        window.addEventListener("click", (e) => {
            const target = e.target;
            if (target?.classList?.contains(className) && target.nextElementSibling?.tagName === "PRE") {
                navigator.clipboard.writeText(target.nextElementSibling.innerText);
            }
        });
        window.copyCodeListener = true;
    }
}

/**
 * showdownCopyCode
 *
 * Showdown extension that adds a button above code blocks to quickly and easily copy code to the clipboard.
 *
 * @name showdownHighlight
 * @function
 */
function showdownCopyCode({ className = "copy-code" } = {}) {
    return [
        {
            type: "output",
            filter: function (text) {
                addListener(className);
                return text.replace(/<pre.*><code/g, `<button class="${className}">Copy</button>$&`);
            },
        },
    ];
}

const mdSingleBlock = `
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
`;
const mdDoubleBlock = `
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
`;

/* eslint-disable @typescript-eslint/no-non-null-assertion */
const buttonPattern = /<button class="copy-code">Copy<\/button>/g;
describe("showdown-copy-code", function () {
    before(() => {
        this.converter = new showdown.Converter({
            extensions: [showdownCopyCode],
        });
        this.withHljsConverter = new showdown.Converter({
            extensions: [showdownHighlight({ pre: false }), showdownCopyCode],
        });
        this.withHljsWithPreConverter = new showdown.Converter({
            extensions: [showdownHighlight({ pre: true }), showdownCopyCode],
        });
        this.withHljsReverseConverter = new showdown.Converter({
            extensions: [showdownCopyCode, showdownHighlight({ pre: false })],
        });
    });
    const createTests = (description, test) => {
        describe(description, () => {
            it("Without showdown-highlight", () => {
                test(this.converter);
            });
            it("With showdown-highlight", () => {
                test(this.withHljsConverter);
            });
            it("With showdown-highlight (pre: true)", () => {
                test(this.withHljsWithPreConverter);
            });
            it("With showdown-highlight reverse extension order", () => {
                test(this.withHljsReverseConverter);
            });
        });
    };
    createTests("Should add a button to HTML", (converter) => {
        const html = converter.makeHtml(mdSingleBlock);
        assert.ok((html.match(buttonPattern) || []).length === 1);
    });
    createTests("Should add two buttons to HTML", (converter) => {
        const html = converter.makeHtml(mdDoubleBlock);
        assert.ok((html.match(buttonPattern) || []).length === 2);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5tanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGRMaXN0ZW5lci50cyIsIi4uLy4uL3NyYy9zaG93ZG93bkNvcHlDb2RlLnRzIiwiLi4vLi4vdGVzdC9ibG9ja3MudHMiLCIuLi8uLi90ZXN0L3Rlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBjb3B5Q29kZUxpc3RlbmVyPzogYm9vbGVhbjtcbiAgfVxufVxuXG4vKipcbiAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHdpbmRvdyB0aGF0IGxpc3RlbnMgZm9yIGNsaWNrcy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGJ1dHRvbi4gXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5jb3B5Q29kZUxpc3RlbmVyICE9PSB0cnVlKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGFyZ2V0Py5jbGFzc0xpc3Q/LmNvbnRhaW5zKGNsYXNzTmFtZSkgJiYgdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZz8udGFnTmFtZSA9PT0gXCJQUkVcIikge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChcbiAgICAgICAgICAodGFyZ2V0Lm5leHRFbGVtZW50U2libGluZyBhcyBIVE1MUHJlRWxlbWVudCkuaW5uZXJUZXh0XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmNvcHlDb2RlTGlzdGVuZXIgPSB0cnVlO1xuICB9XG59IiwiaW1wb3J0IHsgU2hvd2Rvd25FeHRlbnNpb24gfSBmcm9tIFwic2hvd2Rvd25cIjtcbmltcG9ydCBhZGRMaXN0ZW5lciBmcm9tIFwiLi9hZGRMaXN0ZW5lclwiO1xuXG4vKipcbiAqIHNob3dkb3duQ29weUNvZGVcbiAqIFxuICogU2hvd2Rvd24gZXh0ZW5zaW9uIHRoYXQgYWRkcyBhIGJ1dHRvbiBhYm92ZSBjb2RlIGJsb2NrcyB0byBxdWlja2x5IGFuZCBlYXNpbHkgY29weSBjb2RlIHRvIHRoZSBjbGlwYm9hcmQuXG4gKiBcbiAqIEBuYW1lIHNob3dkb3duSGlnaGxpZ2h0XG4gKiBAZnVuY3Rpb24gXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dkb3duQ29weUNvZGUoeyBjbGFzc05hbWUgPSBcImNvcHktY29kZVwiIH0gPSB7fSk6IFNob3dkb3duRXh0ZW5zaW9uW10ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHR5cGU6IFwib3V0cHV0XCIsXG4gICAgICBmaWx0ZXI6IGZ1bmN0aW9uICh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoY2xhc3NOYW1lKTtcblxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKFxuICAgICAgICAgICAgLzxwcmUuKj48Y29kZS9nLFxuICAgICAgICAgICAgYDxidXR0b24gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj5Db3B5PC9idXR0b24+JCZgXG4gICAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcbn0iLCJleHBvcnQgY29uc3QgbWRTaW5nbGVCbG9jayA9IGBcbiMjIEhpZ2hsaWdodGluZyBDb2RlIHdpdGggU2hvd2Rvd25cblxuQmVsb3cgd2UgaGF2ZSBhIHBpZWNlIG9mIEphdmFTY3JpcHQgY29kZTpcblxuPGJyPlxuXG5cXGBcXGBcXGBqc1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hc3Rlci15b2RhJylcbi8vID0+IDxkaXYgaWQ9XCJtYXN0ZXIteW9kYVwiPllvZGE8L2Rpdj5cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsYXNzLW9mLWFzc2Fzc2lucycpXG4vLyA9PiA8ZGl2IGNsYXNzPVwiY2xhc3Mtb2YtYXNzYXNzaW5zXCI+QXNzYXNzaW48L2Rpdj5cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCcpXG4vLyA9PiA8cD5UaGUgdGhyZWUgbGl0dGxlIHBpZ3M8L3A+XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXR5cGU9XCJyb2NrZXRcIl0nKVxuLy8gPT4gPGRpdiBkYXRhLXR5cGU9XCJyb2NrZXRcIj7wn5qAPC9kaXY+XG5cXGBcXGBcXGBcbmA7XG5cbmV4cG9ydCBjb25zdCBtZERvdWJsZUJsb2NrID0gYFxuIyMgSGlnaGxpZ2h0aW5nIENvZGUgd2l0aCBTaG93ZG93blxuXG5CZWxvdyB3ZSBoYXZlIGEgcGllY2Ugb2YgSmF2YVNjcmlwdCBjb2RlOlxuXG48YnI+XG5cblxcYFxcYFxcYGpzXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFzdGVyLXlvZGEnKVxuLy8gPT4gPGRpdiBpZD1cIm1hc3Rlci15b2RhXCI+WW9kYTwvZGl2PlxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xhc3Mtb2YtYXNzYXNzaW5zJylcbi8vID0+IDxkaXYgY2xhc3M9XCJjbGFzcy1vZi1hc3Nhc3NpbnNcIj5Bc3Nhc3NpbjwvZGl2PlxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwJylcbi8vID0+IDxwPlRoZSB0aHJlZSBsaXR0bGUgcGlnczwvcD5cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdHlwZT1cInJvY2tldFwiXScpXG4vLyA9PiA8ZGl2IGRhdGEtdHlwZT1cInJvY2tldFwiPvCfmoA8L2Rpdj5cblxcYFxcYFxcYFxuXG48YnI+XG5cblxcYFxcYFxcYGpzXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFzdGVyLXlvZGEnKVxuLy8gPT4gPGRpdiBpZD1cIm1hc3Rlci15b2RhXCI+WW9kYTwvZGl2PlxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xhc3Mtb2YtYXNzYXNzaW5zJylcbi8vID0+IDxkaXYgY2xhc3M9XCJjbGFzcy1vZi1hc3Nhc3NpbnNcIj5Bc3Nhc3NpbjwvZGl2PlxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwJylcbi8vID0+IDxwPlRoZSB0aHJlZSBsaXR0bGUgcGlnczwvcD5cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdHlwZT1cInJvY2tldFwiXScpXG4vLyA9PiA8ZGl2IGRhdGEtdHlwZT1cInJvY2tldFwiPvCfmoA8L2Rpdj5cblxcYFxcYFxcYFxuYDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb24gKi9cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuaW1wb3J0IHNob3dkb3duLCB7IENvbnZlcnRlciB9IGZyb20gXCJzaG93ZG93blwiO1xuaW1wb3J0IHNob3dkb3duSGlnaGxpZ2h0IGZyb20gXCJzaG93ZG93bi1oaWdobGlnaHRcIjtcbmltcG9ydCBzaG93ZG93bkNvcHlDb2RlIGZyb20gXCIuLi9zcmMvc2hvd2Rvd25Db3B5Q29kZVwiO1xuXG5pbXBvcnQgeyBtZFNpbmdsZUJsb2NrLCBtZERvdWJsZUJsb2NrIH0gZnJvbSBcIi4vYmxvY2tzXCI7XG5cbmNvbnN0IGJ1dHRvblBhdHRlcm4gPSAvPGJ1dHRvbiBjbGFzcz1cImNvcHktY29kZVwiPkNvcHk8XFwvYnV0dG9uPi9nO1xuXG5kZXNjcmliZShcInNob3dkb3duLWNvcHktY29kZVwiLCBmdW5jdGlvbiAodGhpcykge1xuICBiZWZvcmUoKCkgPT4ge1xuICAgIHRoaXMuY29udmVydGVyID0gbmV3IHNob3dkb3duLkNvbnZlcnRlcih7XG4gICAgICBleHRlbnNpb25zOiBbc2hvd2Rvd25Db3B5Q29kZV0sXG4gICAgfSk7XG5cbiAgICB0aGlzLndpdGhIbGpzQ29udmVydGVyID0gbmV3IHNob3dkb3duLkNvbnZlcnRlcih7XG4gICAgICBleHRlbnNpb25zOiBbc2hvd2Rvd25IaWdobGlnaHQoeyBwcmU6IGZhbHNlIH0pLCBzaG93ZG93bkNvcHlDb2RlXSxcbiAgICB9KTtcblxuICAgIHRoaXMud2l0aEhsanNXaXRoUHJlQ29udmVydGVyID0gbmV3IHNob3dkb3duLkNvbnZlcnRlcih7XG4gICAgICBleHRlbnNpb25zOiBbc2hvd2Rvd25IaWdobGlnaHQoeyBwcmU6IHRydWUgfSksIHNob3dkb3duQ29weUNvZGVdLFxuICAgIH0pO1xuXG4gICAgdGhpcy53aXRoSGxqc1JldmVyc2VDb252ZXJ0ZXIgPSBuZXcgc2hvd2Rvd24uQ29udmVydGVyKHtcbiAgICAgIGV4dGVuc2lvbnM6IFtzaG93ZG93bkNvcHlDb2RlLCBzaG93ZG93bkhpZ2hsaWdodCh7IHByZTogZmFsc2UgfSldLFxuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBjcmVhdGVUZXN0cyA9IChkZXNjcmlwdGlvbjogc3RyaW5nLCB0ZXN0OiAoY29udmVydGVyOiBDb252ZXJ0ZXIpID0+IHZvaWQpID0+IHtcbiAgICBkZXNjcmliZShkZXNjcmlwdGlvbiwgKCkgPT4ge1xuICAgICAgaXQoXCJXaXRob3V0IHNob3dkb3duLWhpZ2hsaWdodFwiLCAoKSA9PiB7XG4gICAgICAgIHRlc3QodGhpcy5jb252ZXJ0ZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KFwiV2l0aCBzaG93ZG93bi1oaWdobGlnaHRcIiwgKCkgPT4ge1xuICAgICAgICB0ZXN0KHRoaXMud2l0aEhsanNDb252ZXJ0ZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KFwiV2l0aCBzaG93ZG93bi1oaWdobGlnaHQgKHByZTogdHJ1ZSlcIiwgKCkgPT4ge1xuICAgICAgICB0ZXN0KHRoaXMud2l0aEhsanNXaXRoUHJlQ29udmVydGVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBpdChcIldpdGggc2hvd2Rvd24taGlnaGxpZ2h0IHJldmVyc2UgZXh0ZW5zaW9uIG9yZGVyXCIsICgpID0+IHtcbiAgICAgICAgdGVzdCh0aGlzLndpdGhIbGpzUmV2ZXJzZUNvbnZlcnRlcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjcmVhdGVUZXN0cyhcIlNob3VsZCBhZGQgYSBidXR0b24gdG8gSFRNTFwiLCAoY29udmVydGVyKSA9PiB7XG4gICAgY29uc3QgaHRtbCA9IGNvbnZlcnRlci5tYWtlSHRtbChtZFNpbmdsZUJsb2NrKTtcblxuICAgIGFzc2VydC5vaygoaHRtbC5tYXRjaChidXR0b25QYXR0ZXJuKSB8fCBbXSkubGVuZ3RoID09PSAxKTtcbiAgfSk7XG5cbiAgY3JlYXRlVGVzdHMoXCJTaG91bGQgYWRkIHR3byBidXR0b25zIHRvIEhUTUxcIiwgKGNvbnZlcnRlcikgPT4ge1xuICAgIGNvbnN0IGh0bWwgPSBjb252ZXJ0ZXIubWFrZUh0bWwobWREb3VibGVCbG9jayk7XG5cbiAgICBhc3NlcnQub2soKGh0bWwubWF0Y2goYnV0dG9uUGF0dGVybikgfHwgW10pLmxlbmd0aCA9PT0gMik7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBTUE7Ozs7U0FJd0IsV0FBVyxDQUFDLFNBQWlCO0lBQ25ELElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7UUFDckUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDakMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQXFCLENBQUM7WUFDdkMsSUFBSSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxNQUFNLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxLQUFLLEtBQUssRUFBRTtnQkFDMUYsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQzFCLE1BQU0sQ0FBQyxrQkFBcUMsQ0FBQyxTQUFTLENBQ3hELENBQUM7YUFDSDtTQUNGLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7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
