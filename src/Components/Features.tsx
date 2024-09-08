import  { useState } from "react";
import FeatureBox from "./FeatureBox";
import img1 from "../assets/icon-access-anywhere.svg"
import img2 from "../assets/icon-security.svg"
import img3 from "../assets/icon-collaboration.svg"
import img4 from "../assets/icon-any-file.svg"
interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

function Features() {
  const [items] = useState<FeatureItem[]>([
    {
      icon:` ${img1}`,
      title: "Access your files, anywhere",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores, dolor velit debitis delectus distinctio!",
    },
    {
      icon:` ${img2}`,
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores, dolor velit debitis delectus distinctio!",
    },
    {
      icon:` ${img3}`,
      title: "Real-time collaboration",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores, dolor velit debitis delectus distinctio!",
    },
    {
      icon:` ${img4}`,
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
