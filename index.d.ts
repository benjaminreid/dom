export function $(selector: string, parent: Document | Element): Element | null;
export function $$(selector: string, parent: Document | Element): Element[];
export function insertAfter(
  element: Element,
  referenceNode: Element | null
): void;
