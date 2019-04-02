export default class School {

  constructor () {
    this.rosterObj = {};
  }

  add (name, grade) {
    this.rosterObj[grade] = this.rosterObj[grade] || [];
    this.rosterObj[grade].push(name);
  }

  sort (a, b) {
    return (a > b) ? 1 : ((b > a) ? -1 : 0);
  }

  deepCopy (obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  grade (grade) {
    const result = this.rosterObj[grade];
    if (!result) return [];
    return this.deepCopy(result.sort(this.sort));
  }

  roster () {
    for (let index in this.rosterObj) {
      this.rosterObj[index].sort(this.sort);
    }

    return this.deepCopy(this.rosterObj);
  }
};
