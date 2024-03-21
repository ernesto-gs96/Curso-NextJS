// CASO 1
type numero = number;

let edad : numero;

edad=27;

// CASO 2
type NumberOrString = number | string;

let age : NumberOrString;

// CASO 3
class User {
    name : string;
}

class Admin {
    permissions : number;
}

type UserAdmin = User & Admin;

let user : UserAdmin;

// CASO 4
type FunctionString = () => string;

function executor(f : FunctionString){ }

executor(() => 'Hola')