const formatFullName = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullName', () => {
  it('should return error if no argument is provided, or typeof arg is not a string', () => {
    expect(formatFullName()).to.equal('Error');
    expect(formatFullName([])).to.equal('Error');
    expect(formatFullName({})).to.equal('Error');
    expect(formatFullName(4)).to.equal('Error');
    expect(formatFullName(() => {})).to.equal('Error');
  });
  it('should return error if argument consists of more than 2 substrings separated with space', () => {
    expect(formatFullName('John A Doe')).to.equal('Error');
  });
  it('should return properly formatted output', () => {
    expect(formatFullName('amanda doe')).to.equal('Amanda Doe');
    expect(formatFullName('JOHN doE')).to.equal('John Doe');
  });
});
