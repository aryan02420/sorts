const sorts = require('../');
const bubble = sorts().Bubble
const expect = require('chai').expect

describe('bubble sort', () => {
  let arr = [6,2,4,3,5,1] 
  let s = bubble(arr)
  step('sorts?', () => {
    expect(s.next().value).to.have.ordered.members([ 2, 6, 4, 3, 5, 1 ])
    expect(s.next().value).to.have.ordered.members([ 2, 4, 6, 3, 5, 1 ])
    expect(s.next().value).to.have.ordered.members([ 2, 4, 3, 6, 5, 1 ])
    expect(s.next().value).to.have.ordered.members([ 2, 4, 3, 5, 6, 1 ])
    expect(s.next().value).to.have.ordered.members([ 2, 4, 3, 5, 1, 6 ])
    expect(s.next().value).to.have.ordered.members([ 2, 4, 3, 5, 1, 6 ])
    expect(s.next().value).to.have.ordered.members([ 2, 3, 4, 5, 1, 6 ])
    expect(s.next().value).to.have.ordered.members([ 2, 3, 4, 5, 1, 6 ])
    expect(s.next().value).to.have.ordered.members([ 2, 3, 4, 1, 5, 6 ])
    expect(s.next().value).to.have.ordered.members([ 2, 3, 4, 1, 5, 6 ])
    expect(s.next().value).to.have.ordered.members([ 2, 3, 4, 1, 5, 6 ])
    expect(s.next().value).to.have.ordered.members([ 2, 3, 1, 4, 5, 6 ])
    expect(s.next().value).to.have.ordered.members([ 2, 3, 1, 4, 5, 6 ])
    expect(s.next().value).to.have.ordered.members([ 2, 1, 3, 4, 5, 6 ])
    expect(s.next().value).to.have.ordered.members([ 1, 2, 3, 4, 5, 6 ])
  })
  step('terminates?', () => {
    expect(s.next().done).to.be.true
  })
})
