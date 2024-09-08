import React, { useState } from "react";
import FeatureBox from "./FeatureBox";

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

function Features() {
  const [items] = useState<FeatureItem[]>([
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your files, anywhere",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores, dolor velit debitis delectus distinctio!",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores, dolor velit debitis delectus distinctio!",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real-time collaboration",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores, dolor velit debitis delectus distinctio!",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores, dolor velit debitis delectus distinctio!",
    },
  ]);

  return (
    <section className="pb-[150px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full">
          {items.map((item) => (
            <FeatureBox
              key={item.title}
              title={item.title}
              icon={item.icon}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
