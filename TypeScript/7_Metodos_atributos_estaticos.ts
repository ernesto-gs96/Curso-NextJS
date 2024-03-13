class Cursos {
    static url : string = 'www.pagina_de_cursos.com/Cursos/'
    public nombre : string;

    constructor(nombre : string){
        this.nombre = nombre;
    }

    get get_url() : string {
        return `${Cursos.url}${this.nombre}`
    }

}

