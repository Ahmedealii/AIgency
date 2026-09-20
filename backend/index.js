"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./src/server.js");
const CEOAgent_js_1 = __importDefault(require("./core/CEOAgent.js"));
const Offices_js_1 = require("./agents/Offices.js");
new Offices_js_1.CodingOffice();
new Offices_js_1.DebuggingOffice();
new Offices_js_1.BrainstormingOffice();
console.log('AIgency Backend Started. Company is Open for Business!');
//# sourceMappingURL=index.js.map