const {Selection} = require('../');
const expect = require('chai').expect

describe('selection sort', () => {
  let arr = [5,4,3,2,1]
  let s = Selection(arr)
  step('1', () => {
    expect(s.next().value.toString() === [ 5, 4, 3, 2, 1 ].toString()).to.be.true
  })
  step('2', () => {
    expect(s.next().value.toString() === [ 5, 4, 3, 2, 1 ].toString()).to.be.true
  })
  step('3', () => {
    expect(s.next().value.toString() === [ 5, 4, 3, 2, 1 ].toString()).to.be.true
  })
  step('4', () => {
    expect(s.next().value.toString() === [ 5, 4, 3, 2, 1 ].toString()).to.be.true
  })
  step('5', () => {
    expect(s.next().value.toString() === [ 1, 4, 3, 2, 5 ].toString()).to.be.true
  })
  step('6', () => {
    expect(s.next().value.toString() === [ 1, 4, 3, 2, 5 ].toString()).to.be.true
  })
  step('7', () => {
    expect(s.next().value.toString() === [ 1, 4, 3, 2, 5 ].toString()).to.be.true
  })
  step('8', () => {
    expect(s.next().value.toString() === [ 1, 4, 3, 2, 5 ].toString()).to.be.true
  })
  step('9', () => {
    expect(s.next().value.toString() === [ 1, 2, 3, 4, 5 ].toString()).to.be.true
  })
  step('10', () => {
    expect(s.next().value.toString() === [ 1, 2, 3, 4, 5 ].toString()).to.be.true
  })
  step('11', () => {
    expect(s.next().value.toString() === [ 1, 2, 3, 4, 5 ].toString()).to.be.true
  })
  step('12', () => {
    expect(s.next().value.toString() === [ 1, 2, 3, 4, 5 ].toString()).to.be.true
  })
  step('13', () => {
    expect(s.next().done).to.be.true
  })
})
