# ip-cidr-rebase
Rebase CIDR into smaller subnets

## Install
```bash
npm i ip-cidr-rebase
```

## Use
```javascript
const cidrRebase = require('ip-cidr-rebase');

const cidr = '192.168.0.0/20';

const cidrs = cidrRebase(cidr, [8,16,24,32]);
```
