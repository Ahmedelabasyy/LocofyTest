import DestinationContainer from "./DestinationContainer";

const PopularDestinationsMain = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-lg text-cornflowerblue-300 font-roboto">
      <div className="self-stretch flex flex-row items-center justify-start sm:flex-col sm:self-start">
        <div className="flex-1 flex flex-col items-start justify-start gap-[6px] sm:flex-[unset] sm:self-stretch">
          <b className="self-stretch relative tracking-[0.04em] uppercase">
            Plan your next trip
          </b>
          <b className="self-stretch relative text-11xl tracking-[0.04em] capitalize text-darkslategray-300 sm:text-3xl">
            Most Popular Destinations
          </b>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-white rounded-12xl w-[231.38px] flex flex-row items-start justify-start gap-[10px] md:hidden">
          <div className="relative text-lg tracking-[0.04em] font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[197.33px] shrink-0">
            View all destinations
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden"
            alt=""
            src="/arrowright.svg"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap md:mt-[-16px] md:mb-[-16px]">
        <DestinationContainer destinationPrice="$699" destinationName="Paris" />
        <DestinationContainer
          destinationImageUrl="/greeceimage@2x.png"
          destinationPrice="Greece"
          destinationName="$1079"
          propWidth="99.92px"
          propDisplay="inline-block"
          propWidth1="unset"
          propLeft="47.39px"
        />
        <DestinationContainer
          destinationImageUrl="/norwayimage@2x.png"
          destinationPrice="Norway"
          destinationName="$895"
          propWidth="90.92px"
          propDisplay="inline-block"
          propWidth1="90.92px"
          propLeft="38.39px"
        />
        <DestinationContainer
          destinationImageUrl="/tuscanyimage@2x.png"
          destinationPrice="Tuscany"
          destinationName="$1245"
          propWidth="100.62px"
          propDisplay="inline-block"
          propWidth1="100.62px"
          propLeft="48.09px"
        />
      </div>
      <div className="rounded-12xl bg-white w-[231.38px] hidden flex-row items-start justify-start gap-[10px] text-right md:flex md:mt-4">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[197.33px] shrink-0 md:w-auto">
          View all destinations
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden"
          alt=""
          src="/arrowright1.svg"
        />
      </div>
    </div>
  );
};

export default PopularDestinationsMain;
