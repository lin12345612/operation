// 实现命令行计算器

// 启用严格模式
"use strict";
const args = process.argv.slice(2);

let parameter = args[0];
let operator = args[1];
let parametre2 = args[2];

// let result = eval(`${parameter} ${operator} ${parametre2}`);
let result;
switch(operator){
    case "+" :
    result = parameter + parametre2;
    break;
    case "-" :
    result = parameter - parametre2;
    break;
    case "x" :
    result = parameter * parametre2;
    break;
    case "÷" :
    result = parameter / parametre2;
    break;
}

console.log(result);