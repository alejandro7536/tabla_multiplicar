const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=');
// console.log(base);


// console.log(process.argv);
// console.log(argv);
createFile(argv.b, argv.l, argv.h).then(msg => console.log(msg)).catch(err => console.log(err));