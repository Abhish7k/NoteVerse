"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.nav
      className="h-[8vh] sticky top-0 z-50 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.4,
      }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl lg:text-3xl font-bold transition-all">
            Note
            <span className="text-primary">Verse</span>
          </h1>
        </Link>

        {/* nav buttons */}
        {children}
      </div>
    </motion.nav>
  );
};

export default Navbar;
