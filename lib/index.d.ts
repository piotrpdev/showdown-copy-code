import type { ShowdownExtension } from "showdown";

declare function showdownCopyCode({ className }?: {
    className?: string;
}): ShowdownExtension[];

export = showdownCopyCode;