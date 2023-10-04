import Header from "../components/Header";
import LAHeader from "../components/LAHeader";
import HotelResultsForm from "../components/HotelResultsForm";
import FooterForm from "../components/FooterForm";

const HotelsPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start">
      <Header />
      <LAHeader />
      <HotelResultsForm />
      <FooterForm />
    </div>
  );
};

export default HotelsPage;
