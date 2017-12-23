var chai = require('chai');
var expect = chai.expect;

var rebase = require('./index.js');

describe('cidr rebase', function () {
    it('should return same cidr', function (done) {
        expect(rebase('192.168.0.0/20')).to.deep.equal(['192.168.0.0/20']);
        expect(rebase('192.168.0.0/20', [20])).to.deep.equal(['192.168.0.0/20']);
        done();
    });
    it('should return array of ips in the subnet', function (done) {
        expect(rebase('192.168.0.0/31', [])).to.deep.equal(['192.168.0.0/32','192.168.0.1/32']);
        expect(rebase('192.168.0.0/31', [32])).to.deep.equal(['192.168.0.0/32','192.168.0.1/32']);
        done();
    });
    it('should return array of smaller subnets in the subnet', function (done) {
        expect(rebase('192.168.0.0/20', [24])).to.deep.equal([
            '192.168.0.0/24',
            '192.168.1.0/24',
            '192.168.2.0/24',
            '192.168.3.0/24',
            '192.168.4.0/24',
            '192.168.5.0/24',
            '192.168.6.0/24',
            '192.168.7.0/24',
            '192.168.8.0/24',
            '192.168.9.0/24',
            '192.168.10.0/24',
            '192.168.11.0/24',
            '192.168.12.0/24',
            '192.168.13.0/24',
            '192.168.14.0/24',
            '192.168.15.0/24'
        ]);
        done();
    });
});
