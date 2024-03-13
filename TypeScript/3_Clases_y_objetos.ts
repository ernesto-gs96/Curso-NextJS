class Usuario {
    // Propiedades o atributos
    nombre : string;
    edad : number;

    constructor(nombre : string, edad : number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Metodos
    imprimir_nombre() : void {
        console.log(this.nombre);
    }

    modificar_nombre(nombre : string) : void {
        this.nombre = nombre;
    }

    regresar_nombre() : string {
        return this.nombre
    }
}

let nuevoUsuario : Usuario = new Usuario('Ernesto',27);

nuevoUsuario.imprimir_nombre();