const input = document.querySelector('input');
const btns = document.querySelectorAll('button');

let operators = ['+', '-', '*', '/'];

let str = "";
let arr = Array.from(btns);

arr.forEach((btns) => {
    btns.addEventListener('click', (e) => {
        if (e.target.innerText == '=') {
            str = eval(str)
            input.value = str;
        }
        else if (e.target.innerText == 'AC') {
            str = ""
            input.value = str;
        }
        else if (e.target.innerText == 'DEL') {
            str = str.substring(0, str.length - 1)
            input.value = str;
        }
        else if (e.target.innerText == '%') {
            let val = eval(str);
            val = val / 100;
            str = val.toString();
            input.value = str;
        }
        else if (e.target.innerText == '.') {
            let parts = str.split(/[\+\-\*\/]/);
            let lastnum = parts[parts.length - 1];
            if (!lastnum.includes('.')) {
                str += '.'
                input.value = str;
            }
        }
        else if (operators.includes(e.target.innerText)) {
            let lastChar = str[str.length - 1];
            if (!operators.includes(lastChar)) {
                str += e.target.innerText;
                input.value = str;
            }
        }
        else {
            str += e.target.innerText;
            input.value = str;
        }
    })
})