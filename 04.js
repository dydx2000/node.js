const gretting = name => `hello, ${name}`;
const x =100;
exports.x = x;
module.exports.gretting = gretting;

console.log(gretting("zhang san"))