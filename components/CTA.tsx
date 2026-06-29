"use client";

import { motion } from "framer-motion";
import Container from "./ui/Container";

export default function CTA() {
  return (
    <section className="bg-[#ece7e2] py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs uppercase tracking-[6px] text-neutral-500">
            Luxury Begins Here
          </p>

          <h2 className="mt-5 font-serif text-5xl md:text-6xl">
            Elevate Your Daily Ritual
          </h2>

          <p className="mx-auto mt-8 max-w-xl leading-8 text-neutral-600">
            Experience skincare inspired by nature and refined through science.
            Every formula is created to deliver visible results with timeless
            elegance.
          </p>

          <button
            className="mt-12 border border-black px-10 py-4 uppercase tracking-[4px]
            transition-all duration-300 hover:bg-black hover:text-white"
          >
            Shop Collection
          </button>
        </motion.div>
      </Container>
    </section>
  );
}