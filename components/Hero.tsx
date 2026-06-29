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

  const glow = document.getElementById("hero-glow");
  const shadow = document.getElementById("hero-shadow");

  const ctx = gsap.context(() => {
    // Floating
    gsap.to(imageRef.current, {
      y: -18,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Shadow Floating
    if (shadow) {
      gsap.to(shadow, {
        scale: 0.82,
        opacity: 0.12,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Glow Floating
    if (glow) {
      gsap.to(glow, {
        scale: 1.15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Scroll Animation
    gsap.to(imageRef.current, {
      rotate: 15,
      rotateY: 35,
      rotateX: -10,
      x: 60,
      y: -80,
      scale: 1.15,
      ease: "none",

      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });

    // Shadow Scroll
    if (shadow) {
      gsap.to(shadow, {
        x: 40,
        scale: 1.25,

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }

    // Glow Scroll
    if (glow) {
      gsap.to(glow, {
        scale: 1.45,

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }

    // Mouse Move
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 25;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      gsap.to(imageRef.current, {
        rotateY: x,
        rotateX: -y,
        duration: 0.8,
        ease: "power3.out",
      });

      if (shadow) {
        gsap.to(shadow, {
          x: x * 0.8,
          duration: 1,
        });
      }

      if (glow) {
        gsap.to(glow, {
          x: x * 0.5,
          y: y * 0.5,
          duration: 1,
        });
      }
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
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center h-[700px]"
          >
            {/* Glow */}
            <div
              id="hero-glow"
              className="absolute h-[420px] w-[420px] rounded-full bg-white opacity-70 blur-[120px]"
            />

            {/* Shadow */}
            <div
              id="hero-shadow"
              className="absolute bottom-12 h-10 w-56 rounded-full bg-black/20 blur-2xl"
            />

            {/* Bottle */}
            <div
              ref={imageRef}
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
              className="relative z-10"
            >
              <Image
                src="/hero.png"
                alt="Luxury skincare"
                width={430}
                height={700}
                priority
                draggable={false}
                className="object-contain select-none pointer-events-none"
              />
            </div>
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
              A transformative formula meticulously crafted to restore cellular
              vitality. ELIXIR N°1 leverages rare botanical distillates to
              deliver unparalleled luminosity.
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
