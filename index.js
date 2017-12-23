const CIDR = require('ip-cidr');

module.exports = (rawCidr, allowed = null) => {
    if (!allowed) return [rawCidr];
    if (allowed.indexOf(32) === -1) allowed.push(32);
    allowed = allowed.sort((a, b) => (a - b)).reverse();

    const cidr = new CIDR(rawCidr);
    const all = cidr.toArray();
    const list = [];
    while (all.length) {

        let mask = 32;
        let decimal = 1;

        const allowedCopy = JSON.parse(JSON.stringify(allowed));
        while (allowedCopy.length) {
            const maxMask = allowedCopy.pop();
            const maxDecimal = Math.pow(2, 32 - maxMask);

            if (all.length >= maxDecimal) {
                decimal = maxDecimal;
                mask = maxMask;
                break;
            }
        }

        list.push(`${all[0]}/${mask}`);

        all.splice(0, decimal);
    }

    return list;
};
