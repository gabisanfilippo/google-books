import { Unica_One } from "next/font/google";
import { FC, ReactNode } from "react";

const unicaOne = Unica_One({ subsets: ["latin"], weight: "400" });

interface IDottedSection {
  children: ReactNode;
}

export const DottedSection: FC<IDottedSection> = ({ children }) => {
  return (
    <section className="m-auto w-11/12 flex flex-col items-center gap-8 pb-12">
      <h2
        className={`${unicaOne.className} text-center text-4xl py-12 text-gray-950`}
      >
        Results
      </h2>
      <div className="border-dashed border-2 border-gray-950 w-full rounded-3xl py-14 sm:px-20 px-8 flex flex-wrap gap-4">
        {children}
      </div>
    </section>
  );
};
