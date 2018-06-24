const fs = require('fs');
const fileName = './data_files/random1.txt';
const destFile = './data_files/random1-ws.txt';
const stats = fs.statSync('./data_files/random1.txt')
const fileSize = stats.size;
let percentUploaded = 0;

console.log(`Child 1 PID:${process.pid}`);

const options = {
    encoding: 'utf8', 
    highWaterMark: Math.floor(Math.random() * 1000+100)
};


const readStream = fs.createReadStream(fileName , options);
const writeStream = fs.createWriteStream(destFile);

readStream.pipe(writeStream);

readStream.on('data', (chunk)=>{
    percentUploaded += (chunk.length / fileSize * 100);
    process.send(
        (`Child 1: ${Math.floor(percentUploaded)} % uploaded`)
    );
    readStream.pause();
    setTimeout(()=>{
        readStream.resume();
    },1300);
});

readStream.on('end',()=>{
    process.send(
        (`\nChild 1: Reading Finished: ${readStream.bytesRead}\n`)
    );
});

writeStream.on('close', ()=>{
    process.send(
        (`\nChild 1: Writting Finished: ${writeStream.bytesWritten} bytes uploaded \n`)
    );
});