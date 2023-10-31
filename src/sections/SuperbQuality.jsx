import { Guitar8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Build High 
          <span className="text-coral-red"> Qality Guitars</span> For 
          <span className="text-coral-red"> You </span> 
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
Meticulously crafted guitar Premium style Designed to elevate your experience, delivering unmatched quality, innovation and sound.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={Guitar8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain drop-shadow-lg  "
        />
      </div>
    </section>
  );
};

export default SuperQuality;
