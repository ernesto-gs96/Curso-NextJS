function isNumber(obj : Number | String) : obj is Number {
    return typeof obj === 'number';
}

function isString(obj : Number | String) : obj is String {
    return typeof obj === 'string';
}

function printAge(age: number | string) {
    if (typeof age === 'number') {
        // Estamos seguros de que el objeto es un numero
    } else {
        // Estamos seguros de que el objeto es una cadena
        age.charAt(0);
    }
}