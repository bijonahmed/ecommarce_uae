'use strict';

function isHTTPS(req, trustProxy = true) {
  const _xForwardedProto = trustProxy && req.headers ? req.headers["x-forwarded-proto"] : void 0;
  const protoCheck = typeof _xForwardedProto === "string" ? _xForwardedProto.includes("https") : void 0;
  if (protoCheck) {
    return true;
  }
  const _encrypted = req.connection ? req.connection.encrypted : void 0;
  const encryptedCheck = _encrypted !== void 0 ? _encrypted === true : void 0;
  if (encryptedCheck) {
    return true;
  }
  if (protoCheck === void 0 && encryptedCheck === void 0) {
    return void 0;
  }
  return false;
}

var dist = isHTTPS;

const _location = typeof location !== "undefined" ? location : {origin: "", pathname: "/"};
function getURL(req, includePath) {
  if (!req) {
    return _location.origin + (includePath ? _location.pathname : "");
  }
  return encodeURI("http" + (dist(req) ? "s" : "") + "://" + (req.headers["x-forwarded-host"] || req.headers.host) + (includePath ? req.url : ""));
}

module.exports = getURL;
