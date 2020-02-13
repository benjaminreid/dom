import "@testing-library/jest-dom";
import { $, $$ } from "./index";

describe("$", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should find a DOM node", () => {
    const $element = document.createElement("div");
    $element.classList.add("testing");
    document.body.appendChild($element);

    expect($(".testing")).toBeInTheDocument();
  });

  it("should return null if a DOM node cannot be found", () => {
    expect($(".testing")).toBeNull();
  });

  it("should select an element with a parent DOM node", () => {
    const $element = document.createElement("div");
    $element.classList.add("testing");

    const $child = document.createElement("div");
    $child.classList.add("child");

    $element.appendChild($child);

    document.body.appendChild($element);

    expect($(".child", $element)).toEqual($child);
  });
});

describe("$$", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should multiple DOM nodes in an array", () => {
    const $elementA = document.createElement("div");
    $elementA.classList.add("element-a");

    const $elementB = document.createElement("div");
    $elementB.classList.add("element-b");

    document.body.appendChild($elementA);
    document.body.appendChild($elementB);

    const $nodes = $$("div");

    expect($nodes).toContain($elementA);
    expect($nodes).toContain($elementB);
  });

  it("should return an empty array if no nodes are found", () => {
    expect($$(".empty")).toEqual([]);
  });
});
