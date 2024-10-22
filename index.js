"use strict";
const type = {
  v4: {
    httpsUrl: "https://api.ipify.org/"
  },
  v6: {
    httpsUrl: "https://api6.ipify.org/"
  }
};

const getIp = async version => {
  const data = type[version];
  try {
    const response = await fetch(data.httpsUrl);
    const ip = response.text();
    return ip;
  } catch (e) {
    return null;
  }
};

module.exports.v4 = () => {
  return getIp("v4");
};

module.exports.v6 = () => {
  return getIp("v6");
};
