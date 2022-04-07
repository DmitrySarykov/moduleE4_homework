// Устройство
class Device {
    constructor(power) {
        this.power = power;
    }
    turnOn() {
        console.log("Прибор включен в розетку");
    }
    turnOff() {
        console.log("Прибор выключен из розетки");
    }
}

// Компьютер
class Computer extends Device {
    constructor(system, memory, capacity, power) {
        super(power);
        this.name = "Компьютер"; 
        this.system = system;
        this.memory = memory;
        this.capacity = capacity;
        this.power = power;
    }
    setInternet() {
        console.log("Интернет к компьютеру подключен!");
    }
    makeRestart(seconds) {
        console.log(`Компьютер перезагрузится через ${seconds} сек.`);
    }
    turnOn() {
        return super.turnOn()
    }
    turnOff() {
        return super.turnOff()
    }
}

const comp1 = new Computer("Windows","8ГБ","1ТБ","800Ватт");
const comp2 = new Computer("Linux","2ГБ","200ГБ","720Ватт");
console.log(comp1,comp2);
comp1.makeRestart(20)
comp2.setInternet()
comp1.turnOn();
// Лампа настольная
class Lamp extends Device {
    constructor(light, brightness, power) {
        super(power);
        this.name = "Лампа настольная";
        this.light = light;
        this.brightness = brightness;
        this.power = power;
    }
    changeLamp() {
        console.log("Лампочка заменена!");
    }
    setPosition(position, angle) {
        if (angle <= 360 && angle >= -360) {
            console.log(`Лампа повернута ${position} на ${angle} градусов`);
        } else {
            console.log("Невозможно повернуть лампу на такой угол!");
        }
    }
    turnOn() {
        return super.turnOn()
    }
    turnOff() {
        return super.turnOff()
    }
}
const lamp1 = new Lamp("Белый","Высокая","75Ватт");
const lamp2 = new Lamp("Желтый","Средняя","70Ватт");
console.log(lamp1,lamp2);
lamp1.changeLamp();
lamp2.setPosition("вправо", 25);
lamp1.turnOff();