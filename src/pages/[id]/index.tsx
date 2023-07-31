import { BoxText } from "@/components/BoxText";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Book, getVolumesById } from "@/services/GET/getVolumesById";
import { AxiosResponse } from "axios";
import moment from "moment";
import { Inter, Syne, Unica_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const syne = Syne({ subsets: ["latin"] });
const unicaOne = Unica_One({ subsets: ["latin"], weight: "400" });

export default function BookDetails() {
  const [dataBook, setDataBook] = useState<AxiosResponse<Book, any> | null>(
    null
  );

  const router = useRouter();
  const { id } = router.query;

  const handleFetchData = async () => {
    if (id) {
      const result = await getVolumesById(id as string);
      setDataBook(result);
    }
  };

  useEffect(() => {
    handleFetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <main className={`bg-white ${syne.className}`}>
      <Header />
      {dataBook && (
        <>
          <section className="max-w-5xl m-auto gap-12 flex sm:px-16 md:flex-row flex-col-reverse pb-20 px-8">
            <article className="w-full md:h-72 h-auto md:w-52 shadow-md flex items-center justify-center m-auto">
              {dataBook?.data?.volumeInfo?.imageLinks ? (
                <Image
                  className="w-full md:w-52 h-full md:min-w-max"
                  width={200}
                  height={350}
                  alt={`Livro ${dataBook?.data?.volumeInfo?.title}`}
                  src={
                    dataBook?.data?.volumeInfo?.imageLinks?.medium
                      ? dataBook?.data?.volumeInfo?.imageLinks?.medium
                      : dataBook?.data?.volumeInfo?.imageLinks?.thumbnail
                  }
                />
              ) : (
                <p className="w-11/12 text-center text-sm text-gray-600">
                  Não há imagem disponível
                </p>
              )}
            </article>
            <article className="flex flex-col gap-8">
              <h1 className={`${unicaOne.className} text-4xl`}>
                {dataBook?.data?.volumeInfo?.title}
              </h1>
              <BoxText>
                <p className="text-base">
                  Author (a):{" "}
                  {dataBook?.data?.volumeInfo?.authors?.map((author, index) =>
                    index === dataBook?.data?.volumeInfo?.authors.length - 1
                      ? author
                      : author + ", "
                  )}
                </p>
              </BoxText>
              <BoxText>
                <p className="text-gray-600 text-base">
                  <span>Publicado em: </span>
                  {moment(dataBook?.data?.volumeInfo?.publishedDate).format(
                    "DD/MM/YYYY"
                  )}
                </p>
              </BoxText>
            </article>
          </section>
          <section className="max-w-5xl m-auto gap-8 flex sm:px-16 pb-12 px-8 flex-wrap lg:flex-nowrap justify-center">
            <article className="flex flex-col gap-8">
              <BoxText>
                <p className="text-gray-600 text-base">
                  <span>Classificação média: </span>
                  {dataBook?.data?.volumeInfo?.averageRating || "Não consta"}
                </p>
              </BoxText>
              <BoxText>
                <p className="text-gray-600 text-base">
                  <span>Categorias: </span>
                  {dataBook?.data?.volumeInfo?.categories?.map(
                    (category, index) =>
                      index ===
                      dataBook?.data?.volumeInfo?.categories.length - 1
                        ? category
                        : category + ", "
                  )}
                </p>
              </BoxText>
              <BoxText>
                <p className="text-gray-600 text-base">
                  <span>Amostra: </span>
                  <Link
                    className="underline"
                    target="_blank"
                    href={dataBook?.data?.accessInfo?.webReaderLink}
                  >
                    {dataBook?.data?.accessInfo?.webReaderLink}
                  </Link>
                </p>
              </BoxText>
              <BoxText>
                <p className="text-gray-600 text-base">
                  <span>Mais informações: </span>
                  <Link
                    className="underline"
                    target="_blank"
                    href={dataBook?.data?.volumeInfo?.infoLink}
                  >
                    {dataBook?.data?.volumeInfo?.infoLink}
                  </Link>
                </p>
              </BoxText>
            </article>
            <BoxText>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">Descrição</h3>
                <div
                  className="text-gray-600 text-base"
                  dangerouslySetInnerHTML={{
                    __html: dataBook?.data?.volumeInfo?.description,
                  }}
                ></div>
              </div>
            </BoxText>
          </section>
        </>
      )}

      <Footer />
    </main>
  );
}
