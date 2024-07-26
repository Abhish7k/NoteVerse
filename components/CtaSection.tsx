"use client";

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "./ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function CtaSection() {
  const { theme } = useTheme();

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-5 max-w-5xl mx-auto px-10 text-center"
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "easIn", duration: 0.5, delay: 0.6 }}
    >
      <h1 className="text-3xl lg:text-5xl font-semibold tracking-tight">
        Get Started Today
      </h1>
      <h6 className="text-lg">Start Taking Smarter Notes</h6>
      <div className="flex gap-4 mt-2 mb-10">
        <RegisterLink>
          <Button className="text-lg font-medium bg-black hover:bg-slate-800 dark:bg-white dark:hover:bg-gray-200 transition-all">
            Join now
          </Button>
        </RegisterLink>
        <LoginLink>
          <Button variant="ghost" className="text-lg font-medium">
            Sign in
          </Button>
        </LoginLink>
      </div>

      <Image
        src={theme === "dark" ? "/cta-dark.png" : "/cta-light.png"}
        alt=""
        height={600}
        width={600}
        className="dark:opacity-70"
        draggable={false}
      />
    </motion.div>
  );
}
