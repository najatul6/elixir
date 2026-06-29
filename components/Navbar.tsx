"use client";

import { Menu, ShoppingBag } from "lucide-react";
import Container from "./ui/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#f7f4f2]/80 border-b border-neutral-200">
      <Container>
        <nav className="flex h-20 items-center justify-between">

          <button className="transition hover:opacity-60">
            <Menu size={22} />
          </button>

          <h1 className="font-serif text-2xl tracking-[8px]">
            ELIXIR
          </h1>

          <button className="transition hover:opacity-60">
            <ShoppingBag size={20} />
          </button>

        </nav>
      </Container>
    </header>
  );
}