# ip-cidr-rebase
Rebase CIDR into smaller subnets.

Why does this exist? Well, AWS WAF only allows `[8,16,24,32]`, using this function you can convert `x.x.x.x/20` into 
16 `x.x.x.x/24` CIDR Ranges. Great for build scripts.

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
