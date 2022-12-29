'use strict';
class JSWorker {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    print(nameProperty) {
        console.log(`Requested value: ${this[nameProperty]}`);
    }

    set(name, value) {
        this[name] = value;
        console.log(`this.${name} = ${value}`);
    }

    logValuesAandB() {
        console.log((+this.a) + (+this.b));
    }
}


const worker = new JSWorker(2, "2");
worker.logValuesAandB();
worker.print("a");
worker.set("@", console.log);

worker.print("@");

/* const trnewWirker*/

// worker.logValuesAandB

// void main

// select