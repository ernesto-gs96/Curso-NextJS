import { Pokemon } from "@/pokemons";

interface Props {
    params: { id: string}
}

const getPokemon = async(id: string): Promise<Pokemon> => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{
        cache: 'force-cache' // TODO: cambiar despues
    }).then(resp => resp.json())

    return pokemon;
}
export default async function PokemonPage({params}: Props) {

    const pokemon = await getPokemon(params.id);

    return (
        <div>
            <h1>Pagina del pokemon {params.id}</h1>
            <div>
                {JSON.stringify(pokemon)}
            </div>
        </div>
    );
}