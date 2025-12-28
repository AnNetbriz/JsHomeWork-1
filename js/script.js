// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

/*console.log(1 > 0); // true
console.log(0 > 0);   // false
console.log(-3 > 0);  // false */

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

/*console.log("test" === "test");    // true
console.log("qwerty" === "test");  // false
console.log(true === "test");      // false */

/* "test" === "test" ? console.log(true) : console.log(false);    // true
"qwerty" === "test" ? console.log(true) : console.log(false);  // false
true === "test" ? console.log(true) : console.log(false);      // false */

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.
/* 1 > 10 ? console.log(1 - 5) : console.log(1 + 5);   // 6
10 > 10 ? console.log(10 - 5) : console.log(10 + 5); // 15
13 > 10 ? console.log(13 - 5) : console.log(13 + 5); // 8  */

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

/*  const monthNum = prompt("Введіть число від 1 до 12");

let month;

switch (monthNum) {
  case "1":
    month = "Січень";
    break;
  case "2":
    month = "Лютий";
    break;
  case "3":
    month = "Березень";
    break;
  case "4":
    month = "Квітень";
    break;
  case "5":
    month = "Травень";
    break;
  case "6":
    month = "Червень";
    break;
  case "7":
    month = "Липень";
    break;
  case "8":
    month = "Серпень";
    break;
  case "9":
    month = "Вересень";
    break;
  case "10":
    month = "Жовтень";
    break;
  case "11":
    month = "Листопад";
    break;
  case "12":
    month = "Грудень";
    break;
  default:
    month = "Невірне число!";
}

console.log(month);
*/

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
/*  const num = prompt("Введіть тризначне число");
console.log(Number(num[0]) + Number(num[1]) + Number(num[2]));*/
