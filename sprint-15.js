//1

// function overloadedFunc(arg1 = [1,2,3], arg2 = 2, arg3 = () => {return arg1 * arg2})
// {
//
//          return arg1.forEach((el) => (el * arg2) * arg3)
//
// }
//&& (typeof(arg2) === 'number') && (typeof(arg3) !== 'function'
//
// Конструктор класу SpeedLimiter приймає 2 параметри: поточну швидкість автомобіля та
// функцію попередження про перевищення швидкості. Поточна швидкість автомобіля та
// функція попередження повинні зберігатися в privateSpeed ​​
// та privateWarning за допомогою WeakMap ().
// Приватні змінні ініціалізуються в конструкторі класу.
// Функція privateWarning викликається, коли поточна швидкість автомобіля
// privateSpeed ​​перевищує максимально допустиму швидкість 200 км / год.
// Функція попередження відображає повідомлення «Ви їдете занадто швидко! Ваша швидкість зменшена».
//
//
// Клас SpeedLimiter має метод accelerate(value), який збільшує поточну швидкість автомобіля на значення значення (результат записується в приватну змінну privateSpeed), відображає поточне значення швидкості в консолі. Якщо значення поточної швидкості перевищує максимально допустиму, викликається функція, яка міститься в privateWarning, яка формує попереджувальне повідомлення, а значення швидкості зменшується до максимально допустимого, і відображається в консолі.
// const privateSpeed = new WeakMap();
// const privateWarning = new WeakMap();
//
// class SpeedLimiter {
//     constructor(privateSpeed, privateWarning) {
//         this.privateSpeed = privateSpeed;
//         this.privateWarning = privateWarning;
//         this.message = "You are driving too fast! Your speed is reduced.";
//     }
//
//     accelerate () {
//
//     }
// }
import {compose} from 'redux';

const privateSpeed = new WeakMap();
const privateWarning = new WeakMap();

class SpeedLimiter {
    constructor(currentSpeed, message) {
        privateSpeed.set(this, currentSpeed);
        privateWarning.set(this, message);
    }
    accelerate(speedIncrease) {
        privateSpeed.set(this, privateSpeed.get(this) + speedIncrease);
        if(privateSpeed.get(this) > 200) {
            console.log(`Current speed: ${privateSpeed.get(this)} km/h`)
            privateSpeed.set(this, 200);
            privateWarning.get(this)();
        }
        console.log(`Current speed: ${privateSpeed.get(this)} km/h`)
    }
}


//3
const upperCase = str => str.toUpperCase();
const tripleExclaim = str => `${str}!!!`;
const split = str => str.split();
const join = str => str.join().replace(/_/g, " ");
const copy = str => `${str} ${str}`;

const createComposition = (...functions) => val => functions.reduceRight((prev, fn) => fn(prev), val);

const result = createComposition(upperCase, tripleExclaim, split, join, copy);

//4
class Plane  {
    constructor(model, fuelSupply, fuelConsumption) {
        this.model = model
        this.fuelSupply = fuelSupply;
        this.fuelConsumption = fuelConsumption;
    }

    calcFlightRange(){
        return this.fuelSupply / this.fuelConsumption * 100
    }
    static sortFlightRange(planes){
        planes.sort((el1, el2) => el1.calcFlightRange()-el2.calcFlightRange());
        planes.map(plane => console.log(`${plane.model}: ${plane.calcFlightRange()}`))
    }
}

class TransportPlane extends Plane {
    constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
        super(model, fuelSupply, fuelConsumption);
        this.cargo = cargo;
        this.addTank = addTank;
    }
    calcFlightRange() {
        return (this.fuelSupply+this.addTank) / this.fuelConsumption * 100;
    }
}

class PassengerPlane extends Plane {
    constructor(model, fuelSupply, fuelConsumption, passengers, refueling) {
        super(model, fuelSupply, fuelConsumption);
        this.passegers = passengers;
        this.refueling = refueling;
    }
    calcFlightRange() {
        return (this.fuelSupply+this.refueling) / this.fuelConsumption * 100;
    }
}

class WarPlane extends Plane {
    constructor(model, fuelSupply, fuelConsumption,missiles, aerodynamicsСoef) {
        super(model, fuelSupply, fuelConsumption);
        this.missiles = missiles;
        this.aerodynamicsСoef = aerodynamicsСoef;
    }
    calcFlightRange() {
        return (this.fuelSupply*this.aerodynamicsСoef) / this.fuelConsumption * 100;
    }
}











