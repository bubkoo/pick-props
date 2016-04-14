'use strict';

var expect = require('chai').expect;


describe('pick-props: ', function () {

  var pickProps = require('../../');

  it('common', function () {

    expect(pickProps()).to.be.eql([]);
    expect(pickProps(null)).to.be.eql([]);
    expect(pickProps(1)).to.be.eql([]);
    expect(pickProps('a')).to.be.eql([]);
    expect(pickProps([])).to.be.eql([]);
    expect(pickProps({})).to.be.eql([]);

    expect(['a', 'b', 'c']).to.include.members(pickProps(['a', 'b', 'c']));
    expect([1, 2, 3]).to.include.members(pickProps({ a: 1, b: 2, c: 3 }));

    expect(pickProps({ a: 1, b: 2, c: 3 })).to.have.length.most(3);
    expect(pickProps({ a: 1, b: 2, c: 3 }, 1)).to.have.length(1);

  });
});
