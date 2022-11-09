class Cliente {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}

class Factura {
    constructor(idCliente,  total) {
        this.idCliente = idCliente,
        this.total = total;
        this.estado = 'pendiente';
    }
    pagar() {
        this.estado = 'pagada';
    }

    imprimir() {
        console.log(`idCliente: ${this.idCliente}, total: ${this.total}, estado: ${this.estado}`);
    }
}

let main = () => {
    let lista = [];
    lista.push(new Cliente('juan', 'correo@correo.com', '66727273237'));
    lista.push(new Cliente('juan1', 'correo1@correo.com', '166727273237'));
    lista.push(new Cliente('juan2', 'corre02@correo.com', '266727273237'));

    let factura1 = new Factura(0, 100);
    factura1.imprimir();
    factura1.pagar();
    factura1.imprimir();
}
main();