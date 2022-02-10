export default function showdownCopyCode({ className = "copy-code" } = {}) {
  return [
    {
      type: "output",
      filter: function (text) {
        if (window.copyCodeListener !== true) {
          window.addEventListener("click", (e) => {
            if (e.target?.classList?.contains(className) && e.target.nextElementSibling?.tagName === "PRE") {
              navigator.clipboard.writeText(
                e.target.nextElementSibling.innerText
              );
            }
          });
          window.copyCodeListener = true;
        }

        return text.replace(
            /<pre.*><code/g,
            `<button class="${className}">Copy</button>$&`
          );
      },
    },
  ];
}
