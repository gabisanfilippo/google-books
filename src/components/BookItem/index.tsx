import { Item } from "@/services/GET/getVolumes";
import Image from "next/image";
import { FC } from "react";

interface IBookItem {
  info: Item;
}

export const BookItem: FC<IBookItem> = ({info}) => {
  return (
    <article className="bg-slate-50 p-4 rounded flex flex-col gap-8">
      <div className="w-120 h-200">
        {info.volumeInfo.imageLinks ? (
          <Image
            width={120}
            height={300}
            alt={`Capa do livro ${info.volumeInfo.title}`}
            src={info.volumeInfo.imageLinks.smallThumbnail}
          />
        ) : (
          <p>Não há imagem disponível</p>
        )}
      </div>
      <div className="w-120">
        <p className="text-sm font-semibold">{info.volumeInfo.title}</p>
        <p className="text-xs">
          Por:{" "}
          {info?.volumeInfo?.authors?.map((author, index) =>
            index  === info?.volumeInfo?.authors.length - 1 ? author : author + ", "
          )}
        </p>
      </div>
    </article>
  );
};