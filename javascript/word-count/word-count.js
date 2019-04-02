export class Words {
  count (string) {
    const counts = {};
    const strArray = string.trim().split(/\s+/).map((str, i) => {
      const lowerCaseStr = str.toLowerCase();
      counts[`${lowerCaseStr}`] = Object.prototype.hasOwnProperty.call(counts, lowerCaseStr) ? (counts[`${lowerCaseStr}`] || 0) + 1 : 1;
    });
    return counts;
  }
};
