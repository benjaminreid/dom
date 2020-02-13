const $ = (
  selector: string,
  parent: Document | Element = document
): Element | null => parent.querySelector(selector);

export { $ };
