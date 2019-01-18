// ref: https://stackoverflow.com/a/40325294
// ref: https://babeljs.io/docs/en/learn#subclassable-built-ins
// ref: http://2ality.com/2013/03/subclassing-builtins-es6.html
// class LinkedList extends Array {
//   constructor(...args) {
//     super(...args);
//   }
//   count() { return this.length; }
//   shift() { return this[0]; }
// }
// LinkedList.prototype = Object.create(Array.prototype);
// LinkedList.prototype.count = () => {
//   return this.length;
// };
// export default LinkedList;

const LinkedList = Array;

LinkedList.prototype.count = function () {
  return this.length;
};

LinkedList.prototype.delete = function (value) {
  this.indexOf(value) > -1 && this.splice(this.indexOf(value), 1);
};

export default LinkedList;
