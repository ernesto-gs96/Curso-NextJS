// Argumentos obligatorios
function suma(numero1 : number, numero2 : number) : number {
    return numero1 + numero2;
}
suma(1,2)

// Argumentos opcionales
const descuento = (total : number, cupon ?: string) : number => {
    return 1
}
descuento(100)
descuento(100,'PRIMERA')

// Sin return
function saludar(nombre : string) : void {
    console.log("Hola "+nombre);   
}
saludar("Ernesto")

// Demonio
function demonio () : never {
    
}