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
});
