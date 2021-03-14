Array.prototype.randomize = function (numswaps) {
  len = this.length
  numswaps = numswaps ?? len
  while (numswaps > 0) {
    let a = Math.floor(Math.random() * len)
    let b = Math.floor(Math.random() * len)
    this.swap(a, b)
    numswaps--
  }
  return this
}
