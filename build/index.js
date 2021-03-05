"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const Url = 'https://www.youtube.com/watch?v=JQDHz72OA3c';
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });
    res.end(`${Url}`);
});
const _alphabet = '23456789bcdfghjkmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ-_', _base = _alphabet.length;
function encode(num) {
    let str = '';
    while (num > 0) {
        str = _alphabet.charAt(num % _base) + str;
        num = Math.floor(num / _base);
    }
    return str;
}
function decode(str) {
    let num = 0;
    for (var i = 0; i < str.length; i++) {
        num = num * _base + _alphabet.indexOf(str.charAt(i));
    }
    return num;
}
console.log(encode(123456789));
server.listen(9000);
console.log(`server started at http://localhost:9000`);
