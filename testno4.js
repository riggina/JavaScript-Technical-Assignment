// let prima = true;
// for( i = 1; i <= 100; i++){
//     if (i < 2 == 0){
//         (prima = false);
//     }else{
//         let j = 3
//         while (j <= Math.sqrt(i)){
//             if ((i % 2) == 0){
//                 prima = false;
//             }else{
//                 prima = true
//             }
            
//         }
//     }if (prima == true){
//         console.log(i + " " + "Bilangan Prima")
//     }else{
//         console.log(i + " " + "Bukan bilangan prima")
//     }
// }

// function isGanjil (nilai){
//     benar = true;
//     if (nilai % 2 !== 0){
//         benar = true;
//     }else{
//         benar = false;
//     }return nilai;
// }

// console.log(isGanjil(13))

// let a = 0
// while (a < 10){
//     if (a <= 10){
//         console.log(a.push[5]])
//     }
//     a++
// }

function Prima(primeCounter){
    let prime = true;
    if(primeCounter < 2){
        return false;
    }
    for(i = 2 ; i < primeCounter ; i++){
        if(primeCounter % i === 0){
            prime = false
            break;
        }
    }return prime
}

let primeCounter = 0;
let array = []
// let index = 0;
while (primeCounter < 1000){
    if (Prima(primeCounter) === true){
        if 
        console.log(array)
        break;   
    }
    primeCounter++
}