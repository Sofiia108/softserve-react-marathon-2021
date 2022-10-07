    //  TASK 1

    function getModifiedArray(array) {

        const firstEl = "Start";
        const lastEl = "End";

        let modifiedArr = [...array];
        if (modifiedArr[0] === firstEl && modifiedArr[modifiedArr.length - 1] == lastEl) {

            return modifiedArr;
        } else {
            modifiedArr = modifiedArr.slice(1, -1);
            modifiedArr.unshift(firstEl);
            modifiedArr.push(lastEl);
            return modifiedArr;
        }
    }
        console.log(getModifiedArray([12, 6, 22, 0, -8]));

    // TASK 2

    function combineArray(arr1, arr2) {

        let resultArr = arr1.concat(arr2).filter(el => Number.isInteger(el));
        return resultArr;

    }
    console.log(combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]))

    // TASK 3

    function factorial(n) {
        let r = 1;
        while (n > 0) r *= n--;
        return r;
    }

    function processArray(arr, factorial) {
        return arr.map(el => factorial(el));
    }
    console.log(processArray([1, 2, 3, 4, 5], factorial));

    // TASK 4

    function longestLogin(loginList) {
        return loginList.reduce(function(a,b){
           return (a.length > b.length) ? a : b;
        })
    }

    console.log(longestLogin(["user1", "user2", "333", "user4", "aa"]));

    // TASK 5

    function checkAdult(age) {
        if (age === undefined) console.log("Error Please, enter your age");
        else if (Number(age)) {
            if (Number.isInteger(age)) {
                if (age >= 18) console.log("Access allowed");
                else if (age < 0) console.log("Error Please, enter positive number");
                else if (age < 18) console.log("Error Access denied - you are too young!")
            }
            if(!Number.isInteger(age))console.log("Error Please, enter Integer number");
        }
        else if(isNaN(age)){
            console.log("Error Please, enter number")
        }
        console.log("Age verification complete");
    }

    // TASK 6

    const combineFunctions =  function accountPatients(patients){

        let patientsCount = patients;
        if(patientsCount <= 0) console.log("Can not admit a patient, no beds available");
        if(patientsCount >= patients) console.log("There are no patients to discharge");
        function admit(){
            patientsCount--;
            console.log(`A patient was admitted, ${patientsCount} beds are available`);
        }
        function discharge(){
            patientsCount++;
            console.log(`A patient was discharged, ${patientsCount} beds are available`);
        }
        return [admit,discharge];
    }