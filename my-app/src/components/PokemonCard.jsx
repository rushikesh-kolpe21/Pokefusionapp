export const PokemonCard = ({ Onepokemon }) => {
  return (
    // don't set widths here; parent grid will control columns
    <div className="overflow-visible">
      <div className="relative bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-1 overflow-visible">

        {/* decorative oval behind sprite (bigger and moved up so it goes outside the card) */}
        <div
          className="absolute left-1/2 -top-0 -translate-x-1/2 w-24 h-14 rounded-full bg-emerald-50 z-0 pointer-events-none"
          aria-hidden
        />

        {/* content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <figure className="flex justify-center">
            <img
              src={Onepokemon.sprites.other.dream_world.front_default}
              alt={Onepokemon.name}
              className="w-28 h-28 object-contain -mt-2"
            />
          </figure>

          <p className="capitalize text-center font-semibold mt-3 text-lg z-10">
            {Onepokemon.name}
          </p>

          {/* Type badge */}
          <div className="flex justify-center mt-2 z-10">
            {Onepokemon.types.map((currType) => (
              <span
                key={currType.type.name}
                className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-800 font-medium capitalize"
              >
                {currType.type.name}
              </span>
            ))}
          </div>

          {/* Height / Weight / Speed */}
          <div className="mt-4 text-center text-xs text-gray-600 z-10">
            <div className="flex justify-between gap-6 px-5">
              <span className="text-[11px] text-gray-400">Height</span>
              <span className="text-[11px] text-gray-400">Weight</span>
              <span className="text-[11px] text-gray-400">Speed</span>
            </div>

            <div className="flex justify-between gap-6 px-7 mt-1 font-medium">
              <span>{Onepokemon.height}</span>
              <span>{Onepokemon.weight}</span>
              <span>{Onepokemon.stats[1].base_stat}</span>
            </div>
          </div>

          {/* Bottom small stats */}
          <div className="mt-4 border-t pt-3 text-xs text-gray-600 z-10">
            <div className="flex items-center  gap-6 px-5">
              <div className="w-1/3 text-center">
                <div className="text-[11px] text-gray-400">Experience</div>
                <div className="font-medium mt-1">{Onepokemon.base_experience}</div>
              </div>

              <div className="w-1/3 text-center">
                <div className="text-[11px] text-gray-400">Attack</div>
                <div className="font-medium mt-1">{Onepokemon.stats[1].base_stat}</div>
              </div>

              <div className="w-1/3 text-center">
                <div className="text-[11px] text-gray-400">Abilities</div>
                <div className="font-medium mt-1">
                  {Onepokemon.abilities.map(a => a.ability.name).slice(0, 1).join(', ')}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
