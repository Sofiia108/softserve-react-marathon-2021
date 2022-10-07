// TASK 1

function filterByN (arr, number=0, param = 'greater') {
    let resultArr = [...arr];
    switch (param){
        case 'greater':
            return resultArr.filter(elem => elem > number);
        case 'less':
            return resultArr.filter(elem => elem < number);
    }
}

//TASK 2
/*
function howMuchSec (seconds, minutes, hours, days, weeks, months, years) {
    if(arguments === undefined) return 0;
    else {
        const args = Array.from(arguments);
        let calculation = [];
        const data = [1, 60, 60, 24, 7, 4, 12];

        let amount = 1;
        for (let i = 0; i < data.length; i++) {
            amount *= data[i];
            calculation.push(amount);
        }
        const sum = args.reduce((acc, curr, i) => acc + curr * calculation[i]);
        return sum;
    }
   // const count = data.reduce((acc, curr) => acc*curr);
  //  return args.reduce((accumulator, current, index) => accumulator + (current * count[index]), 0);
}
console.log(howMuchSec(1,4,5));


// TASK 3
function maxInterv() {
    const args = Array.from(arguments).filter(x => x > -1);
    const result = Math.max(...args)-Math.min(...args);
    return result;
}
*/
const combineFunctions  = () => {
    let args = Array.from(arguments).flat();
    if(args.length === 1)
    {
        let a = x => x;
        return a;
    }
    else{
        const args = Array.from(arguments);
        let result = [];
        for(let i = 1; i < args.length; i++){
            args[i] = new Array(args[i-1]);
            result.push(args[i]);
        }
        result.flat();
        return result[0];
    }
}

combineFunctions()(5);








