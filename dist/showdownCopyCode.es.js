
  /**
   * @license
   * author: Piotr Placzek (piotrpdev)
   * showdownCopyCode.js v1.0.2
   * Released under the MIT license.
   */

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

var index = { showdownCopyCode: showdownCopyCode, addListener: addListener };

export { index as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Rvd25Db3B5Q29kZS5lcy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FkZExpc3RlbmVyLnRzIiwiLi4vLi4vc3JjL3Nob3dkb3duQ29weUNvZGUudHMiLCIuLi8uLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBjb3B5Q29kZUxpc3RlbmVyPzogYm9vbGVhbjtcbiAgfVxufVxuXG4vKipcbiAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHdpbmRvdyB0aGF0IGxpc3RlbnMgZm9yIGNsaWNrcy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGJ1dHRvbi4gXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5jb3B5Q29kZUxpc3RlbmVyICE9PSB0cnVlKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGFyZ2V0Py5jbGFzc0xpc3Q/LmNvbnRhaW5zKGNsYXNzTmFtZSkgJiYgdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZz8udGFnTmFtZSA9PT0gXCJQUkVcIikge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChcbiAgICAgICAgICAodGFyZ2V0Lm5leHRFbGVtZW50U2libGluZyBhcyBIVE1MUHJlRWxlbWVudCkuaW5uZXJUZXh0XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmNvcHlDb2RlTGlzdGVuZXIgPSB0cnVlO1xuICB9XG59IiwiaW1wb3J0IHsgU2hvd2Rvd25FeHRlbnNpb24gfSBmcm9tIFwic2hvd2Rvd25cIjtcbmltcG9ydCBhZGRMaXN0ZW5lciBmcm9tIFwiLi9hZGRMaXN0ZW5lclwiO1xuXG4vKipcbiAqIHNob3dkb3duQ29weUNvZGVcbiAqIFxuICogU2hvd2Rvd24gZXh0ZW5zaW9uIHRoYXQgYWRkcyBhIGJ1dHRvbiBhYm92ZSBjb2RlIGJsb2NrcyB0byBxdWlja2x5IGFuZCBlYXNpbHkgY29weSBjb2RlIHRvIHRoZSBjbGlwYm9hcmQuXG4gKiBcbiAqIEBuYW1lIHNob3dkb3duSGlnaGxpZ2h0XG4gKiBAZnVuY3Rpb24gXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dkb3duQ29weUNvZGUoeyBjbGFzc05hbWUgPSBcImNvcHktY29kZVwiIH0gPSB7fSk6IFNob3dkb3duRXh0ZW5zaW9uW10ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHR5cGU6IFwib3V0cHV0XCIsXG4gICAgICBmaWx0ZXI6IGZ1bmN0aW9uICh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoY2xhc3NOYW1lKTtcblxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKFxuICAgICAgICAgICAgLzxwcmUuKj48Y29kZS9nLFxuICAgICAgICAgICAgYDxidXR0b24gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj5Db3B5PC9idXR0b24+JCZgXG4gICAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcbn0iLCJpbXBvcnQgYWRkTGlzdGVuZXIgZnJvbSBcIi4vYWRkTGlzdGVuZXJcIjtcbmltcG9ydCBzaG93ZG93bkNvcHlDb2RlIGZyb20gXCIuL3Nob3dkb3duQ29weUNvZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgeyBzaG93ZG93bkNvcHlDb2RlOiBzaG93ZG93bkNvcHlDb2RlLCBhZGRMaXN0ZW5lcjogYWRkTGlzdGVuZXIgfTsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFNQTs7OztTQUl3QixXQUFXLENBQUMsU0FBaUI7SUFDbkQsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLGdCQUFnQixLQUFLLElBQUksRUFBRTtRQUNyRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNqQyxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBcUIsQ0FBQztZQUN2QyxJQUFJLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLEtBQUssS0FBSyxFQUFFO2dCQUMxRixTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FDMUIsTUFBTSxDQUFDLGtCQUFxQyxDQUFDLFNBQVMsQ0FDeEQsQ0FBQzthQUNIO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztLQUNoQztBQUNIOztBQ25CQTs7Ozs7Ozs7U0FRd0IsZ0JBQWdCLENBQUMsRUFBRSxTQUFTLEdBQUcsV0FBVyxFQUFFLEdBQUcsRUFBRTtJQUN2RSxPQUFPO1FBQ0w7WUFDRSxJQUFJLEVBQUUsUUFBUTtZQUNkLE1BQU0sRUFBRSxVQUFVLElBQVk7Z0JBQzVCLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUNmLGVBQWUsRUFDZixrQkFBa0IsU0FBUyxtQkFBbUIsQ0FDL0MsQ0FBQzthQUNMO1NBQ0Y7S0FDRixDQUFDO0FBQ0o7O0FDdEJBLFlBQWUsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFOzs7OyJ9
