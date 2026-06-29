"use client";

import { Menu, ShoppingBag } from "lucide-react";
import { useState } from "react";
import Container from "./ui/Container";
import MenuDrawer from "./MenuDrawer";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 backdrop-blur-md bg-[#f7f4f2]/80 border-b border-neutral-200">

        <Container>

          <nav className="flex h-20 items-center justify-between">

            <button
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={22}/>
            </button>

            <h1 className="font-serif tracking-[8px] text-2xl">
              ELIXIR
            </h1>

            <button>
              <ShoppingBag size={20}/>
            </button>

          </nav>

        </Container>

      </header>

      <MenuDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}