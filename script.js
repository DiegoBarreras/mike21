let num1 = 0;
let num2 = 0;

function calc() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    document.write(`SUMA: ${num1} + ${num2} = ${num1 + num2} <br></br>`);
    document.write(`RESTA: ${num2} - ${num1} = ${num2 - num1} <br></br>`);
    document.write(`DIVISION: ${num2} / ${num1} = ${num2 / num1} <br></br>`);
    document.write(`MULTIPLICACION: ${num2} * ${num1} = ${num2 * num1} <br></br>`);
    document.write(`EXPONENCIACION: ${num2} ^ ${num1} = ${num2 ** num1} <br></br>`);
}