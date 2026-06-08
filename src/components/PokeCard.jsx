import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeCard = ({ url, name }) => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchPokeDetailData = async () => {
      try {
        const res = await axios.get(url);
        console.log(res.data);

        const formatPokemonData = (params) => {
          const { id, types, name } = params;
          const PokeData = {
            id,
            name,
            type: types[0].name,
          };

          return PokeData;
        };

        const pokemonData = formatPokemonData(res.data);
        setPokemons(pokemonData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPokeDetailData();
  }, [url]);

  return <div>PokeCard</div>;
};

export default PokeCard;
