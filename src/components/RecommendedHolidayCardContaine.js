const RecommendedHolidayCardContaine = ({
  packageImage,
  packageDestination,
  packageDuration,
  packagePrice,
}) => {
  return (
    <button  className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] flex-1 flex flex-col box-border items-center justify-start min-w-[230px] w-3/12 md:w-6/12 md:mb-8 sm:min-w-[250px] sm:w-full sm:mb-8">
      <img
        className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] object-cover"
        alt=""
        src={packageImage}
      />
      <div className="self-stretch rounded-t-none rounded-b-3xs bg-white flex flex-col py-5 px-4 items-center justify-center border-[1px] border-solid border-whitesmoke">
        <div className="self-stretch flex flex-row items-center justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
            <div className="self-stretch relative text-xl tracking-[0.02em] font-medium font-roboto text-darkslategray-200 text-left">
              {packageDestination}
            </div>
            <div className="self-stretch relative text-base tracking-[0.02em] font-roboto text-darkgray text-left">
              {packageDuration}
            </div>
          </div>
          <div className="relative text-13xl leading-[34px] font-baloo-bhai text-cornflowerblue-200 text-right">
            {packagePrice}
          </div>
        </div>
      </div>
    </button>
  );
};

export default RecommendedHolidayCardContaine;
