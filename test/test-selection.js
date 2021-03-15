const sort = require('../');
const selection = sort().Selection
const expect = require('chai').expect

describe('selection sort', () => {
  let arr = [6,2,4,3,5,1] 
  let s = selection(arr)
  step('sorts?', () => {
    expect(s.next().value).to.have.ordered.members([ 6, 2, 4, 3, 5, 1 ])
    expect(s.next().value).to.have.ordered.members([ 6, 2, 4, 3, 5, 1 ])
    expect(s.next().value).to.have.ordered.members([ 6, 2, 4, 3, 5, 1 ])
    expect(s.next().value).to.have.ordered.members([ 6, 2, 4, 3, 5, 1 ])
    expect(s.next().value).to.have.ordered.members([ 6, 2, 4, 3, 5, 1 ])
    expect(s.next().value).to.have.ordered.members([ 1, 2, 4, 3, 5, 6 ])
    expect(s.next().value).to.have.ordered.members([ 1, 2, 4, 3, 5, 6 ])
    expect(s.next().value).to.have.ordered.members([ 1, 2, 4, 3, 5, 6 ])
    expect(s.next().value).to.have.ordered.members([ 1, 2, 4, 3, 5, 6 ])
    expect(s.next().value).to.have.ordered.members([ 1, 2, 4, 3, 5, 6 ])
    expect(s.next().value).to.have.ordered.members([ 1, 2, 4, 3, 5, 6 ])
    expect(s.next().value).to.have.ordered.members([ 1, 2, 4, 3, 5, 6 ])
    expect(s.next().value).to.have.ordered.members([ 1, 2, 4, 3, 5, 6 ])
    expect(s.next().value).to.have.ordered.members([ 1, 2, 3, 4, 5, 6 ])
    expect(s.next().value).to.have.ordered.members([ 1, 2, 3, 4, 5, 6 ])
    expect(s.next().value).to.have.ordered.members([ 1, 2, 3, 4, 5, 6 ])
    expect(s.next().value).to.have.ordered.members([ 1, 2, 3, 4, 5, 6 ])
  })
  step('terminates?', () => {
    expect(s.next().done).to.be.true
  })
})
