import ResultsWrapper from "./ResultsWrapper";
import HomeCard from "./HomeCard";

const ResultsContainer = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[23px] text-left text-base text-gray-100 font-roboto">
      <div className="w-[561.87px] flex flex-col items-start justify-start gap-[12px] md:w-[100%!important] sm:gap-[20px]">
        <ResultsWrapper
          roomImageUrl="/undefined3.png"
          roomType="1 king bed standard"
          hotelName="Holiday Inn Expre..."
          roomPrice="/undefined4.png"
          roomSize="/undefined5.png"
        />
        <HomeCard
          hotelImageUrl="/undefined6.png"
          hotelName="Freehand Los Angeles"
          roomType="Bed in Quad"
          reviewCount="(1,941 reviews)"
          rating="4.2"
          price="/undefined7.png"
          discountPrice="$S 198"
        />
        <HomeCard
          hotelImageUrl="/undefined8.png"
          hotelName="The Westin Bonavent..."
          roomType="1 King, City view"
          reviewCount="(1,002 reviews)"
          rating="4.1"
          price="/undefined9.png"
          discountPrice="$S 289"
        />
        <ResultsWrapper
          roomImageUrl="/undefined10.png"
          roomType="Deluxe King"
          hotelName="The Ritz-Carlton, L..."
          roomPrice="/undefined11.png"
          roomSize="/undefined12.png"
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
  );
};

export default ResultsContainer;
