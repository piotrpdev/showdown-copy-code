declare global {
  interface Window {
    copyCodeListener?: boolean;
  }
}

/**
 * Adds an event listener to the window that listens for clicks.
 * @param {String} className The class name of the button. 
 */
export default function addListener(className: string) {
  if (typeof window !== "undefined" && window.copyCodeListener !== true) {
    window.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target?.classList?.contains(className) && target.nextElementSibling?.tagName === "PRE") {
        navigator.clipboard.writeText(
          (target.nextElementSibling as HTMLPreElement).innerText
        );
      }
    });
    window.copyCodeListener = true;
  }
}