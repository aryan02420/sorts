const sorts = require('../');
const sorter = sorts.Comb;
const expect = require('chai').expect;

describe('comb sort', () => {
  it('random', () => {
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
  });
  it('asc', () => {
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
  });
  it('desc', () => {
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
  });
});
