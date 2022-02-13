import { ShowdownExtension } from "showdown";
import addListener from "./addListener";

/**
 * showdownCopyCode
 * 
 * Showdown extension that adds a button above code blocks to quickly and easily copy code to the clipboard.
 * 
 * @name showdownHighlight
 * @function 
 */
export default function showdownCopyCode({ className = "copy-code" } = {}): ShowdownExtension[] {
  return [
    {
      type: "output",
      filter: function (text: string) {
        addListener(className);

        return text.replace(
            /<pre.*><code/g,
            `<button class="${className}">Copy</button>$&`
          );
      },
    },
  ];
}