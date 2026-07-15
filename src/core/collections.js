export class UniqueStringList {
  constructor() {
    this.values = [];
    this.seen = new Set();
  }

  get size() {
    return this.values.length;
  }

  add(value) {
    const normalized = String(value || '').trim();
    if (!normalized || this.seen.has(normalized)) return this;
    this.seen.add(normalized);
    this.values.push(normalized);
    return this;
  }

  addMany(values) {
    if (!Array.isArray(values)) return this;
    for (const value of values) this.add(value);
    return this;
  }

  toArray(limit = Number.POSITIVE_INFINITY) {
    return this.values.slice(0, limit);
  }
}
