# react-public-ip
Get public IP address in React

## Install

```
$ npm install react-public-ip
```

## Usage

```js
const publicIp = require("react-public-ip");

const ipv4 = await publicIp.v4() || "";
const ipv6 = await publicIp.v6() || "";

```