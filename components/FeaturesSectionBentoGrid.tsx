/* eslint-disable @next/next/no-img-element */

import { BentoCard, BentoGrid } from "./ui/bentogrid";
import { FileTextIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Cloud, Lock, Palette } from "lucide-react";
import Marquee from "./ui/Marquee";
import { cn } from "@/lib/utils";

export default function FeaturesSectionBentoGrid() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}

const files = [
  {
    name: "bitcoin.txt",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.txt",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.txt",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.txt",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your notes",
    description: "We automatically save your notes as you type.",
    background: (
      <Marquee
        pauseOnHover
        className="hidden lg:flex absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Access Anywhere",
    description: "Access your notes from any device, anytime, anywhere.",
    background: (
      <img
        src="https://notion-clone-chi-teal.vercel.app/assets/ReadingSideDoodle.svg"
        alt=""
        className="absolute mt-20 opacity-60 hidden lg:block dark:hidden"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },

  {
    Icon: Cloud,
    name: "Cross Platform Sync",
    description:
      "Store your notes securely in the cloud and access them from anywhere.",
    background: (
      <img alt="" className="absolute -right-20 -top-20 opacity-60" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 pt-3",
  },
  {
    Icon: Palette,
    name: "Color Coding",
    description: "Organize notes visually with custom colors.",
    background: (
      <img alt="" className="absolute -right-20 -top-20 opacity-60" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Lock,
    name: "Secure Encryption",
    description: "Keep your ideas safe with end-to-end encryption.",
    background: (
      <img alt="" className="absolute -right-20 -top-20 opacity-60" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];
