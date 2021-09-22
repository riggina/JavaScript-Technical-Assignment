/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE

for (let i = 1 ; i <= 100 ; i++){
    let prima = true;
    if (i < 2){
        console.log(i + "" + "Bukan bilangan prima");
        break;
    }else if ( i > 2){
        for (let j = 2 ; j <= 100 ; j++){
             if (i % j === 0 && i != j){;
                prima = false;
                break;
            }
        }}
        if (prima = true){
            console.log(i + "" + "Bilangan Prima")
        }else{
            console.log(i + "" + "Bilangan Bukan Prima")
    }   
}
/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

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