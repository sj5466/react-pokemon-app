import React, { useEffect, useState } from "react";
import axios from "axios";
import LazyImage from "./LazyImage";
import SkeletonCard from "./SkeletonCard";

const PokeCard = ({ url, name }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokeDetailData = async () => {
      try {
        const res = await axios.get(url);

        const formatPokemonData = (params) => {
          const { id, types, name } = params;
          return {
            id,
            name,
            type: types[0].type.name,
          };
        };

        setPokemon(formatPokemonData(res.data));
      } catch (err) {
        console.log(err);
      }
    };

    fetchPokeDetailData();
  }, [url]);

  const bg = `bg-${pokemon?.type}`;
  const border = `border-${pokemon?.type}`;
  const text = `text-${pokemon?.type}`;
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`;

  if (!pokemon) return <SkeletonCard />;

  return (
    <a
      href={`/pokemon/${name}`}
      className={`flex flex-col box-border rounded-lg border-2 ${border} w-[8.5rem] h-[8.5rem] z-0 bg-slate-800 justify-between items-center fade-in`}
    >
      <div
        className={`${text} h-[1.5rem] text-xs w-full pt-1 px-2 text-right rounded-t-lg`}
      >
        #{pokemon.id.toString().padStart(3, "0")}
      </div>
      <div className={`w-full f-6 flex items-center justify-center`}>
        <div
          className={`box-border relative flex w-full h-[5.5rem] basis justify-center items-center`}
        >
          <LazyImage url={img} alt={name} />
        </div>
      </div>
      <div
        className={`${bg} w-full text-center text-xs text-zinc-100 h-[1.5rem] rounded-b-lg uppercase font-medium pt-1`}
      >
        {pokemon.name}
      </div>
    </a>
  );
};

export default PokeCard;
