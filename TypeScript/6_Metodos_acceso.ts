class Usuario {
    protected id : number; // Se puede usar en la clase y herencias
    public nombre : string; // Se puede usar en donde sea
    private password : string; // Solo se puede usar en su clase padre

    constructor(nombre : string, password : string) {
        this.id = 12345;
        this.nombre = nombre;
        this.password = password;
    }

    // Metodos de acceso
    get get_password() : string {
        return this.password
    }

    set set_password(password : string) {
        this.password = password
    }
}

class Empleado extends Usuario{
    imprimir_password() : void {
        console.log(this.get_password);
    }
}