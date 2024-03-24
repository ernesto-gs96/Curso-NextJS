"use client"

import { useAppSelector } from "@/store";
import { SimplePokemon } from "..";
import { PokemonCard } from "./PokemonCard";

interface Props {
    pokemons: SimplePokemon[];
}

export const PokemonGridClient = () => {

    const favoritePokemons = useAppSelector( state => state.pokemons );

    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {Object.entries(favoritePokemons).map( ([key,value]) => (
                <PokemonCard key={key} pokemon={value}/>
            ))}
        </div>
    );
};
