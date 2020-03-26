const $ = (
  selector: string,
  parent: Document | Element = document
): Element | null => parent.querySelector(selector);

const $$ = (
  selector: string,
  parent: Document | Element = document
): Element[] => Array.from(parent.querySelectorAll(selector));

const insertAfter = (element: Element, referenceNode: Element | null): void => {
  if (referenceNode && referenceNode.parentNode) {
    referenceNode.parentNode.insertBefore(element, referenceNode.nextSibling);
  }
};

export { $, $$, insertAfter };
