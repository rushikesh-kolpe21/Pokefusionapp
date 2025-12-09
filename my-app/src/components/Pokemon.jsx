import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";

export const Pokemon = () => {
  const [detailedPokemon, setDetailedPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=111";

  // Function to fetch Pokemon data
  const fetchPokemonData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      const detailedDataPromises = data.results.map(async (currPokemon) => {
        const response = await fetch(currPokemon.url);
        const data = await response.json();
        console.log("data", data);
        return data;
      });
      const detailedData = await Promise.all(detailedDataPromises); // Wait for all fetches to complete
      setDetailedPokemon(detailedData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(error);
    }
  };

  // Call the function to fetch data when the component mounts
  useEffect(() => {
    fetchPokemonData();
  }, []);

  // Render loading state or pokema data
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Render error state
  if (isError) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <strong className="font-bold">ERROR : {isError.message}</strong>
        
      </div>
    );
  }


  // serarch functionality

  const searchData = detailedPokemon.filter((currPokemon) => {
    return currPokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>

    <section>

      <header className="mb-8">
        <div className="flex justify-center">
          <input 
          type="text" 
          placeholder="Search Pokemon"
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-60 max-w-md px-4 py-2  mt-6 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {/* {detailedPokemon.map((currPokemon) => ( */}
  {searchData.map((currPokemon) => (
    <PokemonCard key={currPokemon.id} Onepokemon={currPokemon} />
  ))}
</div>
    </section>
    
    


     
    </>
  );
};
