"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.nav
      className="h-[10vh] bg-background flex items-center border-b"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.4,
      }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold">
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
