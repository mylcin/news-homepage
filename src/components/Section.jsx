import React from "react";
import { sectionNews } from "../constants/index";

const Section = () => (
  <section className="mt-4 md:mt-8 p-4 gap-2 flex flex-col lg:flex-row items-start lg:justify-center lg:items-center">
    {sectionNews.map((item, index) => (
      <div key={index} className="flex justify-between gap-4 my-4 md:my-0">
        <div className="flex max-w-[94px] md:max-w-[108px]">
          <img src={item.image} alt={item.title} className="" />
        </div>
        <div className="flex flex-col w-full">
          <h3 className="serial text-[#C5C6CE] text-3xl font-[800] mb-2">
            {item.number}
          </h3>
          <h4 className="text-black text-xl font-[800] mb-2 ease-in duration-300 hover:text-[#EF5F52] cursor-pointer">
            {item.title}
          </h4>
          <p className="text-[#5D5F79] md:pr-8">{item.paragrah}</p>
        </div>
      </div>
    ))}
  </section>
);

export default Section;
