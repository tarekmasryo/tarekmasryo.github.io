export class Dom {
  static id(id) {
    return document.getElementById(id);
  }

  static qs(selector, root = document) {
    return root.querySelector(selector);
  }

  static qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  static clear(element) {
    if (!element) return;
    element.textContent = '';
  }

  static create(tagName, { className = '', text = '', attributes = {} } = {}) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (text !== '') element.textContent = String(text);
    for (const [name, value] of Object.entries(attributes)) {
      if (value === null || value === undefined || value === false) continue;
      element.setAttribute(name, value === true ? '' : String(value));
    }
    return element;
  }
}
