import bgQout from "../assets/bg-quotes.png"
import profile1 from "../assets/profile-1.jpg"
import profile2 from "../assets/profile-2.jpg"
import profile3 from "../assets/profile-3.jpg"
import { useState } from "react";
import TestimonialBox from "./TestimonialBox";

interface TestimonialData {
  id: number;
  dsc: string;
  image: string;
  position: string;
  name: string;
}

function Testimonials() {
  const [testData] = useState<TestimonialData[]>([
    {
      id: 1,
      dsc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptas, officia error odio fuga earum?",
      image: `${profile1}`,
      position: "Founder & CEO, Huddle",
      name: "Ahmed",
    },
    {
      id: 2,
      dsc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptas, officia error odio fuga earum?",
      image: `${profile2}`,
      position: "Founder & CEO, Huddle",
      name: "Ahmed",
    },
    {
      id: 3,
      dsc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptas, officia error odio fuga earum?",
      image: `${profile3}`,
      position: "Founder & CEO, Huddle",
      name: "Ahmed",
    },
  ]);

  return (
    <section className="pb-[350px]">
      <div className="container relative">
        <div className="absolute left-[20px] top-[-35px] -z-10">
          <img src={bgQout} alt="quotes" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
          {testData.map((item) => (
            <TestimonialBox
              key={item.id}
              desc={item.dsc}
              name={item.name}
              image={item.image}
              position={item.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
