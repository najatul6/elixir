"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";
import useLockBody from "@/hooks/useLockBody";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({
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
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45 }}
            className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col bg-[#f7f4f2] shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-200 p-6">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} />
                <h2 className="font-serif text-2xl tracking-wide">
                  Shopping Bag
                </h2>
              </div>

              <button
                onClick={onClose}
                className="rounded-full p-2 transition hover:bg-neutral-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Empty State */}
            <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
              <ShoppingBag
                size={60}
                className="mb-6 text-neutral-400"
              />

              <h3 className="font-serif text-3xl">
                Your bag is empty
              </h3>

              <p className="mt-4 text-neutral-500 leading-7">
                Discover our luxurious skincare essentials and
                begin your ritual.
              </p>

              <button
                onClick={onClose}
                className="mt-10 border border-black px-8 py-3 uppercase tracking-[3px] transition hover:bg-black hover:text-white"
              >
                Continue Shopping
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}