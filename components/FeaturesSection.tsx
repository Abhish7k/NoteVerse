"use client";

import FeaturesSectionBentoGrid from "./FeaturesSectionBentoGrid";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <motion.div
      className="mt-32 px-10 py-10 max-w-6xl mx-auto"
      viewport={{ once: false }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "easIn", duration: 0.5, delay: 0.6 }}
    >
      {/*  */}
      <div className="px-8 mb-12 lg:mb-20">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with powerful features
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From seamless integration to intuitive organization, our platform is
          designed to enhance every aspect of your note-taking experience.
          Whether you&apos;re capturing personal ideas or managing complex
          projects, we&apos;ve got you covered.
        </p>
      </div>

      {/*  */}
      <FeaturesSectionBentoGrid />
    </motion.div>
  );
}
