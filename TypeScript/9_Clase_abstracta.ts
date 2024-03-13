// Comunmente utilizada para generar esqueletos
abstract class Usuario{
    nombre : string;
    edad : number;
    estado : boolean;

    abstract saludar() : string
}

class Empleado extends Usuario {
    saludar(): string {
        return 'Hola'
    }
}