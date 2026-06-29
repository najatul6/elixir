"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./ui/Container";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!imageRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Floating Animation
      gsap.to(imageRef.current, {
        y: -18,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Cinematic Scroll Effect
      gsap.to(imageRef.current, {
        rotate: 12,
        rotateY: 25,
        rotateX: -8,
        x: 40,
        y: -70,
        scale: 1.12,
        filter: "drop-shadow(0px 45px 45px rgba(0,0,0,.18))",
        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Mouse Parallax
      const move = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 16;
        const y = (e.clientY / window.innerHeight - 0.5) * 16;

        gsap.to(imageRef.current, {
          rotateY: x,
          rotateX: -y,
          duration: 0.8,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", move);

      return () => {
        window.removeEventListener("mousemove", move);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 lg:py-28"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1200px",
              willChange: "transform",
            }}
            className="flex justify-center"
          >
            <Image
              src="/hero.png"
              alt="Luxury skincare"
              width={520}
              height={720}
              priority
              className="select-none object-contain"
              draggable={false}
            />
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
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
                transition-all
                duration-300
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