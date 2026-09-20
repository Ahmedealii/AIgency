import './src/server.js';
import CEOAgent from './core/CEOAgent.js';
import { CodingOffice, DebuggingOffice, BrainstormingOffice } from './agents/Offices.js';

new CodingOffice();
new DebuggingOffice();
new BrainstormingOffice();

console.log('AIgency Backend Started. Company is Open for Business!');
