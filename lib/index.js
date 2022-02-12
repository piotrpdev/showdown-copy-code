/**
 * Adds an event listener to the window that listens for clicks.
 * @param {String} className The class name of the button. 
 */
function addListener(className) {
  if (typeof window !== "undefined" && window.copyCodeListener !== true) {
    window.addEventListener("click", (e) => {
      if (e.target?.classList?.contains(className) && e.target.nextElementSibling?.tagName === "PRE") {
        navigator.clipboard.writeText(
          e.target.nextElementSibling.innerText
        );
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
module.exports = function showdownCopyCode({ className = "copy-code" } = {}) {
  return [
    {
      type: "output",
      filter: function (text) {
        addListener(className);

        return text.replace(
            /<pre.*><code/g,
            `<button class="${className}">Copy</button>$&`
          );
      },
    },
  ];
}

module.exports.addListener = addListener;