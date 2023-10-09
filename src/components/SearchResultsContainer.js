import FilterContainer from "./FilterContainer";
import FlightCardsFormContainer from "./FlightCardsFormContainer";

const SearchResultsContainer = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-[50px] px-20 text-left text-xl text-dimgray-200 font-roboto lg:p-10 lg:box-border md:py-5 md:px-6 md:box-border">
      <FilterContainer />
      <FlightCardsFormContainer />
    </div>
  );
};

export default SearchResultsContainer;
