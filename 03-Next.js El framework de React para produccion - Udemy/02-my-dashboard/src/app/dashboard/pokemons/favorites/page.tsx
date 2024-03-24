import { PokemonGrid, PokemonGridClient, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { Metadata } from "next";

export const metadata : Metadata =  {
    title: 'Favoritos',
    description: 'Pagina con pokemons favoritos'
}

export default async function NamePage() {

    return (
        <div className="felx flex-col">
            <span className="text-5xl my-2">Pokemon favoritos <small className="text-blue-500">Global State</small></span>
            <PokemonGridClient />
        </div>
    );
}