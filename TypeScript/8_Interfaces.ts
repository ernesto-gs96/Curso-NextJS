interface choque {
    x : number; 
    y : number;
    width : number;
    height : number;
    getCordenada() : string;
}

class Heore implements choque{
    x : number; 
    y : number;
    width : number;
    height : number;

    getCordenada() : string {
        return ''
    }
}

class Arma {

}

class Enemigo implements choque{
    x : number; 
    y : number;
    width : number;
    height : number;

    getCordenada() : string {
        return ''
    }

}

class Choque {
    static revisar(objeto1 : any, objeto2 : any) {

    }
}