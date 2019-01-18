export default class List {
  constructor(values = []) {
    this.values = values;
  }

  contains(sublist) {
    return sublist.values.length === 0 ||
      this.values.some((value, startIndex) =>
        sublist.values.every((sublistElement, subListIndex) =>
          sublistElement === this.values[startIndex + subListIndex]));
  }

  compare (other) {
    if (this.values.length === other.values.length && this.contains(other)) {
      return 'EQUAL';
    } else if (other.contains(this)) {
      return 'SUBLIST';
    } else if (this.contains(other)) {
      return 'SUPERLIST';
    }
    return 'UNEQUAL';
  }
}
