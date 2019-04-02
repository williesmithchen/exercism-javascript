export class List {
  constructor (array) {
    this.values = array || [];
  }

  append (array) {
    for(let i = 0; i < array.values.length; i++) {
      this.values.push(array.values[i])
    }

    return this;
  }

  concat (args) {
    let list = this;
    for (let a of args.values) {
      list = list.append(a);
    }
    return list;
  }

  filter (f) {
    let newValues = [];
    let insertAt = 0;
    for (let i = 0; i < this.values.length; ++i) {
      const val = this.values[i];
      if (f(val)) {
        newValues[insertAt] = val;
        ++insertAt;
      }
    }
    return new List(newValues);
  }

  length () {
    return this.values.length;
  }

  map (f) {
    let newValues = new Array(this.values.length);
    for (let i = 0; i < this.values.length; ++i) {
      newValues[i] = f(this.values[i]);
    }
    return new List(newValues);
  }

  foldl (f, init) {
    let accum = init;
    for (let i = 0; i < this.values.length; ++i) {
      accum = f(accum, this.values[i]);
    }
    return accum;
  }

  foldr (f, init) {
    let accum = init;
    for (let i = this.values.length - 1; i >= 0; --i) {
      accum = f(accum, this.values[i]);
    }
    return accum;
  }

  reverse () {
    let newValues = new Array(this.values.length);
    for (let i = 0; i < this.values.length; ++i) {
      newValues[this.values.length - 1 - i] = this.values[i];
    }
    return new List(newValues);
  }
}
