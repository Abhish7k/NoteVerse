"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import LightDash from "@/public/dash-light.png";
import DarkDash from "@/public/dash-dark.png";
import { Highlight } from "./ui/hero-highlight";

export default function HeroSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <div className="min-h-[80vh] relative flex items-center w-full py-2 md:py-24 px-5 mx-auto lg:px-16 md:px-12 transition-all">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
      >
        <div>
          <h1 className="mt-8 w-full text-center text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight transition-all flex flex-col items-center gap-1">
            Master Your Notes <br />
            <Highlight>With Ease</Highlight>
          </h1>
          <p className="max-w-80 md:max-w-md mx-auto mt-5 text-sm md:text-base lg:text-xl text-secondary-foreground/80 transition-all">
            Streamline your notes and boost productivity. Simple, powerful, and
            accessible.
          </p>
        </div>

        {/* get started button */}
        {children}

        {/* dash image */}
        <div className="mt-20 z-10">
          <div className="bg-gray-50 dark:bg-gray-900 mt-10 p-2 md:p-4 flex justify-center items-center rounded-2xl md:rounded-3xl border transition-all">
            <div className="relative bg-white dark:bg-black rounded-2xl md:rounded-3xl border p-2 max-w-screen-xl mx-auto transition-all">
              <Image
                src={theme === "dark" ? DarkDash : LightDash}
                alt="hero"
                className="rounded-3xl"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
