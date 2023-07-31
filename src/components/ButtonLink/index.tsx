import Link from "next/link";
import { FC, ReactNode, MouseEventHandler } from "react";

interface IButtonLink {
  url: string;
  icon: ReactNode;
}

export const ButtonLink: FC<IButtonLink> = ({ icon, url }) => {
  return (
    <button
      className="w-12 h-12 rounded-full bg-cyan-500 relative mt-1 ml-1 cursor-pointer"
    >
      <Link
        href={url}
        target="_blank"
        className="w-12 h-12 border-solid border-2 bg-white border-gray-950 flex items-center justify-center rounded-full absolute bottom-1 right-1"
      >
        {icon}
      </Link>
    </button>
  );
};