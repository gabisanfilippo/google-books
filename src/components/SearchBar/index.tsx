import { IconSearch } from "@/assets/icons/IconSearch";

export const SearchBar = () => {
  return (
    <div className="relative bg-slate-50 w-96 px-4 py-2 rounded">
      <IconSearch className="absolute left-2 h-6 fill-gray-500" />
      <input
        type="text"
        className="ml-6 bg-slate-50 w-11/12 outline-none"
        placeholder="Busque um livro aqui..."
      />
    </div>
  );
}