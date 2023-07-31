import { Inter, Syne, Unica_One } from "next/font/google";
import { SearchBar } from "@/components/SearchBar";
import { API } from "@/services/_api";
import { VolumeBooks, getVolumes } from "@/services/GET/getVolumes";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { BookItem } from "@/components/BookItem";
import { Header } from "@/components/Header";
import ImageLibrary from "@/assets/img/library.png";
import Image from "next/image";
import { DottedSection } from "@/components/DottedSection";

const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"] });
const unicaOne = Unica_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [dataVolumes, setDataVolumes] = useState<AxiosResponse<
    VolumeBooks,
    any
  > | null>(null);
  const [inputValue, setInputValue] = useState("");

  const handleFetchData = async () => {
    const result = await getVolumes(inputValue);
    setDataVolumes(result);
  };

  useEffect(() => {
    handleFetchData();
  }, [inputValue]);

  return (
    <main className={`bg-white ${syne.className}`}>
      <Header />
      <section className="flex items-center justify-between px-16 pb-20">
        <article className=" flex flex-col gap-5 lg:w-2/4 w-full">
          <h1 className="font-medium text-7xl text-gray-950">
            What book you looking for?
          </h1>
          <p className="text-base text-gray-600 mb-4">
            Explore our catalog and find your next read.
          </p>
          <SearchBar onChange={(event) => setInputValue(event.target.value)} />
        </article>
        <article className="w-96 h-96 bg-cyan-500 rounded-se-2xl rounded-es-2xl relative mr-9 lg:block hidden">
          <Image
            alt="library"
            src={ImageLibrary}
            width={384}
            height={384}
            className="absolute left-9 top-9"
          />
        </article>
      </section>
      {inputValue && (
        <DottedSection>
          {dataVolumes?.data?.items &&
            dataVolumes.data.items.map((book) => {
              return <BookItem key={book.id} info={book} />;
            })}
          {(!dataVolumes ||
            !dataVolumes?.data ||
            !dataVolumes?.data?.items ||
            dataVolumes?.data?.items?.length === 0) && (
            <p className="text-lg">Resultado não encontrado.</p>
          )}
        </DottedSection>
      )}
    </main>
  );
}
