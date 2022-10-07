// TASK 1
function getPromise(delay, message) {

    return new Promise((resolve) => {
        if(delay >= 0 && delay <= 2000)
        {
            setTimeout(() => {
                resolve(message);
            },delay) ;
        }
    });
}

//TASK 2
function add(x, y) {
    return new Promise((resolve,reject) => {
        if(isFinite(x) && isFinite(y)) resolve(x+y);
        reject();
    }).catch(() => {console.log('Error!')})
}

// TASK 3
function add(x, y) {
    return new Promise((resolve,reject) => {
        if(isFinite(x) && isFinite(y)) resolve(x+y);
        reject();
    }).catch(() => {console.log('Error!')})
}

//TASK 4
function* take(n, iterable) {
    let index = 0;
    while (index < n){
        yield iterable[index];
        index++;
    }
}

// 6
async  function f(){
    let result = 'first';
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'),1000)
    });
    result = await promise;
    console.log(result)

}
f();

//8

const myPromise = () => Promise.resolve('I have resolved');

function firstFunction() {
    myPromise().then(res => console.log(res));
    console.log('second');
}

async function secondFunction() {
    console.log(await myPromise());
    console.log('second');
}

firstFunction();
secondFunction();

//9

async function* range(start, end){
    for(let i = start; i <= end; i++){
        yield Promise.resolve(i);
    }
}

(async () => {
    const gen = range(1,3);
    for await (const item of gen){
        console.log(item);
    }
})();

//10

const teams = [
    {name: 'Team 1', members: ['Paul', 'Lisa']},
    {name: 'Team 2', members: ['Laura', 'Tim']}
];

function* getMembers(members) {
    for (let i = 0; i < members.length; i++){
        yield members[i];
    }
}

function* getTeams(teams) {
    for (let i = 0; i < teams.length; i++){
        yield* getMembers(teams[i].members)
    }
}

const obj = getTeams(teams);
obj.next();
obj.next();



























