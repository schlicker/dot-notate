const expect = require('chai').expect;
const dotNotate = require('../index');

describe('#dotNotate()', function() {
    it('should flatten a two dimensional object', function() {
        expect(
            dotNotate({
                level1: {
                    level2: 'valueOnLevel2'
                }
            })
        ).to.eql({
            'level1.level2': 'valueOnLevel2'
        });
    });

    it('should flatten a multi dimensional object and preserve value types', function() {
        expect(
            dotNotate({
                this: {
                    one: 1
                },
                and: {
                    this: 2,
                    one: 3,
                    should: {
                        be: 'flattened'
                    }
                },
                'this.one': 'too'
            })
        ).to.eql({
            'this.one': 1,
            'and.this': 2,
            'and.one': 3,
            'and.should.be': 'flattened',
            'this.one': 'too'
        });
    });

    it('should not change a one dimensional object', function() {
        expect(
            dotNotate({
                level1: 'valueOnLevel1'
            })
        ).to.eql({
            level1: 'valueOnLevel1'
        });
    });

    it('should preserve null values', function() {
        expect(
            dotNotate({
                level1: null
            })
        ).to.eql({
            level1: null
        });
    });

    it('should prserve undefined values', function() {
        expect(
            dotNotate({
                level1: undefined
            })
        ).to.eql({
            level1: undefined
        });
    });
});
