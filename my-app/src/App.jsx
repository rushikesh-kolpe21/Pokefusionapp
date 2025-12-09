import { Pokemon } from "./components/Pokemon";

export const App = () => {
  return (
    <div>
      <h1 class="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        Lets Catch Pokemon
      </h1>

      <Pokemon />
    </div>
  );
};
