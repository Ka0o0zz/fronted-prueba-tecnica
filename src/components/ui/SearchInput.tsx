export const SearchInput = () => {
  return (
    <label className="w-full flex ">
      <input
        type="text"
        name="search"
        placeholder="Busca tu noticia aqui..."
        className="min-h-[50px] min-w-full relative p-2 px-4 rounded outline-none"
      />
      <button className="absolute right-3 top-3" type="submit">
        Search
      </button>
    </label>
  );
};
