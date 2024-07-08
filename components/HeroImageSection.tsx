"use client";

import React from "react";
import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScroll() {
  return (
    <div className="flex flex-col mt-20 overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-2xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-3xl md:text-7xl font-bold mt-1 leading-none">
                Effortless Note Taking
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="/dash.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
