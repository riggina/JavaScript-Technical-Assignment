/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE

// function Prima(angka){
//     let prime = true;
//     if(angka < 2){
//         return false;
//     }
//     for(i = 2 ; i < angka ; i++){
//         if(angka % i === 0){
//             prime = false
//             break;
//         }
//     }return prime
// }

// for(angka = 0 ; angka <= 100 ; angka++){
//     if (Prima(angka) === true){
//         console.log(`${angka} Bilangan Prima` )
//     }else{
//         console.log(`${angka} Bukan Bilangan Prima`)
// // }
// // }

// console.log("==================BATAS SUCI===================")

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
function Prima(angka){
    let prime = true;
    if(angka < 2){
        return false;
    }
    for(i = 2 ; i < angka ; i++){
        if(angka % i === 0){
            prime = false
            break;
        }
    }return prime
}

let primeCounter = 0;
let fiftiethPrime = 229;
let angka = 0
for(angka = 0 ; angka <= fiftiethPrime ; angka++){
    while (primeCounter <= 50){
        if (Prima(primeCounter) === true){
            let show = console.log(primeCounter)
        

    



// while (primeCounter <= 50){
//     if (Prima(angka) === true){
//         console.log(angka[50])
//     }
//     angka++
// }

/// EDIT HERE
// while (primeCounter < 50) {
//     primeCounter++;
//     if primeCounter 

// }


// /// Soal - 03
// /// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
// let oddCounter = 0;
// let fiftiethOdd;

// /// EDIT HERE
// do { .... } while (....)