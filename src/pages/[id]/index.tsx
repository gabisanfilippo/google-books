import { Book, getVolumesById } from "@/services/GET/getVolumesById";
import { AxiosResponse } from "axios";
import moment from "moment";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

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
  }, [id])

  return (
    <main
      className={`flex flex-col gap-16 bg-slate-950 p-8 sm:p-16 min-h-screen ${inter.className}`}
    >
      {dataBook ? (
        <>
          <section className="flex gap-8 md:items-start md:flex-row flex-col-reverse items-center">
            {dataBook?.data?.volumeInfo?.imageLinks && (
              <Image
                className="w-96 md:w-52"
                width={200}
                height={350}
                alt={`Livro ${dataBook?.data?.volumeInfo?.title}`}
                src={dataBook?.data?.volumeInfo?.imageLinks.medium}
              />
            )}
            <article>
              <h1 className="text-amber-700 text-4xl font-extrabold">
                {dataBook?.data?.volumeInfo?.title}
              </h1>
              <h2 className="text-slate-50 font-semibold text-2xl mt-4">
                {dataBook?.data?.volumeInfo?.authors?.map((author, index) =>
                  index === dataBook?.data?.volumeInfo?.authors.length - 1
                    ? author
                    : author + ", "
                )}
              </h2>
              <p className="text-slate-50 mt-8 text-base">
                <span className="text-amber-700 font-bold">Publicado em: </span>
                {moment(dataBook?.data?.volumeInfo?.publishedDate).format(
                  "DD/MM/YYYY"
                )}
              </p>
              <p className="text-slate-50 mt-4 text-base">
                <span className="text-amber-700 font-bold">
                  Classificação média:{" "}
                </span>
                {dataBook?.data?.volumeInfo?.averageRating}
              </p>
              <p className="text-slate-50 mt-4 text-base">
                <span className="text-amber-700 font-bold">Categorias: </span>
                {dataBook?.data?.volumeInfo?.categories?.map(
                  (category, index) =>
                    index === dataBook?.data?.volumeInfo?.categories.length - 1
                      ? category
                      : category + ", "
                )}
              </p>
            </article>
          </section>
          <section className="flex flex-col gap-8">
            <article>
              <h3 className="text-amber-700 text-xl font-bold">Descrição</h3>
              <div
                className="text-base text-slate-50 font-normal"
                dangerouslySetInnerHTML={{
                  __html: dataBook?.data?.volumeInfo?.description,
                }}
              ></div>
            </article>
            <article>
              <p className="text-slate-50 text-lg">
                <span className="text-amber-700 font-bold">Amostra: </span>
                <Link
                  className="underline"
                  target="_blank"
                  href={dataBook?.data?.accessInfo?.webReaderLink}
                >
                  {dataBook?.data?.accessInfo?.webReaderLink}
                </Link>
              </p>
            </article>
            <article>
              <p className="text-slate-50 text-lg">
                <span className="text-amber-700 font-bold">Mais informações: </span>
                <Link
                  className="underline"
                  target="_blank"
                  href={dataBook?.data?.volumeInfo?.infoLink}
                >
                  {dataBook?.data?.volumeInfo?.infoLink}
                </Link>
              </p>
            </article>
          </section>
        </>
      ) : (
        <p className="text-slate-50">Não há dados.</p>
      )}
    </main>
  );
}
