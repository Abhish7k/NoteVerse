"use client";

import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const GetStartedButton = () => {
  return (
    <div>
      <RegisterLink>
        <Button size="lg" className="gap-1">
          Get Started For Free
          <span>
            <ChevronRight className="h-5 w-5" />
          </span>
        </Button>
      </RegisterLink>
    </div>
  );
};

export default GetStartedButton;
