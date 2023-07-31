import { IconLinkedIn } from "@/assets/icons/IconLinkedIn";
import { Syne } from "next/font/google";
import { ButtonLink } from "../ButtonLink";
import { IconFigma } from "@/assets/icons/IconFigma";
import { IconGithub } from "@/assets/icons/IconGithub";

const syne = Syne({ subsets: ["latin"] });

export const Footer = () => {
  return (
    <footer
      className={`w-11/12 m-auto border-t-2 border-dashed border-gray-600 mt-12 py-11 flex items-center justify-between ${syne.className} flex-col md:flex-row gap-4`}
    >
      <p className="text-xl text-gray-600">BookStore Project</p>
      <div className="flex gap-4">
        <ButtonLink
          icon={<IconLinkedIn className="w-6 h-6" />}
          url="https://www.linkedin.com/in/gabrielle-coelho-sanfilippo/"
        />
        <ButtonLink
          icon={<IconGithub className="w-6 h-6" />}
          url="https://github.com/gabisanfilippo"
        />
        <ButtonLink
          icon={<IconFigma className="w-6 h-6" />}
          url="https://www.figma.com/file/QsepCHwpZlZvGrmhY27O66/BookStore-%5BShort-Project%5D-(Community)?type=design&node-id=43%3A385&mode=dev"
        />
      </div>
      <p className="text-xl text-gray-600">by gabrielle sanfilippo</p>
    </footer>
  );
};
