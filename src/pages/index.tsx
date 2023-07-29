import { Inter } from 'next/font/google'
import { SearchBar } from '@/components/SearchBar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-col gap-8 justify-between items-center bg-slate-950 p-4 ${inter.className}`}
    >
      <h1 className="text-slate-50 text-3xl">Google Books API</h1>
      <SearchBar />
    </main>
  );
}
