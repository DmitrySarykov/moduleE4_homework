// Устройство
function Device(power){
    this.power = power
}
Device.prototype.turnOn = function(){
    console.log("Прибор включен в розетку");
}
Device.prototype.turnOff = function(){
    console.log("Прибор выключен из розетки");
}

// Компьютер
function Computer(system,memory,capacity,power){
    this.name = "Компьютер",
    this.system = system,
    this.memory = memory,
    this.capacity = capacity,
    this.power = power
}
Computer.prototype = new Device()
Computer.prototype.setInternet = function(){
    console.log("Интернет к компьютеру подключен!");
}
Computer.prototype.makeRestart = function(seconds){
    console.log(`Компьютер перезагрузится через ${seconds} сек.`);
}

const comp1 = new Computer("Windows","8ГБ","1ТБ","800Ватт");
const comp2 = new Computer("Linux","2ГБ","200ГБ","720Ватт");
console.log(comp1,comp2);
comp1.makeRestart(20);
comp2.setInternet();


// Лампа настольная
function Lamp(light,brightness,power){
    this.name = "Лампа настольная",
    this.light = light,
    this.brightness = brightness,
    this.power = power
}
Lamp.prototype = new Device()
Lamp.prototype.changeLamp = function(){
    console.log("Лампочка заменена!");
}
Lamp.prototype.setPosition = function(position, angle){
    if (angle <= 360 && angle >= -360){
        console.log(`Лампа повернута ${position} на ${angle} градусов`);
    } else{
        console.log("Невозможно повернуть лампу на такой угол!");
    }
    
}
const lamp1 = new Lamp("Белый","Высокая","75Ватт");
const lamp2 = new Lamp("Желтый","Средняя","70Ватт");
console.log(lamp1,lamp2);
lamp1.changeLamp();
lamp2.setPosition("вправо", 25);

