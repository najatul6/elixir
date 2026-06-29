"use client";

import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-300 py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl tracking-[6px]">
              ELIXIR
            </h3>

            <p className="mt-5 text-neutral-600 leading-7">
              Luxury skincare inspired by nature and perfected through modern
              science.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-5 font-semibold uppercase tracking-[4px]">
              Explore
            </h4>

            <ul className="space-y-3 text-neutral-600">
              <li className="hover:text-black cursor-pointer">Products</li>
              <li className="hover:text-black cursor-pointer">Journal</li>
              <li className="hover:text-black cursor-pointer">Ingredients</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-5 font-semibold uppercase tracking-[4px]">
              Newsletter
            </h4>

            <div className="flex border border-neutral-400">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent px-4 py-3 outline-none"
              />

              <button className="border-l border-neutral-400 px-6 transition hover:bg-black hover:text-white">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-neutral-300 pt-8 text-center text-sm text-neutral-500">
          © 2026 ELIXIR. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}