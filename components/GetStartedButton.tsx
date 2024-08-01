"use client";

import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

export function GetStartedButton() {
  const [iconHover, setIconHover] = useState(false);

  return (
    <div>
      <RegisterLink>
        <Button
          className="gap-1 rounded-lg"
          onMouseEnter={() => setIconHover(true)}
          onMouseLeave={() => setIconHover(false)}
        >
          Get Started
          <span>
            <GoArrowRight
              strokeWidth={1}
              className={`h-4 w-4 mb-0.5 ${
                iconHover ? "translate-x-1" : ""
              } transition-all duration-500`}
            />
          </span>
        </Button>
      </RegisterLink>
    </div>
  );
}

export function GoToYourDashboardButton() {
  const [iconHover, setIconHover] = useState(false);

  return (
    <Link href="/dashboard">
      <Button
        className="gap-1 rounded-lg flex items-center"
        onMouseEnter={() => setIconHover(true)}
        onMouseLeave={() => setIconHover(false)}
      >
        Go to your dashboard
        <span>
          <GoArrowRight
            strokeWidth={1}
            className={`h-4 w-4 mb-0.5 ${
              iconHover ? "translate-x-1" : ""
            } transition-all duration-300`}
          />
        </span>
      </Button>
    </Link>
  );
}
