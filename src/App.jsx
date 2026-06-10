import { useEffect, useState, useRef } from "react";

import "./App.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";
import SetColors from "./components/SetColors";
import SkeletonCard from "./components/SkeletonCard";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const limit = 10;

  // offset을 ref로 관리
  const offsetRef = useRef(0);

  const fetchPokemonData = async (isFirstFetch) => {
    try {
      setIsLoading(true);
      const offsetValue = isFirstFetch ? 0 : offsetRef.current + limit;
      const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offsetValue}`;
      const res = await axios.get(url);
      setPokemons((prev) => [...prev, ...res.data.results]);
      offsetRef.current = offsetValue; // ref는 리렌더 없이 바로 업데이트
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData(true);
  }, []);

  return (
    <article className="pt-6">
      <SetColors />
      <header className="flex flex-col gap-2 w-full px-4 z-50">
        input from
      </header>
      <section className="pt-6 flex flex-col justify-content items-center overflow-auto z-0">
        <div className="flex flex-row flex-wrap gap-[16px] items-center justify-center px-2 max-w-4xl">
          {pokemons.map(({ url, name }, index) => (
            <PokeCard url={url} name={name} key={index} />
          ))}
          {isLoading &&
            Array.from({ length: limit }).map((_, i) => (
              <SkeletonCard key={`skeleton-${i}`} />
            ))}
          {!isLoading && pokemons.length === 0 && (
            <h2 className="font-medium text-lg text-slate-900 mb-1">
              포켓몬이 없습니다.
            </h2>
          )}
        </div>
      </section>
      <div className="text-center">
        <button
          onClick={() => fetchPokemonData(false)}
          className="bg-slate-800 px-6 py-2 my-4 text-base rounded-lg font-bold text-white"
        >
          더 보기
        </button>
      </div>
    </article>
  );
}

export default App;
