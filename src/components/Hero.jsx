import React from "react";
import imageWeb from "../assets/image-web-3-desktop.jpg";
import imageWebMobile from "../assets/image-web-3-mobile.jpg";
import { heroNews } from "../constants";

const Hero = () => (
  <main className="flex lg:flex-row flex-col p-4">
    <article className="flex flex-col lg:w-8/12 w-full">
      <img src={imageWeb} alt={imageWeb} className="hidden md:flex" />
      <img
        src={imageWebMobile}
        alt={imageWebMobile}
        className="flex md:hidden"
      />
      <div className="flex flex-col lg:flex-row mt-4">
        <div className="lg:w-3/6">
          <h1 className="mb-4 lg:mb-0 font-bold text-6xl lg:w-5/6">
            The Bright Future of Web 3.0?
          </h1>
        </div>
        <div className="flex flex-col lg:w-3/6">
          <p className="text-[#5D5F79] mb-4 lg:mb-0 lg:mr-2 lg:text-left">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="w-fit px-6 py-3 mb-8 lg:mb-0 mt-4 md:mt-auto text-[#FFFDFA] tracking-[0.2rem] uppercase rounded-sm ease-in duration-300 bg-[#EF5F52] hover:bg-[#00001A]">
            Read more
          </button>
        </div>
      </div>
    </article>
    <aside className="flex flex-col mt-4 lg:mt-0 lg:ml-8 px-6 py-8 bg-[#00001A] lg:rounded-sm lg:justify-between lg:w-4/12">
      <h2 className="text-4xl font-bold text-[#E9AB53]">New</h2>
      {heroNews.map((news, index) => (
        <div key={index} className="heroNews flex flex-col gap-3 pb-4">
          <h3 className="font-bold text-[#FFFDFA] text-xl ease-in duration-300 hover:text-[#E9AB53] cursor-pointer">
            {news.title}
          </h3>
          <p className="text-[#C5C6CE] ">{news.paragrah}</p>
        </div>
      ))}
    </aside>
  </main>
);

export default Hero;
