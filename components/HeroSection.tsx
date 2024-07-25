"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import LightDash from "@/public/dash-light.png";
import DarkDash from "@/public/dash-dark.png";

export default function HeroSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <div className="relative items-center w-full pt-16 md:pt-24 px-5 mx-auto lg:px-16 md:px-12 transition-all">
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
          <h1 className="mt-8 w-full text-center text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight transition-all">
            Master Your Notes <br />
            With Ease
          </h1>
          <p className="max-w-xl mx-auto mt-5 text-base lg:text-xl text-secondary-foreground/80 ">
            Streamline your notes and boost productivity. Simple, powerful, and
            accessible.
          </p>
        </div>

        {/* get started button */}
        {children}

        {/*  */}
        <div className="mt-10 z-10">
          <div className="bg-gray-50 dark:bg-gray-900 mt-10 p-2 md:p-4 flex justify-center items-center rounded-2xl md:rounded-3xl border transition-all">
            <div className="relative bg-white dark:bg-black rounded-2xl md:rounded-3xl border p-2 max-w-screen-xl mx-auto transition-all">
              <Image
                src={theme === "light" ? LightDash : DarkDash}
                alt="hero"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
