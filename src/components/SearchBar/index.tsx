import { IconSearch } from "@/assets/icons/IconSearch";
import { ChangeEvent, FC } from "react";

interface ISearchBar {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}

export const SearchBar: FC<ISearchBar> = ({ onChange, defaultValue }) => {
  return (
    <div className="relative bg-amber-500 sm:w-96 w-11/12 rounded-3xl h-10 ml-2">
      <IconSearch className="absolute right-6 h-6 fill-gray-950 z-20" />
      <input
        type="text"
        className="bg-white sm:w-96 w-full px-4 outline-none rounded-3xl absolute bottom-2 h-10 border-solid border-2 border-gray-950 right-2 z-10"
        placeholder="Type the name of book..."
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
};
