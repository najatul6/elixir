"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const ingredients = [
  {
    title: "Squalane",
    subtitle: "Deep Hydration",
    description:
      "A lightweight botanical lipid that mimics the skin's natural moisture barrier, locking in hydration while maintaining a silky, weightless finish.",
    image: "/ingredients-1.jpg",
  },
  {
    title: "Peptides",
    subtitle: "Collagen Support",
    description:
      "A sophisticated peptide complex designed to visibly improve firmness and elasticity while encouraging smoother, youthful-looking skin.",
    image: "/ingredients-2.jpg",
  },
  {
    title: "Ceramides",
    subtitle: "Barrier Repair",
    description:
      "Essential skin-identical lipids that strengthen the protective barrier, reducing moisture loss and improving long-term resilience.",
    image: "/ingredients-3.jpg",
  },
];

export default function Ingredients() {
  return (
    <section className="py-28">
      <Container>

        <SectionHeading title="POWERED BY NATURE" />

        <div className="space-y-28">
          {ingredients.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={700}
                  className="w-full transition duration-700 hover:scale-105"
                />
              </div>

              <div>
                <p className="uppercase tracking-[4px] text-xs text-neutral-500">
                  ACTIVE INGREDIENT
                </p>

                <h3 className="mt-4 font-serif text-5xl">
                  {item.title}
                </h3>

                <p className="mt-3 italic text-2xl text-neutral-500">
                  {item.subtitle}
                </p>

                <p className="mt-8 max-w-lg leading-8 text-neutral-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}