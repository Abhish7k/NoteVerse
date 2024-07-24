"use client";

import { motion } from "framer-motion";

export default function HeroSection({
  children,
}: {
  children: React.ReactNode;
}) {
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
      </motion.div>
    </div>
  );
}
