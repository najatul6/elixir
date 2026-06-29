"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import useLockBody from "@/hooks/useLockBody";

interface Props {
  open: boolean;
  onClose: () => void;
}

const links = [
  "Home",
  "Products",
  "The Ritual",
  "Ingredients",
  "Journal",
  "Contact",
];

export default function MenuDrawer({
  open,
  onClose,
}: Props) {
  useLockBody(open);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: .4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black"
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: .45,
            }}
            className="fixed left-0 top-0 z-50 flex h-screen w-[340px] flex-col bg-[#f7f4f2] p-10 shadow-xl"
          >
            <div className="mb-20 flex items-center justify-between">
              <h2 className="font-serif text-3xl tracking-[6px]">
                ELIXIR
              </h2>

              <button onClick={onClose}>
                <X />
              </button>
            </div>

            <nav className="space-y-8">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={onClose}
                  className="block font-serif text-3xl transition hover:translate-x-2"
                >
                  {link}
                </button>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}