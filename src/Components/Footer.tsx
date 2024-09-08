import { useState } from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

interface Contact {
  icon: string;
  text: string;
}

export default function Footer() {
  const [contact] = useState<Contact[]>([
    { icon: "icon-phone.svg", text: "+01064734328" },
    { icon: "icon-email.svg", text: "mostafaesmail838@gmail.com" },
  ]);

  const [links] = useState<string[]>([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);

  const [socialIcons] = useState<string[]>(["facebook", "twitter", "instagram"]);

  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white">
      <div className="container">
        <a href="/">
          <img src="/src/assets/logo.svg" alt="logo-img" />
        </a>
        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <img
              src="/src/assets/icon-location.svg"
              alt="location-img"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="font-normal text-sm tracking-[0.8px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              facere ratione earum dolores laboriosam quo placeat sed alias
              nulla nobis!
            </p>
          </div>
          <div>
            {contact.map((item) => (
              <div
                className="flex items-center gap-[15px] mb-[5px] last-of-type:mb-0"
                key={item.text}
              >
                <img
                  src={`/src/assets/${item.icon}`}
                  alt="icon"
                  className="w-[18px] h-[18px] object-contain"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-primary transition-colors duration-200 text-base"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            {socialIcons.map((icon) => (
              <li key={icon}>
                <a href="/" className="group">
                  <div className="w-[40px] h-[40px] element-center border border-white rounded-full">
                    {icon === "facebook" ? (
                      <FaFacebookF className="group-hover:text-primary transition-all duration-200" />
                    ) : icon === "twitter" ? (
                      <FaTwitter className="group-hover:text-primary transition-all duration-200" />
                    ) : (
                      <FaInstagram className="group-hover:text-primary transition-all duration-200" />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
