// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Sarkarmd$eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0FEckQ1K3NWNlhobC9GS1BJcXltdmZycmlZNkcraVFQNkE0UUYyU3JrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODdTNktpZHc5YmRUaWZoUHkyQ1Niekx1NmJ1ajMyT0xrYVJjUkVKa3h6QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRzJucE5MZm83SHd0QWJlTFYyZlhDRHBLTWhRbG5KMUlEb0I1c1Y5U1dBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtdkxqYUtNbWU5Skp0K2N0b3NOMWRhLzA3N2YvQTRINGpUZnJjTXk5a3dBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRQSFBPK2NhMEEyamllRDJoanRqQmZVdDdoTGExZHh0RGg5KzdZZktIVUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRGczFwdm9EMW8xa1RYOFNNYTR6bHVoSHpaenJxYVVGaXc2TXRuSmNxU1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUYxT2MzeTlXQUFMUllmYVh4WlVQTlJSbHdORjQ0alRTdm52Zzhsam5rZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlFtODlJZFdVVWlpclFSSEkwWHNsNVJnMGtqQVlnQ3VwYjZOUHF0d1JXST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZSTURseERrL1lYaTFzem5Ma3B0SG5MV2x3WUFqZVZOenNhcW9qNmY0bHhMQmo4OWhZMTJycnhGZjErM3d2T1dQZkVhUW9qVUFldXluUEJBZ2U4YWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoiR2t4U2hDMkZobEgwaWRWVittWXZyenVXOS9KUXJ2amNwdGQrMElJNWhmdz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiMTIzTE9UVVMiLCJtZSI6eyJpZCI6IjI2MDc3NDAyOTI4OTo3OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJKdXN0aW5lcyBEaUNhcHJpb2giLCJsaWQiOiIxNzEyMzY2MzgzNjc4ODM6NzlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJVzV1WTBIRU8rbXhzSUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJleGp6YVg4TGxFNHV2Q1Y3cmp1Y1hnN1JURlJ4bTdkOWoxS1IrWTVIMnpZPSIsImFjY291bnRTaWduYXR1cmUiOiJEK3RFRFhncVZIcTBtc0phSXJ3L2ZHNS9NRVdpZm4vYzJoenQzRzJBTVNlT2NPSGYwVlFrditJRkpHRW52MFBTSzNMVWVuZmMxVHZQelRpR0VlaHFBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZFNxMFYrZlBHaFRla3hJY2pkeEtXUUQ5Ry96cXBsQ2Q2RmlreVFEV0gwZ1dNeitRWTNrREsrTll1cndJUXJkVkMveWd2WVVjU2pQR0tranUvbFVpZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjA3NzQwMjkyODk6NzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWHNZODJsL0M1Uk9McndsZTY0N25GNE8wVXhVY1p1M2ZZOVNrZm1PUjlzMiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwMTc2NjI3LCJsYXN0UHJvcEhhc2giOiIyRzRBbXUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhPMyJ9",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : false, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : false,
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : false,
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "Justines DiCaprioh",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "260774029289",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
