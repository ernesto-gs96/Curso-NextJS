enum Tallas {
    Chica = 1,
    Mediana = 2,
    Grande = 3
}

enum PaymentState {Creado,Pagado,EnDeuda}

class Pedido{
    talla : number;
    pago: number;
}

let pedido : Pedido = new Pedido();

pedido.talla = Tallas.Chica;
pedido.pago = PaymentState.Creado;