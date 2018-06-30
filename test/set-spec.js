/**
 * Created by bd on 8/20/14.
 */

const assert = require('assert');
const Set = require('../src/set');

describe('Set', () => {

  let set;

  beforeEach(() => {
    set = new Set();
  });

  afterEach(() => {
    set = null;
  });

  describe('init', () => {
    it('when init it should be empty', () => {
      assert.equal(set.size(), 0, 'size of empty set is 0');
    });
  });

  describe('#add', () => {
    it('add', () => {
      set.add(1);
      assert.equal(set.size(), 1, 'should be 1');

      set.add(2);
      set.add(3);
      assert.equal(set.size(), 3, 'should be 3');
    });

    it('add one item more than one times', () => {
      set.add(1);
      set.add(1);
      assert.equal(set.size(), 1, 'should add once');

      set.add(2);
      assert.equal(set.size(), 2, 'add another will be 2');
    });

    it('has', () => {
      assert.ok(!set.has(1), '_first has nothing');

      set.add(1);
      assert.ok(set.has(1), 'now has 1');
      assert.ok(!set.has('1'), 'string "1" is not number 1');
    });

    it('del', () => {
      var num = 5;
      for (var i = 0; i < num; i++) {
        set.add(i);
      }

      assert.equal(set.size(), num, 'now has ' + num + ' items');

      for (i = 0; i < num; i++) {
        assert.ok(set.has(i), 'has ' + i);
      }

      set.del(0);
      assert.ok(!set.has(0), 'delete the _first item');
      assert.equal(set.size(), num - 1);

      set.del(num - 1);
      assert.ok(!set.has(num - 1), 'delete the _last item');
      assert.equal(set.size(), num - 2);

      set.del(2);
      assert.ok(!set.has(2), 'delete an item in the middle');
      assert.equal(set.size(), num - 3);
    });
  });

  describe('#isSuperSet', () => {
    it('isSuperSet', () => {
      set.add(1);
      set.add(2);

      var aSet = new Set();
      assert.ok(set.isSuperSet(aSet));

      aSet.add(1);
      assert.ok(set.isSuperSet(aSet));

      aSet.add(2);
      assert.ok(set.isSuperSet(aSet));

      aSet.add(3);
      assert.ok(!set.isSuperSet(aSet));
    });
  });

  describe('#isSubSet', () => {
    it('isSubSet', () => {
      set.add(1);
      set.add(2);

      var aSet = new Set();
      assert.ok(!set.isSubSet(aSet));

      aSet.add(1);
      assert.ok(!set.isSubSet(aSet));

      aSet.add(2);
      assert.ok(set.isSubSet(aSet));

      aSet.add(3);
      assert.ok(set.isSubSet(aSet));
    });
  });

  describe('#equals', () => {
    it('equals', () => {
      var aSet = new Set();

      assert.ok(set.equals(aSet));

      set.add(1);
      assert.ok(!set.equals(aSet));

      aSet.add(1);
      assert.ok(set.equals(aSet));

      aSet.add(2);
      assert.ok(!set.equals(aSet));

      set.add(2);
      assert.ok(set.equals(aSet));
    });

    // todo: object item
  });

  // todo: clone

  describe('#intersection', () => {
    it('intersection', () => {

    });
  });


  describe('#union', () => {
    it('union', () => {
      set.add(1);
      set.add(2);

      var aSet = new Set();
      aSet.add(2);
      aSet.add(3);


    });
  });


  describe('#clear', () => {
    it('clear', () => {
      set.add(1);
      set.add(2);
      set.add(3);

      assert.equal(set.size(), 3);

      set.clear();
      assert.equal(set.size(), 0, 'should be 0 after clear');
    })
  });

  describe('#valueOf', () => {
    it('valueOf', () => {
      assert.equal(set.valueOf().toString(), [].toString());

      set.add(1);
      set.add(4);
      set.add(2);
      set.add(1);

      assert.equal(set.valueOf().toString(), [1, 2, 4].toString());
    });


    // todo: object item
  });
});