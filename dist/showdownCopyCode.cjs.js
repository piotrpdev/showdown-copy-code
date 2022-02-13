
  /**
   * @license
   * author: Piotr Placzek (piotrpdev)
   * showdownCopyCode.js v1.0.2
   * Released under the MIT license.
   */

'use strict';

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

module.exports = index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Rvd25Db3B5Q29kZS5janMuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGRMaXN0ZW5lci50cyIsIi4uLy4uL3NyYy9zaG93ZG93bkNvcHlDb2RlLnRzIiwiLi4vLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgY29weUNvZGVMaXN0ZW5lcj86IGJvb2xlYW47XG4gIH1cbn1cblxuLyoqXG4gKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSB3aW5kb3cgdGhhdCBsaXN0ZW5zIGZvciBjbGlja3MuXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBidXR0b24uIFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMaXN0ZW5lcihjbGFzc05hbWU6IHN0cmluZykge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuY29weUNvZGVMaXN0ZW5lciAhPT0gdHJ1ZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRhcmdldD8uY2xhc3NMaXN0Py5jb250YWlucyhjbGFzc05hbWUpICYmIHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc/LnRhZ05hbWUgPT09IFwiUFJFXCIpIHtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoXG4gICAgICAgICAgKHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcgYXMgSFRNTFByZUVsZW1lbnQpLmlubmVyVGV4dFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5jb3B5Q29kZUxpc3RlbmVyID0gdHJ1ZTtcbiAgfVxufSIsImltcG9ydCB7IFNob3dkb3duRXh0ZW5zaW9uIH0gZnJvbSBcInNob3dkb3duXCI7XG5pbXBvcnQgYWRkTGlzdGVuZXIgZnJvbSBcIi4vYWRkTGlzdGVuZXJcIjtcblxuLyoqXG4gKiBzaG93ZG93bkNvcHlDb2RlXG4gKiBcbiAqIFNob3dkb3duIGV4dGVuc2lvbiB0aGF0IGFkZHMgYSBidXR0b24gYWJvdmUgY29kZSBibG9ja3MgdG8gcXVpY2tseSBhbmQgZWFzaWx5IGNvcHkgY29kZSB0byB0aGUgY2xpcGJvYXJkLlxuICogXG4gKiBAbmFtZSBzaG93ZG93bkhpZ2hsaWdodFxuICogQGZ1bmN0aW9uIFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93ZG93bkNvcHlDb2RlKHsgY2xhc3NOYW1lID0gXCJjb3B5LWNvZGVcIiB9ID0ge30pOiBTaG93ZG93bkV4dGVuc2lvbltdIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB0eXBlOiBcIm91dHB1dFwiLFxuICAgICAgZmlsdGVyOiBmdW5jdGlvbiAodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGFkZExpc3RlbmVyKGNsYXNzTmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZShcbiAgICAgICAgICAgIC88cHJlLio+PGNvZGUvZyxcbiAgICAgICAgICAgIGA8YnV0dG9uIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+Q29weTwvYnV0dG9uPiQmYFxuICAgICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gIF07XG59IiwiaW1wb3J0IGFkZExpc3RlbmVyIGZyb20gXCIuL2FkZExpc3RlbmVyXCI7XG5pbXBvcnQgc2hvd2Rvd25Db3B5Q29kZSBmcm9tIFwiLi9zaG93ZG93bkNvcHlDb2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHsgc2hvd2Rvd25Db3B5Q29kZTogc2hvd2Rvd25Db3B5Q29kZSwgYWRkTGlzdGVuZXI6IGFkZExpc3RlbmVyIH07Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNQTs7OztTQUl3QixXQUFXLENBQUMsU0FBaUI7SUFDbkQsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLGdCQUFnQixLQUFLLElBQUksRUFBRTtRQUNyRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNqQyxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBcUIsQ0FBQztZQUN2QyxJQUFJLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLEtBQUssS0FBSyxFQUFFO2dCQUMxRixTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FDMUIsTUFBTSxDQUFDLGtCQUFxQyxDQUFDLFNBQVMsQ0FDeEQsQ0FBQzthQUNIO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztLQUNoQztBQUNIOztBQ25CQTs7Ozs7Ozs7U0FRd0IsZ0JBQWdCLENBQUMsRUFBRSxTQUFTLEdBQUcsV0FBVyxFQUFFLEdBQUcsRUFBRTtJQUN2RSxPQUFPO1FBQ0w7WUFDRSxJQUFJLEVBQUUsUUFBUTtZQUNkLE1BQU0sRUFBRSxVQUFVLElBQVk7Z0JBQzVCLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUNmLGVBQWUsRUFDZixrQkFBa0IsU0FBUyxtQkFBbUIsQ0FDL0MsQ0FBQzthQUNMO1NBQ0Y7S0FDRixDQUFDO0FBQ0o7O0FDdEJBLFlBQWUsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFOzs7OyJ9
