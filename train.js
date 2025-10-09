/*
TASK G:

Yagona parametrga ega function tuzing.
Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.*/ 

// getHighestIndex.js

function getHighestIndex(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Argument massiv (array) bo‘lishi kerak!");
  }


 
  let max = arr[0];
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }

  return index;
}


console.log(getHighestIndex([10, 3, 45, 7]));        











//=============================================================================================
/* TASK-F

Yagona string argumentga ega findDoublers nomli function tuzing
Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
true yokida false natija qaytarsin.

MASALAN: findDoublers("hello"); natija true qaytadi.
Sababi ikki marotaba takrorlangan 'll' harfi mavjud! */

// function findDoublers(str) {
//   if (typeof str !== "string") {
//     throw new TypeError("Argument string bo‘lishi kerak!");
//   }

//   const word = new Set();

//   for (let ch of str) {
//     if (word.has(ch)) {
//       return true; 
//     }
//     word.add(ch);
//   }

//   return false; 
// }


// console.log(findDoublers("modelling")); 
// console.log(findDoublers("adbk"));

















//=============================================================================================
/*
MIT E-TASK

Shunday function tuzing, u bitta string 
argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"
*/  
  
//   function getReverse(str) {

//   return str.split("").reverse().join("");
// }


// console.log(getReverse("response"));   


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // MITASK-D
  /***************************************************************************
   * Shunday function tuzing, u 2ta string parametr ega bolsin, 
   * hamda agar har ikkala string bir hil harflardan iborat bolsa true 
   * aks holda false qaytarsin
   *   MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true   
   *  * *************************************************************************/
   
//   function Tekshiruvchi(str1, str2) {
//     if (str1.length !== str2.length) return false;
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();
//     let sorted1 = str1.split("").sort().join("");
//     let sorted2 = str2.split("").sort().join("");

//     return sorted1 === sorted2;
// }

// console.log(Tekshiruvchi("JavaScript", "jvsaaicrpt")); 

  
  
  
  //MITASK-C 

/****************************************************** 
Shunday class tuzing tuzing nomi Shop,
 va uni constructoriga 3 hil mahsulot pass bolsin, 
hamda classning 3ta methodi bolsin, biri qoldiq, 
biri sotish va biri qabul. 
Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() 
return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq()
 return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
******************************************************************************/
// const moment = require("moment");

// class Shop {
//     constructor(Osh, Olma, Cola) {
//         this.products = {
//            Osh : Osh,
//            Olma: Olma,
//            Cola: Cola
//         };
//     }

//     qoldiq() {
//         const time = moment().format("HH:mm");
//         const {Osh, Olma, Cola} = this.products;
//         const text = `hozir ${time}da ${Osh}ta osh, ${Olma}kg olma va ${Cola}ta cola mavjud!`;
//         console.log(text);
//         return text;
//     }

//     sotish(nomi, son) {
//         const time = moment().format("HH:mm");
//         if (!Object.keys(this.products).includes(nomi)) {
//             console.log(`Mahsulot topilmadi: ${nomi}`);
//             return;
//         }
//         if (this.products[nomi] < son) {
//             console.log(`Yetarli ${nomi} yo‘q! Hozircha ${this.products[nomi]}ta bor.`);
//             return;
//         }
//         this.products[nomi] -= son;
//         console.log(`hozir ${time}da ${son}ta ${nomi} sotildi.`);
//     }

//     qabul(nomi, son) {
//         const time = moment().format("HH:mm");
//         if (!Object.keys(this.products).includes(nomi)) {
//             console.log(`Mahsulot topilmadi: ${nomi}`);
//             return;
//         }
//       this.products[nomi] += son;
//         console.log(`hozir ${time}da ${son}ta ${nomi} qabul qilindi.`);
//     }
// }


// const shop = new Shop(4, 5, 2);
// shop.qoldiq();            
// shop.sotish('Osh', 3);    
// shop.qabul('Cola', 4);   
// shop.qoldiq();           












//====================================================================================================
// TASK B: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// Masalani yechimi:


// function countDigits(string) {
//     let count = 0; 


//     for (let i = 0; i < string.length; i++) {
//         let ch = string[i]; 

      
//         if (ch >= '0' && ch <= '9') {
//             count = count + 1; 
//         }
//     }

//     return count; 
// }


// console.log(countDigits("439622igfksgfskgf7r7882")); 

   






// A-TASK: 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// masala yechimi:

// function countLetter(letter, word) {
   
//     letter = letter.toLowerCase();
//     word = word.toLowerCase();

//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countLetter("e", "eeeeeeeeeeee")); 


//==========================================================


//Callback function



// console.log("Jack Ma maslahatalri");
// const list = [
//     "yaxshi talaba bo'ling", //20
//     "to'g'ri boshliq tanlang va koproq xato qling",//20-30
//     "ozingizga ishlashni boshlang",//30-40
//     "yoshlarga inves qiling",//40-50
//     "endi dam oling,foydasi yoq endi",//60
// // ];

// function maslahatBering(a, callback) {
//     if(typeof a!== "number") callback ("insert a number", null);
//     else if(a <=20) callback(null, list[0]);
//     else if(a <=20) callback(null, list[1]);
//     else if(a <=20) callback(null, list[2]);
//     else if(a <=20) callback(null, list[3]);
//     else if(a <=20) callback(null, list[4]);
//     else {
//         setInterval(function () {
//             callback(null, list[4]);
//         },5000);
//     }
// }

// console.log("Passed here 0");
// maslahatBering(70, (err,data) =>{
//     if(err) console.log("ERROR:",err);
//     else{
//         console.log(data);
//     }
// });
// console.log("passed here 1");





//Asynch function

// async function maslahatBering(a ) {
//     if (typeof a !=="number")throw new ERROR ("insert a number");
//     else if(a <=20) return list[0];
//     else if(a >20&&a<=30) return list[1];
//     else if(a >30&&a<=40) return list[2];
//     else if(a >40&&a<=50) return list[3];
//     else if(a >50&&a<=60) return list[4];
//     else{
//         return new Promise ((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[4]);
//             },5000);
//         });
//     }
// }
//then/ catch

// console.log("passed here 0");
// maslahatBering(25)
// .then((data) => {
//     console.log("javob:",data);
// })
// .catch((err) => {
// console.log("ERROR:",err);
// });
// console.log("passed here 1");
  

// async/await
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(71);
//     console.log(javob);
//     javob = await maslahatBering(43);
//     console.log(javob);

// }
// run();