const {fork} = require('child_process');

console.log(`Main PID:${process.pid}`);

const child1 = fork('children/child01.js');

child1.on('message', (msg)=>{
    let output = msg;
    process.stdout.clearScreenDown(10);
    process.stdout.cursorTo(0);
    process.stdout.write(`${output}`);
    output = '';
});


const child2 = fork('children/child02.js');

child2.on('message', (msg2)=>{
    let output2 = msg2;
    process.stdout.clearScreenDown();
    process.stdout.cursorTo(0);
    process.stdout.write(`${output2}`);
    output2 = '';
});