import React from "react";
import { sectionNews } from "../constants/index";

const Section = () => (
  <section className="mt-8 p-4 gap-2 flex flex-col lg:flex-row items-start lg:justify-center lg:items-center">
    {sectionNews.map((item, index) => (
      <div key={index} className="flex py-2 gap-4">
        <div className="flex max-w-[108px]">
          <img src={item.image} alt={item.title} className="" />
        </div>
        <div className="flex flex-col w-4/6">
          <h3 className="serial text-[#C5C6CE] text-3xl font-bold">
            {item.number}
          </h3>
          <h4 className="text-black text-xl font-bold ease-in duration-300 hover:text-[#EF5F52] cursor-pointer">
            {item.title}
          </h4>
          <p className="text-[#5D5F79]">{item.paragrah}</p>
        </div>
      </div>
    ))}
  </section>
);

export default Section;
