Array.prototype.swap = function (a, b) {
	let temp = this[a]
	this[a] = this[b]
	this[b] = temp
	return this
}
