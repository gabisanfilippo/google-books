import { Inter } from 'next/font/google'
import {IconSearch} from '@/assets/icons/IconSearch'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-col gap-8 justify-between items-center bg-slate-950 p-4 ${inter.className}`}
    >
      <h1 className="text-slate-50 text-3xl">Google Books API</h1>
      <div className="relative bg-slate-50 w-96 px-4 py-2 rounded">
        <IconSearch className="absolute left-2 h-6 fill-gray-500" />
        <input type="text" className="ml-6 bg-slate-50 w-11/12 outline-none" placeholder='Busque um livro aqui...' />
      </div>
    </main>
  );
}
