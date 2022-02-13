/* eslint-disable @typescript-eslint/no-non-null-assertion */
import assert from "assert";
import showdown, { Converter } from "showdown";
import showdownHighlight from "showdown-highlight";
import showdownCopyCode from "../src/showdownCopyCode";

import { mdSingleBlock, mdDoubleBlock } from "./blocks";

const buttonPattern = /<button class="copy-code">Copy<\/button>/g;

describe("showdown-copy-code", function (this) {
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

  const createTests = (description: string, test: (converter: Converter) => void) => {
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
