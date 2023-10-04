/* eslint-disable */
import ExploreContainer from "../components/ExploreContainer";
import FlightSectionContainer from "../components/FlightSectionContainer";
import PopularDestinationsMain from "../components/PopularDestinationsMain";
import HolidayContainer from "../components/HolidayContainer";
import PopularStaysFormButtons from "../components/PopularStaysFormButtons";
import FooterForm from "../components/FooterForm";

const Homepage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start gap-[69px] hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange-200">
      <ExploreContainer />
      <div className="w-full flex flex-col py-0 px-20 box-border items-center justify-start gap-[80px] max-w-[1280px] md:pl-[30px] md:pr-[30px] md:box-border">
        <FlightSectionContainer />
        <PopularDestinationsMain />
        <HolidayContainer />
        <PopularStaysFormButtons />
      </div>
      <FooterForm />
    </div>
  );
};

export default Homepage;
