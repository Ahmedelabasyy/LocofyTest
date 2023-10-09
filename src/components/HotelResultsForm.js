import ResultsWrapper from "./ResultsWrapper";
import HomeCard from "./HomeCard";

const HotelResultsForm = () => {
  return (
    <div className="self-stretch flex flex-col py-[50px] px-20 items-start justify-start gap-[20px] text-left text-lg text-darkslategray-300 font-roboto lg:p-10 lg:box-border md:py-[30px] md:px-6 md:box-border">
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="flex-1 relative tracking-[0.04em] uppercase font-medium">
          200+ results
        </div>
        <div className="relative w-[86px] h-6 text-base">
          <img
            className="absolute top-[0px] left-[62px] w-6 h-6 overflow-hidden"
            alt=""
            src="/filters.svg"
          />
          <div className="absolute top-[2.5px] left-[0px] tracking-[0.04em]">
            Filters
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[23px] text-base text-gray-100">
        <div className="w-[561.87px] flex flex-col items-start justify-start gap-[12px] md:w-[100%!important] sm:gap-[20px]">
          <ResultsWrapper
            roomImageUrl="/unsplashs6ch7n3eoqy@2x.png"
            roomType="1 king bed standard"
            hotelName="Holiday Inn Expre..."
            roomPrice="/vector7.svg"
            roomSize="/video2.svg"
          />
          <HomeCard
            hotelImageUrl="/unsplashs6ch7n3eoqy1@2x.png"
            hotelName="Freehand Los Angeles"
            roomType="Bed in Quad"
            reviewCount="(1,941 reviews)"
            rating="4.2"
            price="/vector8.svg"
            discountPrice="$S 198"
          />
          <HomeCard
            hotelImageUrl="/unsplashs6ch7n3eoqy2@2x.png"
            hotelName="The Westin Bonavent..."
            roomType="1 King, City view"
            reviewCount="(1,002 reviews)"
            rating="4.1"
            price="/vector9.svg"
            discountPrice="$S 289"
          />
          <ResultsWrapper
            roomImageUrl="/unsplashs6ch7n3eoqy3@2x.png"
            roomType="Deluxe King"
            hotelName="The Ritz-Carlton, L..."
            roomPrice="/vector10.svg"
            roomSize="/video3.svg"
          />
          <iframe
            className="[border:none] self-stretch relative h-[600px] hidden md:flex md:max-w-[1000px]"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
          />
        </div>
        <iframe
          className="[border:none] self-stretch flex-1 relative md:hidden"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
        />
      </div>
    </div>
  );
};

export default HotelResultsForm;
