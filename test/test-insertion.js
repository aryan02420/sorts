const {Insertion} = require('../');
const expect = require('chai').expect

describe('insertion sort', () => {
  let arr = [5,4,3,2,1]
  let s = Insertion(arr)
  step('1', () => {
    expect(s.next().value.toString() === [ 4, 5, 3, 2, 1 ].toString()).to.be.true
  })
  step('2', () => {
    expect(s.next().value.toString() === [ 4, 3, 5, 2, 1 ].toString()).to.be.true
  })
  step('3', () => {
    expect(s.next().value.toString() === [ 3, 4, 5, 2, 1 ].toString()).to.be.true
  })
  step('4', () => {
    expect(s.next().value.toString() === [ 3, 4, 2, 5, 1 ].toString()).to.be.true
  })
  step('5', () => {
    expect(s.next().value.toString() === [ 3, 2, 4, 5, 1 ].toString()).to.be.true
  })
  step('6', () => {
    expect(s.next().value.toString() === [ 2, 3, 4, 5, 1 ].toString()).to.be.true
  })
  step('7', () => {
    expect(s.next().value.toString() === [ 2, 3, 4, 1, 5 ].toString()).to.be.true
  })
  step('8', () => {
    expect(s.next().value.toString() === [ 2, 3, 1, 4, 5 ].toString()).to.be.true
  })
  step('9', () => {
    expect(s.next().value.toString() === [ 2, 1, 3, 4, 5 ].toString()).to.be.true
  })
  step('10', () => {
    expect(s.next().value.toString() === [ 1, 2, 3, 4, 5 ].toString()).to.be.true
  })
  step('11', () => {
    expect(s.next().done).to.be.true
  })
})
