const getPokemons = async (limit = 20, offset = 0) => {

    let data = ""

    try {
        data = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
            .then(res => res.json());
    } catch (error: any | unknown) {
        /* handle error */
    }

    return data;
}


export default async function NamePage() {

    const pokemons = await getPokemons();
    return (
        <div>
            {JSON.stringify(pokemons)}
        </div>
    );
}