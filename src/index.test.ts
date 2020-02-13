import "@testing-library/jest-dom";
import { $ } from "./index";

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
