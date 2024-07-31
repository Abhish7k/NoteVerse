import Link from "next/link";
import { SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";

const socials = [
  {
    label: "GitHub",
    icon: SiGithub,
    link: "https://github.com/Abhish7k",
  },
  {
    label: "LinkedIn",
    icon: SiLinkedin,
    link: "https://www.linkedin.com/in/abhish7k",
  },
  {
    label: "Twitter",
    icon: SiTwitter,
    link: "https://x.com/abhizh7k",
  },
];

export default function Footer() {
  return (
    <footer className="w-full px-10 lg:px-52 py-20 bg-background flex justify-between border-t transition-all ease-in-out duration-300">
      {/* left col */}
      <div className="">
        <h1 className="font-bold text-3xl md:text-4xl transition-all ease-in-out duration-300">
          Note
          <span className="text-primary">Verse</span>
        </h1>
        <h3 className="mt-4 font-light text-sm md:text-lg">
          Built by
          <Link
            href="https://github.com/Abhish7k"
            target="_blank"
            className="ml-1"
          >
            Abhish7k
          </Link>
        </h3>
      </div>

      {/* right col */}
      <div className="flex gap-5 items-center">
        {socials.map((social, idx) => (
          <Link
            key={idx}
            href={social.link}
            aria-label={social.label}
            target="_blank"
            className=""
          >
            <social.icon className="w-5 h-5 hover:scale-125 transition-all" />
          </Link>
        ))}
      </div>
    </footer>
  );
}
