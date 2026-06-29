"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./ui/Container";

export default function Hero() {
  return (
    <section className="py-16 lg:py-28">
      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/hero.png"
              alt="Luxury skincare"
              width={700}
              height={900}
              priority
              className="w-full rounded-sm shadow-xl transition duration-700 hover:scale-[1.03]"
            />
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >

            <p className="mb-5 text-xs uppercase tracking-[6px] text-neutral-500">
              N°1 THE CONCENTRATE
            </p>

            <h2 className="font-serif text-5xl leading-none md:text-7xl">
              ELIXIR N°1
            </h2>

            <p className="mt-6 font-serif text-2xl italic text-neutral-500">
              The Essence of Radiance
            </p>

            <p className="mt-10 max-w-md text-neutral-600 leading-8">
              A transformative formula meticulously crafted to restore
              cellular vitality. ELIXIR N°1 leverages rare botanical
              distillates to deliver unparalleled luminosity.
            </p>

            <button
              className="
                mt-12
                border-b
                border-black
                pb-2
                uppercase
                tracking-[4px]
                text-sm
                transition
                hover:tracking-[8px]
              "
            >
              Explore
            </button>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}