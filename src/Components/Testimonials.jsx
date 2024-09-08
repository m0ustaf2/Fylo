import { useState } from "react";
import TestimonialBox from "./TestimonialBox";

function Testimonials() {
  const [testData] = useState([
    {
      id: 1,
      dsc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptas, officia error odio fuga earum?",
      image: "profile-1.jpg",
      position: "Founder & CEO, Huddle",
      name: "Ahmed",
    },
    {
      id: 2,
      dsc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptas, officia error odio fuga earum?",
      image: "profile-2.jpg",
      position: "Founder & CEO, Huddle",
      name: "Ahmed",
    },
    {
      id: 3,
      dsc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptas, officia error odio fuga earum?",
      image: "profile-3.jpg",
      position: "Founder & CEO, Huddle",
      name: "Ahmed",
    },
  ]);
  return (
    <section className="pb-[350px]">
      <div className="container relative">
        <div className="absolute left-[20px] top-[-35px] -z-10">
          <img src="/src/assets/bg-quotes.png" alt="quotes" />
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
