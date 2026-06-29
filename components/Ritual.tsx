"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const products = [
  {
    step: "STEP 01",
    title: "Cleansing Oil",
    desc: "A gentle dissolve of the day's impurities.",
    image: "/oil.png",
  },
  {
    step: "STEP 02",
    title: "Serum Concentrate",
    desc: "The foundational layer of molecular hydration.",
    image: "/serum.png",
  },
  {
    step: "STEP 03",
    title: "Night Cream",
    desc: "Architectural repair during the circadian cycle.",
    image: "/cream.png",
  },
];

export default function Ritual() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading title="THE RITUAL" />

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {products.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="group"
            >
              <div className="overflow-hidden bg-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={700}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-6">
                <p className="text-[11px] uppercase tracking-[4px] text-neutral-500">
                  {item.step}
                </p>

                <h3 className="mt-2 font-serif text-3xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-neutral-600 leading-7">
                  {item.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}