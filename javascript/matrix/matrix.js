export default class matrix {
  constructor (str) {
    this.str = str.toLowerCase();
  }

  get rows () {
    return this.str.split(/[\n]+/ig).map((row) => row.split(/\s/ig).map((col) => parseInt(col, 10)));
  }

  get columns () {
    let temp = [];
    this.rows.forEach((row) => {
      row.forEach((col, k) => {
        temp[k] = temp[k] || [];
        temp[k].push(col);
      });
    });
    return temp;
  }
}
export const Matrix = (str) => new matrix(str);
