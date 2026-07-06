import Link from "next/link";
import { Search, ShoppingBag, User, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-3xl font-black tracking-[0.25em] text-yellow-500">
          CLOWE
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-white md:flex">
          <Link href="/">Home</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/ai-try-on" className="text-yellow-500">
            AI Try-On
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5 text-white">
          <Search className="cursor-pointer hover:text-yellow-500" />
          <User className="cursor-pointer hover:text-yellow-500" />
          <ShoppingBag className="cursor-pointer hover:text-yellow-500" />

          <button className="md:hidden">
            <Menu />
          </button>
        </div>

      </div>
    </header>
  );
}