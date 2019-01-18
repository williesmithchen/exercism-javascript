export default class Triangle {
  constructor (level) {
    this.level = level;
  }

  getValue (row, col) {
    if (col === 0 || col === row) return 1;

    if (col < 0 || col > row) {
      return 0;
    } else {
      let value = 1;
      for (let x = 0; x < col; x++) {
        value = value * (row - x) / (x + 1);
      }
      return value;
    }
  }

  get rows () {
    let temp = [];
    for (let row = 0; row <= (this.level - 1); row++) {
      let cols = [];
      for (let col = 0; col <= row; col++) {
        cols.push(this.getValue(row, col));
      }
      temp.push(cols);
    }
    return temp;
  }

  get lastRow () {
    return this.rows[this.rows.length - 1];
  }
};
