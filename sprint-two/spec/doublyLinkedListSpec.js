describe('Doubly Linked List', () => {
  let auxDLLES6;
  beforeEach(() => {
    auxDLLES6 = new DoublyLinkedList();
    auxDLLES6.addFromFront(1);
  });

  it('should have a quantity of 1', () => {
    expect(auxDLLES6.qty).to.equal(1);
  });
  it('should have 2 at its head', () => {
    auxDLLES6.addFromFront(2);
    expect(auxDLLES6.front.val).to.equal(2);
  });
  it('should be 2 <-- 1 <-- when added at the front', () => {
    auxDLLES6.addFromFront(2);
    expect(auxDLLES6.printList()).to.equal('2 <-- 1 <-- ');
  });
  it('should be 2 <-- 3 <-- 1 <-- when added after', () => {
    auxDLLES6.addFromFront(2);
    auxDLLES6.addAfter(2, 3);
    expect(auxDLLES6.printList()).to.equal('2 <-- 3 <-- 1 <-- ');
  });
  it('should be 2 <-- 3 <-- when removed at the end', () => {
    auxDLLES6.addFromFront(2);
    auxDLLES6.addAfter(2, 3);
    auxDLLES6.removeBack();
    expect(auxDLLES6.printList()).to.equal('2 <-- 3 <-- ');
  });
  it('removes 3 out of 2 <-- 4 <-- 3 <-- 1 <-- ', () => {
    auxDLLES6.addFromFront(2);
    auxDLLES6.addAfter(2, 4);
    auxDLLES6.addAfter(4, 3);
    auxDLLES6.remove(4);
    expect(auxDLLES6.printList()).to.equal('2 <-- 3 <-- 1 <-- ');
  });
  it('removes 4 returning 4', () => {
    auxDLLES6.addFromFront(2);
    auxDLLES6.addAfter(2, 4);
    auxDLLES6.addAfter(4, 3);

    expect(auxDLLES6.remove(4).val).to.equal(4);
  });
  it('removes 2 at front', () => {
    auxDLLES6.addFromFront(2);
    auxDLLES6.addAfter(2, 4);
    auxDLLES6.addAfter(4, 3);
    expect(auxDLLES6.removeFront().val).to.equal(2);
  });
});