import { IconSearch } from "@/assets/icons/IconSearch";
import { ChangeEvent, FC } from "react";

interface ISearchBar {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: FC<ISearchBar> = ({ onChange }) => {
  return (
    <div className="relative bg-slate-50 w-96 px-4 py-2 rounded">
      <IconSearch className="absolute left-2 h-6 fill-gray-500" />
      <input
        type="text"
        className="ml-6 bg-slate-50 w-11/12 outline-none"
        placeholder="Busque um livro aqui..."
        onChange={onChange}
      />
    </div>
  );
};
