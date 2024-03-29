import { Syne } from "next/font/google";
import { SearchBar } from "@/components/SearchBar";
import { VolumeBooks, getVolumes } from "@/services/GET/getVolumes";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { BookItem } from "@/components/BookItem";
import { Header } from "@/components/Header";
import ImageLibrary from "@/assets/img/library.png";
import Image from "next/image";
import { DottedSection } from "@/components/DottedSection";
import { Footer } from "@/components/Footer";
import { useLaunchAdjustment } from "@/stories/useSearchContext";
import { useDebouncedCallback } from "use-debounce";

const syne = Syne({ subsets: ["latin"] });

export default function Home() {
  const [dataVolumes, setDataVolumes] = useState<AxiosResponse<
    VolumeBooks,
    any
    > | null>(null);
  const [loading, setLoading] = useState(false)

  const { inputValue, setInputValue } = useLaunchAdjustment()

  const handleFetchData = async () => {
    setLoading(true);
    const result = await getVolumes(inputValue);
    setDataVolumes(result);
    setLoading(false);
  };

  const debounced = useDebouncedCallback(
    (value: any) => {
      setInputValue(value);
    },
    500
  );

  useEffect(() => {
    handleFetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <main className={`bg-white ${syne.className} flex flex-col min-h-screen`}>
      <Header />
      <section className="flex items-center justify-between sm:px-16 px-8 pb-20 flex-1">
        <article className=" flex flex-col gap-5 lg:w-2/4 w-full">
          <h1 className="font-medium sm:text-7xl text-4xl text-gray-950">
            What book you looking for?
          </h1>
          <p className="text-base text-gray-600 mb-4">
            Explore our catalog and find your next read.
          </p>
          <SearchBar
            onChange={(event) => debounced(event.target.value)}
            defaultValue={inputValue}
          />
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
          {loading ? <p className="m-auto">Carregando...</p> : <>
          {dataVolumes?.data?.items &&
            dataVolumes?.data.items.map((book) => {
              return <BookItem key={book.id} info={book} />;
            })}
          {(!dataVolumes ||
            !dataVolumes?.data ||
            !dataVolumes?.data?.items ||
            dataVolumes?.data?.items?.length === 0) && (
            <p className="text-lg">Resultado não encontrado.</p>
          )}
          </>}
          
        </DottedSection>
      )}
      <Footer />
    </main>
  );
}
