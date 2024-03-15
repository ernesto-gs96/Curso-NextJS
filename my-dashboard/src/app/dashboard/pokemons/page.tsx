import { PokemonsResponse, SimplePokemons } from "@/app/pokemons";
import Image from "next/image";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemons[]> => {

    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}=&offset=${offset}`)
        .then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }))

    return pokemons;
}

export default async function NamePage() {

    const pokemons = await getPokemons(151);

    return (
        <div>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {
                    pokemons.map(pokemon => (
                        <Image
                        key={pokemon.id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        width={100}
                        height={100}
                        alt={pokemon.name}
                    />
                    ))
                }
            </div>
        </div>
    );
}