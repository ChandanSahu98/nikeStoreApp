import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigGuitar1 } from "../assets/images";
import { arrowRight } from "../assets/icons";


const Hero = () => {
  // const [bigGuigar1, setBigShoeImg] = useState(bigShoe1);
  const [bigGuigar1, setBigGuigarImg] = useState(bigGuitar1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          New collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[60px] max-sm:leading-[60px] font-bold bg-transparent">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Fender</span> Guitars
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
        Fender Musical Instruments Corporation (FMIC) is the world’s leading guitar manufacturer
        </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-20 bg-center m-0 ">
        <img //
          src={bigGuigar1}
          alt="shoe colletion"
          width={1280}
          height={720}
          className=" "
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigGuitarImage={(shoe) => setBigGuigarImg(shoe)}
                bigGuigar1={bigGuigar1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
