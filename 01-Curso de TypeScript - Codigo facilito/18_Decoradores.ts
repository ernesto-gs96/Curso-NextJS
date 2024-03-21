function Decorador(clsProto: any, propertyName: string) {
  console.log("Soy un decorador en ejecucion");
  clsProto.className = clsProto.constructor.name;
  console.log(propertyName);
}

function DecoradorEstatico(clsProto: any, propertyName: string) {
  console.log("Soy un decorador en ejecucion");
  clsProto.className = clsProto.constructor.name;
  console.log(propertyName);
}

function DecoradorMetodo(clsProto: any, methoName: string, descriptor?: any) {
  let originallFunction = clsProto[methoName];

  let decoratedFunction = function () {
    originallFunction();
    console.log(`La funcion ${methoName} fue ejecutada`);
  };

  descriptor.value = decoratedFunction;

  return descriptor;
}

function DecoradorArgumentos(message : string) {
  return function (clsProto: any, methoName: string, descriptor?: any) {
    let originallFunction = clsProto[methoName];

    let decoratedFunction = function () {
      originallFunction();
      console.log(message);
    };

    descriptor.value = decoratedFunction;

    return descriptor;
  };
}

@Decorador
class Speaker {
  numero: number;

  @DecoradorEstatico
  static otroPar: string;

  @DecoradorMetodo
  n() {
    console.log(20);
  }

  @DecoradorArgumentos('oldN obsoleto, por favor usar N')
  oldN(){
    console.log(10);
  }
}

let speaker: Speaker = new Speaker();

console.log((speaker as any).className);
