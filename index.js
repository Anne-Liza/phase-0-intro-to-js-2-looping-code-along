// Code your solutions in this file
const name=["Guadalupe", "Ollie", "Aki"];
console.log(name);

function writeCards(name, event){
    const thankYouMesages = [];
    for (let i =0; i<name.length; i++ ){
        thankYouMesages.push (`Thank you, ${name[i]}, for the wonderful surprise gift!`);
        debugger;
    }
    return thankYouMesages;
}
writeCards(name);

function countDown(number){
    while (number>= 0){
        console.log(number);
        number --;
    }
}
countDown(20);



