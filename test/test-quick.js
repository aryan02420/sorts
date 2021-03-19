const sorts = require('../');
const sorter = sorts.Quick;
const expect = require('chai').expect;

describe('quick sort', () => {
  step('random', () => {
    let arr = [6,2,4,3,5,1];
    let s = sorter(arr);
    let done = false;
    let next;
    let sortedarr;
    while (!done) {
      next = s.next();
      sortedarr = next.value?.array ?? sortedarr;
      done = next.done;
    }
    expect(sortedarr).to.have.ordered.members([ 1,2,3,4,5,6 ])
  })
  step('asc', () => {
    let arr = [1,2,3,4,5,6];
    let s = sorter(arr);
    let done = false;
    let next;
    let sortedarr;
    while (!done) {
      next = s.next();
      sortedarr = next.value?.array ?? sortedarr;
      done = next.done;
    }
    expect(sortedarr).to.have.ordered.members([ 1,2,3,4,5,6 ])
  })
  step('desc', () => {
    let arr = [6,5,4,3,2,1];
    let s = sorter(arr);
    let done = false;
    let next;
    let sortedarr;
    while (!done) {
      next = s.next();
      sortedarr = next.value?.array ?? sortedarr;
      done = next.done;
    }
    expect(sortedarr).to.have.ordered.members([ 1,2,3,4,5,6 ])
  })
})
