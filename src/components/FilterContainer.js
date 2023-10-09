import BookingOptionsCard from "./BookingOptionsCard";

const FilterContainer = () => {
  return (
    <div className="relative w-[350.5px] h-[667px] text-left text-xl text-dimgray-200 font-roboto lg:hidden">
      <div className="absolute top-[0px] left-[0px] w-[311.5px] h-[47px]">
        <div className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[219.41px]">
          10 out of 177 Results
        </div>
        <img
          className="absolute top-[46.5px] left-[0px] max-h-full w-[311.5px]"
          alt=""
          src="/vector-2.svg"
        />
      </div>
      <BookingOptionsCard results="Booking Options" />
      <BookingOptionsCard
        results="Flight Experience"
        propTop="376.6px"
        propWidth="310.8px"
        propWidth1="198.04px"
      />
      <BookingOptionsCard
        results="Airlines"
        propTop="561px"
        propWidth="181px"
        propWidth1="87.77px"
      />
      <BookingOptionsCard
        results="Stops"
        propTop="86.2px"
        propWidth="296.62px"
        propWidth1="65.26px"
      />
      <img
        className="absolute top-[521.3px] left-[0px] max-h-full w-[350.5px]"
        alt=""
        src="/vector-5.svg"
      />
    </div>
  );
};

export default FilterContainer;
