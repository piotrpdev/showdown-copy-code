import type { ShowdownExtension } from "showdown";

export function addListener(className: string): void;

declare function showdownCopyCode({ className }?: {
    className?: string;
}): ShowdownExtension[];

export = showdownCopyCode;