const button = document.querySelector('button');
button.addEventListener('click',()=>{
    // read the input:
    const input1 = document.getElementById('first');
    const number1 = Number(input1.value);

    const input2 = document.getElementById('second');
    const number2 = Number(input2.value);

    // check 
    if(isNaN(number1) || isNaN(number2))
        return;

    // output
    const result = number1 + number2; 
    const ans = document.getElementById('result');
    ans.textContent = "Result: " +result;
})

