import React from "react";

export interface SectionProps {
  image: string;
  title: string;
  description: string;
  features?: string[];
  button?: string;
  stats?: { value: string; text: string }[];
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({
  image,
  title,
  description,
  features,
  button,
  stats,
  reverse,
}) => {
  return (
    <div
      className={`container mx-auto md:px-40 flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2 p-4 flex items-center">
        <img src={image} alt={title} className="w-full h-auto" />
      </div>
      <div className="md:w-1/2 p-4 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>
        {features && (
          <ul className="mb-4">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
        {stats && (
          <div className="mb-4 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div>{stat.text}</div>
              </div>
            ))}
          </div>
        )}
        {button && (
          <button className="bg-[#6A65FF] text-white py-2 px-4 rounded md:w-1/4 w-full">
            {button}
          </button>
        )}
      </div>
    </div>
  );
};

export default Section;
