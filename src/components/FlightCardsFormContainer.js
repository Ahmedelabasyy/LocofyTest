import FlightContainer from "./FlightContainer";
import FlightInfoContainer from "./FlightInfoContainer";

const FlightCardsFormContainer = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[9px] text-left text-base text-dimgray-200 font-roboto">
      <FlightContainer
        turkish="/turkish.svg"
        singaporeAirlines="Turkish Airlines"
        aM="11:35 PM"
        flightIcon="/flighticon.svg"
        h55MNonStop="33H 10M, 1-stop"
        aM1="4:45 PM"
        s730="S$ 723"
      />
      <FlightInfoContainer
        flightDetails="/sia.svg"
        airlineName="Singapore Airlines"
        departureTime="8:45 PM"
        flightDuration="15H 10M, 2-stops"
        arrivalTime="7:55 PM"
        flightPrice="S$ 900"
      />
      <FlightContainer
        turkish="/japan.svg"
        singaporeAirlines="Japan Airlines"
        aM="8:20 PM"
        flightIcon="/flighticon1.svg"
        h55MNonStop="17H 30M, 1-stop"
        aM1="9:50 PM"
        s730="S$ 859"
        propTransform="scale(0.8)"
        propTextAlign="left"
        propRight="6.33%"
        propLeft="5.15%"
      />
      <FlightContainer
        turkish="/ana.svg"
        singaporeAirlines="ANA"
        aM="6:35 PM"
        flightIcon="/flighticon1.svg"
        h55MNonStop="19H 15M, 1-stop"
        aM1="9:50 PM"
        s730="S$ 936"
        propTransform="scale(0.8)"
        propTextAlign="left"
        propRight="5.5%"
        propLeft="5.98%"
      />
      <FlightContainer
        turkish="/americanairlines.svg"
        singaporeAirlines="American Airlines"
        aM="8:20 PM"
        flightIcon="/flighticon1.svg"
        h55MNonStop="17H 30M, 1-stop"
        aM1="9:50 AM"
        s730="S$ 939"
        propTransform="unset"
        propTextAlign="center"
        propRight="5.5%"
        propLeft="5.98%"
      />
      <FlightInfoContainer
        flightDetails="/turkish.svg"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightDuration="33H 10M, 2-stops"
        arrivalTime="4:45 PM"
        flightPrice="S$ 673"
        propTextAlign="left"
        propWidth="unset"
        propFlexShrink="unset"
      />
      <FlightContainer
        turkish="/japan1.svg"
        singaporeAirlines="Japan Airlines"
        aM="10:25 PM"
        flightIcon="/flighticon1.svg"
        h55MNonStop="26H 45M, 1-stop"
        aM1="9:10 AM"
        s730="S$ 859"
        propTransform="scale(0.8)"
        propTextAlign="left"
        propRight="5.5%"
        propLeft="5.98%"
      />
      <FlightContainer
        turkish="/americanairlines1.svg"
        singaporeAirlines="American Airlines"
        aM="10:25 PM"
        flightIcon="/flighticon1.svg"
        h55MNonStop="26H 45M, 1-stop"
        aM1="9:10 AM"
        s730="S$ 859"
        propTransform="unset"
        propTextAlign="center"
        propRight="5.5%"
        propLeft="5.98%"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[220px] h-[72px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200" />
        <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_81.5px)] text-lg tracking-[0.04em] font-medium font-roboto text-white text-center">
          Show more results
        </div>
      </button>
    </div>
  );
};

export default FlightCardsFormContainer;
