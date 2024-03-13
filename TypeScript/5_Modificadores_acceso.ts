class Usuario {
    protected id : number; // Se puede usar en la clase y herencias
    public nombre : string; // Se puede usar en donde sea
    private password : number; // Solo se puede usar en su clase padre

    constructor(nombre : string, password : number) {
        this.id = 12345;
        this.nombre = nombre;
        this.password = password;
    }
}

class Empleado extends Usuario{
    imprimir_id() : void {
        console.log(this.id);
    }

    cambiar_password(password : number) : void {
        this.password = password;
    }
}