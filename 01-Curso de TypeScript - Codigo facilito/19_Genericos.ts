function genericRecepto<T>(obj : T) : T{
    return obj;
}

genericRecepto<string>('Ernesto');

genericRecepto<number>(20);


function printAll<T>(arr:T[]){
    console.log(arr.length);
}

printAll<string>(['Ernesto','Cirilo'])

printAll<number>([10,20])