const os = require("os");
//for external mod only u have to install. here just name is needed

//info current user
const user = os.userInfo();
console.log(user);

//returns sys uptime in
console.log(`System uptime: ${os.uptime}s`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};
console.log(currentOS);
