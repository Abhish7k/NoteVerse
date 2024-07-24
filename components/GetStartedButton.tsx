"use client";

import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { GoArrowRight } from "react-icons/go";

const GetStartedButton = () => {
  const [iconHover, setIconHover] = useState(false);

  return (
    <div>
      <RegisterLink>
        <Button
          className="gap-1 rounded-full"
          onMouseEnter={() => setIconHover(true)}
          onMouseLeave={() => setIconHover(false)}
        >
          Get Started
          <span>
            <GoArrowRight
              strokeWidth={1}
              className={`h-4 w-4 mb-0.5 ${
                iconHover ? "translate-x-1" : ""
              } transition-all `}
            />
          </span>
        </Button>
      </RegisterLink>
    </div>
  );
};

export default GetStartedButton;
