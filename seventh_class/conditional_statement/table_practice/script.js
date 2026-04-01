/*for (let i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
}*/
for (let i=1; i<=20; i++){
    if(i==3){
        continue;
    }
    if(i>=15){
        break;
    }
    console.log(i);
}