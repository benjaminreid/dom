const $ = (
  selector: string,
  parent: Document | Element = document
): Element | null => parent.querySelector(selector);

const $$ = (
  selector: string,
  parent: Document | Element = document
): Element[] => Array.from(parent.querySelectorAll(selector));

export { $, $$ };
