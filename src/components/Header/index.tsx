import { IconLogo } from "@/assets/icons/IconLogo";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter()

  return (
    <header className={`p-16 flex items-center gap-4`}>
      <IconLogo className="cursor-pointer" onClick={() => router.push('/')} />
    </header>
  );
};
