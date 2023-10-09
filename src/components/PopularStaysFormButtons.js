import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HotelOvervirewCard from "./HotelOvervirewCard";
import HotelOverviewCard from "./HotelOverviewCard";

const PopularStaysFormButtons = () => {
  const navigate = useNavigate();

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <form className="self-stretch flex flex-col items-start justify-start gap-[20px]">
      <div className="self-stretch flex flex-row items-center justify-center">
        <div className="flex-1 relative h-[35px]">
          <b className="absolute top-[0px] left-[0px] text-11xl tracking-[0.04em] capitalize inline-block font-roboto text-darkslategray-300 text-left w-[1105.34px] sm:text-3xl">
            Popular Stays
          </b>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-white rounded-12xl flex flex-row items-start justify-start gap-[10px] md:hidden"
          onClick={onViewAllStaysButtonClick}
        >
          <div className="relative text-lg tracking-[0.04em] font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[140.66px] shrink-0">
            View all stays
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden"
            alt=""
            src="/arrowright2.svg"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start ml-[-12px] mr-[-12px] lg:pr-10 lg:box-border lg:ml-[-12px] lg:mr-[-50px] md:mr-[-50px] md:ml-[-12px] sm:flex-col sm:pr-0 sm:box-border sm:mr-[-12px] sm:ml-[-12px]">
        <HotelOvervirewCard
          roomDescription="/unsplashrlwe8f8anoc@2x.png"
          roomType="Entire bungalow"
          hotelName="Matterhorn Suites"
          roomPrice="$575/night"
          roomReviews="/video.svg"
          hotelReviews="(60 reviews)"
          roomRating="4.9"
          roomImageUrl="/vector3.svg"
        />
        <HotelOverviewCard
          roomDescription="/unsplashtsn8bpopveo@2x.png"
          roomType="2-Story beachfront suite"
          roomPrice="Discovery Shores"
          roomReviews="$360/night"
          hotelName="(116 reviews)"
          roomRating="4.8"
          roomCoordinates="/vector4.svg"
        />
        <HotelOverviewCard
          roomDescription="/unsplashrlwe8f8anoc1@2x.png"
          roomType="Single deluxe hut"
          roomPrice="Arctic Hut "
          roomReviews="$420/night"
          hotelName="(78 reviews)"
          roomRating="4.7"
          roomCoordinates="/vector5.svg"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <HotelOvervirewCard
          roomDescription="/unsplashyqrybvxug5q@2x.png"
          roomType="Deluxe King Room"
          hotelName="Lake Louise Inn"
          roomPrice="$244/night"
          roomReviews="/video1.svg"
          hotelReviews="(63 reviews)"
          roomRating="4.6"
          roomImageUrl="/vector6.svg"
        />
      </div>
      <div className="rounded-12xl bg-white hidden flex-row items-start justify-start gap-[10px] md:flex md:mt-4">
        <div className="relative text-lg tracking-[0.04em] font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[140.66px] shrink-0 md:w-auto">
          View all stays
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden"
          alt=""
          src="/arrowright4.svg"
        />
      </div>
    </form>
  );
};

export default PopularStaysFormButtons;
