const ShoeCard = ({ imgURL, changeBigGuitarImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigGuitar) {
      changeBigGuitarImage(imgURL.bigGuitar);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigGuitar
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.cardGuitar}
          alt="shoe colletion"
          width={150}
          height={103.34}
          className="object-contain -rotate-90"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
