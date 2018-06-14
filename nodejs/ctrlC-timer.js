let counter = 0;
let d = 0;

process.on('SIGINT', ()=>{
    process.stdout.write('ctrl+c not permitted ');
    counter++;
});

setInterval(()=>{
    d++;
    // console.log(d);
},1000);
        
        
setInterval(()=>{
    console.log('Runninig... ');
    if (d <= 10 && counter == 2){
        process.exit(1);
    }
},2000);

console.log(`PID:${process.pid}`);