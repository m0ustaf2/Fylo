import React from "react";

interface FeatureBoxProps {
  icon: string;
  title: string;
  desc: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ icon, title, desc }) => {
  return (
    <div className="text-white element-center flex-col text-center">
      <img
        src={`/src/assets/${icon}`}
        alt="icon-img"
        className="w-[80px] h-[80px] object-contain"
      />
      <h4 className="text-xl font-semibold my-[15px]">{title}</h4>
      <p className="font-normal text-sm">{desc}</p>
    </div>
  );
};

export default FeatureBox;
