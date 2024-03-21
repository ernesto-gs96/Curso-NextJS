interface Asser<T> {
    x,y : number;
    generico : T;
}

function generic<T extends Asser<string>>(obj : T){

}

class Point implements Asser<string>{
    x:number;
    y:number;
    generico : string;
}

class Elements implements Asser<Point>{
    x:number;
    y:number;
    generico: Point;
}

generic<Point>(new Point())