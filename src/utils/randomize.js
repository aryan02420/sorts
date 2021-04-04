Array.prototype.randomize = function () {
  let len = this.length;
  for (let i = 0; i < len; i++) {
    let j = Math.floor(Math.random() * (len-i)) + i;
    this.swap(i, j);
  }
  return this;
}
