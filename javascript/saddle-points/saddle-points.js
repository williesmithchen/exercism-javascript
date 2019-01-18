export default class Matrix {
  constructor (str) {
    this.str = str.toLowerCase();
  }

  get rows () { return this.str.split(/[\n]+/ig).map((row) => row.trim().split(/\s/ig).map((col) => parseInt(col, 10))); }

  get rowMaxs () { return this.rows.map((row) => Math.max.apply(null, row)); }

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

  get colMins () { return this.columns.map((col) => Math.min.apply(null, col)); }

  get saddlePoints () {
    let temp = [];
    this.rows.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell === this.rowMaxs[rowIndex] && cell === this.colMins[colIndex]) {
          temp.push([rowIndex, colIndex]);
        }
      });
    });
    return temp;
  }
}
