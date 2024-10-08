import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg"
export default function Header() {
  const [links] = useState<string[]>(["Features", "Team", "SignIn"]);

  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 100) {
          headerRef.current.style.background = "#0c1524";
          headerRef.current.style.padding = "20px 0";
        } else {
          headerRef.current.style.background = "transparent";
          headerRef.current.style.padding = "50px 0";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="pt-[50px] fixed top-0 w-full left-0 z-50 transition-all duration-200"
    >
      <div className="container flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row">
        <a href="/">
          <img className="w-16" src={logo} alt="logo-img" />
        </a>
        <nav>
          <ul className="flex items-center gap-[50px]">
            {links.map((link) => (
              <li key={link}>
                <a
                  className="text-white opacity-[0.9] hover:opacity-[1] hover:underline hover:transition-opacity duration-200"
                  href={`/${link.toLowerCase()}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
