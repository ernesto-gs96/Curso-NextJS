class Usuario {
    // Propiedades o atributos
    nombre : string;
    edad : number;

    constructor(nombre : string, edad : number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Metodos
    saludar() : void {
        console.log('Hola ',this.nombre);
    }

    modificar_nombre(nombre : string) : void {
        this.nombre = nombre;
    }

    regresar_nombre() : string {
        return this.nombre
    }
}

// Herencia
class Empleado extends Usuario{
    puesto : string;

    // Sobre escribir constructor
    constructor(nombre : string, edad : number, puesto : string) {
        super(nombre,edad);
        this.puesto = puesto;
    }

    // Sobre escribir metodos
    saludar(){
        super.saludar();
        console.log('Bienvenido ',this.nombre);   
    }
}

let nuevoUsuario : Usuario = new Usuario('Ernesto',27);

// Herencia
let nuevoEmpleado : Empleado = new Empleado('Cirilo',27,"Programador")