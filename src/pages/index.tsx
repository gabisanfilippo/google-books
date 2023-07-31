import { Inter } from "next/font/google";
import { SearchBar } from "@/components/SearchBar";
import { API } from "@/services/_api";
import { VolumeBooks, getVolumes } from "@/services/GET/getVolumes";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { BookItem } from "@/components/BookItem";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [dataVolumes, setDataVolumes] = useState<AxiosResponse<
    VolumeBooks,
    any
    > | null>(null);
  const [inputValue, setInputValue] = useState('')

  const handleFetchData = async () => {
    const result = await getVolumes(inputValue);
    setDataVolumes(result);
  };

  useEffect(() => {
    handleFetchData();
  }, [inputValue]);

  return (
    <main
      className={`flex flex-col gap-8 items-center bg-slate-950 px-4 py-16 min-h-screen ${inter.className}`}
    >
      <h1 className="text-slate-50 text-3xl">Google Books API</h1>
      <SearchBar onChange={(event) => setInputValue(event.target.value)} />
      <section className="flex flex-wrap gap-4 justify-center">
        {dataVolumes?.data?.items &&
          dataVolumes.data.items.map((book) => {
            return <BookItem key={book.id} info={book} />;
          })}
      </section>
    </main>
  );
}
