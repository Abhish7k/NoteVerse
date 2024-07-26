"use client";

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export function CtaSection() {
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Unleash Your Productivity Today
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <RegisterLink>
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
        </RegisterLink>
        <LoginLink>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Signin
          </button>
        </LoginLink>
      </div>
    </div>
  );
}
