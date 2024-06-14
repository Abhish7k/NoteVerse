"use client";

import { motion } from "framer-motion";

export default function HeroSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative items-center w-full pt-44 px-5 mx-auto lg:px-16 max-w-7xl md:px-12">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
      >
        <div>
          <span className="w-auto px-6 py-3 rounded-full bg-secondary">
            <span className="text-sm font-medium text-primary">
              Organize Your Ideas Seamlessly
            </span>
          </span>

          <h1 className="mt-8 text-center text-3xl font-extrabold tracking-tight lg:text-6xl">
            Master Your Notes <br />
            With Ease
          </h1>
          <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
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
