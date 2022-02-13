import { ShowdownExtension } from "showdown";

declare function showdownCopyCode({ className }?: {
  className?: string | undefined;
}): ShowdownExtension[]

declare function addListener(className: string): void

export { showdownCopyCode, addListener }