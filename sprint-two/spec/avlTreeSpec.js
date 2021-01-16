describe('AVL', () => {
  let avlT;

  beforeEach(() => {
    avlT = new AVLTree(5);
    avlT.insert(2);
    debugger;
    avlT.insert(3);
    avlT.insert(7);
    avlT.insert(8);
    avlT.insert(9);
    avlT.insert(10);
  });

  it('breadth first log order is [5, 2, 7, 3, 8, 9, 10]', function() {
    expect(avlT.breadthFirstLog()).to.eql([5, 2, 7, 3, 8, 9, 10]);
  });
  it('node 7 should have a height of 3', () => {
    expect(avlT.calculateNodeHeight(avlT.root.right)).to.equal(3);
  });
  it('node 2 should have a height 1', () => {
    expect(avlT.calculateNodeHeight(avlT.root.left)).to.equal(1);
  });
  it('target 8 should yield node with the value 8', () => {
    const node = avlT.search(8);
    expect(node.value).to.equal(8);
  });
  it('target 8 should yield a height of 2', () => {
    const node = avlT.search(8);
    expect(avlT.calculateNodeHeight(node)).to.equal(2);
  });
  it('target 9 should yield a height of 1', () => {
    const node2 = avlT.search(9);
    expect(avlT.calculateNodeHeight(node2)).to.equal(1);
  });
  it('target 9 should yield a balance factor of -1', () => {
    const node2 = avlT.search(9);
    expect(avlT.determineBalanceFactor(node2)).to.equal(-1);
  });
  it('target 8 should yield a balance factor of -2', () => {
    const node2 = avlT.search(8);
    expect(avlT.determineBalanceFactor(node2)).to.equal(-2);
  });
  it('target 7 should yield a balance factor of -3', () => {
    const node2 = avlT.search(7);
    expect(avlT.determineBalanceFactor(node2)).to.equal(-3);
  });
  it('target 5 should yield a balance factor of -2', () => {
    const node2 = avlT.search(5);
    expect(avlT.determineBalanceFactor(node2)).to.equal(-2);
  });
});
