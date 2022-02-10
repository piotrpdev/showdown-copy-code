const assert = require("assert");
const showdown = require("showdown");
const showdownHighlight = require("showdown-highlight");
const showdownCopyCode = require("..");

const { mdSingleBlock, mdDoubleBlock } = require("./blocks");

const buttonPattern = /<button class="copy-code">Copy<\/button>/g;

describe("showdown-copy-code", () => {
  before(() => {
    this.converter = new showdown.Converter({
      extensions: [showdownCopyCode],
    });

    this.withHljsConverter = new showdown.Converter({
      extensions: [showdownHighlight, showdownCopyCode],
    });

    this.withHljsWithPreConverter = new showdown.Converter({
      extensions: [showdownHighlight({ pre: true }), showdownCopyCode],
    });

    this.withHljsReverseConverter = new showdown.Converter({
      extensions: [showdownCopyCode, showdownHighlight],
    });
  });

  const createTests = (description, test) => {
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
