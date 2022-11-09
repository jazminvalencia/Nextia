class Camion {
    constructor(capacidad, conductor) {
        this.capacidad = capacidad;
        this.pasajeros = 0;
        this.conductor = conductor;
    }
    subir(pasajeros) {
        if (this.pasajeros + pasajeros  <= this.capacidad) {
            this.pasajeros += pasajeros;
            console.log(`exito, pasajeros a bordo ${this.pasajeros}`);
        } else {
            console.log("error limite de pasajeros alcanzado, intete con una cantidad menor o baje pasajeros");
        }
    }
    bajar(pasajeros) {
        if (this.pasajeros - pasajeros >= 0) {
            this.pasajeros -= pasajeros;
            console.log(`exito, pasajeros a bordo ${this.pasajeros}`);
        } else {
            console.log("error no se pueden bajar mas de los pasajeros existentes, intete con una cantidad menor o suba mas pasajeros");
        }
    }
    setConductor(conductor) {
        this.conductor = conductor;
    }

}

class Conductor {
    constructor(nombre, licencia) {
        this.nombre = nombre;
        this.licencia = licencia;
    }
}

let main = () => {
    let conductor = new Conductor('jazz', 0001);
    let camion = new Camion(10, conductor);
    camion.subir(5);
    camion.bajar(2);
    camion.bajar(5);
    camion.subir(10);
    console.log(camion);
}
main();