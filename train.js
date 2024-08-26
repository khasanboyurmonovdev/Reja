//MIT TASK-C
/*C-TASK: 

Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

@MITASK  */
function haveSameLetters(str1, str2) {
  const sortString = (str) => str.split("").sort().join("");
  return sortString(str1) === sortString(str2);
}
const result = haveSameLetters("listen", "silent");
console.log("result:", result);
console.log("******");
const result2 = haveSameLetters("hello", "world");
console.log("result2:", result2);

//MIT TASK-B
/*
B-TASK: 

Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/
/*
function countDigit(isNumber) {
  let count = 0;

  for (let i = 0; i < isNumber.length; i++) {
    if (!isNaN(isNumber[i]) && isNumber[i] !== " ") {
      count++;
    }
  }

  return count;
}

console.log("RESULT:", countDigit("ad2a54y79wet0sfgb9"));
*/

/*
console.log("Jack Ma maslahatlari");
const list = [
  "yaxshi talaba boling", //0-20
  "to'g'ri boshliq tanlang va ko'proq hato qiling", //20-30
  "uzingizga ishlashingizni boshlang", //30-40
  "siz kuchli bo'lgan  narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling, foydasi yoq endi", //60
];
//callback functions

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("Insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 30 && a <= 40) callback(null, list[1]);
  else if (a > 40 && a <= 50) callback(null, list[2]);
  else if (a > 50 && a <= 60) callback(null, list[3]);
  else if (a > 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 1000);
  }
}
console.log("passed here 0");
maslahatBering(70, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log(data);
  }
});
console.log("passed here 1");
*/

/*
async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("please insert number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(list[5]);
      }, 1000);
    });
    //setTimeout(function () {
    // return list[5];
    // }, 5000);
  }
}
*/
/*
console.log("passed here 0");
maslahatBering(25)
  .then((data) => {
    console.log("javob:", data);
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });
console.log("passed here 1");
*/
/*maslahatBering(10, (err, data) => {
  if (err) console.log("ERROR:", err);
  console.log("javob:", data);
});
maslahatBering(25, (err, data) => {
  if (err) console.log("ERROR:", err);
  console.log("javob:", data);
});
maslahatBering("Salom", (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
});
console.log("passed here 0");
maslahatBering(65, (err, data) => {
  if (err) console.log("ERROR:", err);
  console.log("javob:", data);
});
console.log("passed here 1");
*/
//async va await orqali qurdik
/*
async function run() {
  let javob = await maslahatBering(65);
  console.log(javob);
  
  javob = await maslahatBering(61);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
  
}
  */
// run();
// A-Task
//Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
//MASALAN countLetter("e", "engineer") 3ni return qiladi.
//For loop dan foydalanib
/*
function countLetter(letter, setLetter) {
  let count = 0;
  for (let i = 0; i < setLetter.length; i++) {
    if (setLetter[i] === letter) {
      count++;
    }
  }
  return count;
}
const result = countLetter("1", "121");
console.log("result:", result);
*/
//FILTER VA SPLITDAN FOYDALANDIK
/*
function countLetter(letter, element) {
  return element.split("").filter((ele) => ele === letter).length;
}
console.log(countLetter("e", "engineer"));
*/
//foreach orqali yechish
/*
function countLetter(letter, element) {
  let count = 0;
  element.split("").forEach((ele) => {
    if (ele === letter) {
      count++;
    }
  });
  return count;
}
const result = countLetter("e", "engineer");
console.log("result:", result);
*/
