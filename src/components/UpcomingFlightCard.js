import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const UpcomingFlightCard = () => {
  const navigate = useNavigate();

  const onHotelClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[36px] text-left text-5xl text-cornflowerblue-300 font-roboto md:flex-col">
      <div className="rounded-lg flex flex-col items-start justify-start p-5 gap-[21px] border-[1px] border-solid border-whitesmoke lg:w-[520px] md:w-full md:block md:mb-[30px]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="relative w-[72px] h-[46px]">
            <b className="absolute top-[0px] left-[0px] tracking-[0.04em] capitalize inline-block w-[44.73px]">
              SIN
            </b>
            <div className="absolute top-[30px] left-[0px] text-sm tracking-[0.02em] capitalize text-gray-100 inline-block w-[72px]">
              Singapore
            </div>
          </div>
          <div className="relative w-[117.35px] h-[44.09px] text-sm text-gray-100">
            <b className="absolute top-[28.09px] left-[23.69px] tracking-[0.02em] capitalize inline-block w-[65.66px]">
              15H 55M
            </b>
            <img
              className="absolute top-[0px] left-[0px] w-[117.35px] h-6 object-cover"
              alt=""
              src="/undefined35.png"
            />
          </div>
          <div className="relative w-[87.27px] h-[46px] text-right">
            <b className="absolute top-[0px] left-[36px] tracking-[0.04em] capitalize inline-block w-[51.27px]">
              LAX
            </b>
            <div className="absolute top-[30px] left-[0px] text-sm tracking-[0.02em] capitalize text-gray-100 inline-block w-[87.27px]">
              Los Angeles
            </div>
          </div>
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-whitesmoke md:w-full" />
        <div className="self-stretch flex flex-row items-center justify-between text-sm text-gray-100">
          <div className="relative tracking-[0.02em] capitalize inline-block w-[203.9px] shrink-0">
            Departs on: 1 May, 08:00 AM
          </div>
          <div className="relative tracking-[0.02em] text-right inline-block w-[87.23px] shrink-0">
            <b>4 days</b>
            <span> to go</span>
          </div>
        </div>
      </div>
      <div className="relative box-border w-px h-[145.99px] border-r-[1px] border-solid border-whitesmoke md:hidden" />
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px] text-lg text-lightgray md:w-full md:flex-[unset] md:self-stretch">
        <div className="self-stretch relative tracking-[0.04em] uppercase">
          Prepare for your trip
        </div>
        <div className="self-stretch flex flex-row items-start justify-between sm:flex-row sm:text-center sm:flex-wrap sm:justify-between sm:ml-[-28px] sm:mr-[-28px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center"
            onClick={onHotelClick}
          >
            <img
              className="relative w-[65.39px] h-[65.39px] object-cover"
              alt=""
              src="/undefined36.png"
            />
            <div className="relative text-mini tracking-[0.04em] font-roboto text-gray-100 text-left">
              Hotel
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
            <div className="relative w-[65.39px] h-[65.39px]">
              <div className="absolute top-[0px] left-[0px] rounded-2xl bg-sandybrown w-[65.39px] h-[65.39px]" />
              <img
                className="absolute h-[47.93%] w-[48.38%] top-[26.04%] right-[25.81%] bottom-[26.03%] left-[25.81%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/undefined37.png"
              />
            </div>
            <div className="relative text-mini tracking-[0.04em] font-roboto text-gray-100 text-center">
              Attractions
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
            <img
              className="relative w-[65.39px] h-[65.39px] object-cover"
              alt=""
              src="/undefined38.png"
            />
            <div className="relative text-mini tracking-[0.04em] font-roboto text-gray-100 text-center">
              Eats
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
            <div className="relative w-[65.39px] h-[65.39px]">
              <div className="absolute top-[0px] left-[0px] rounded-2xl bg-gold w-[65.39px] h-[65.39px]" />
              <img
                className="absolute h-[48.43%] w-[41.17%] top-[26.51%] right-[29.42%] bottom-[25.06%] left-[29.42%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/undefined39.png"
              />
            </div>
            <div className="relative text-mini tracking-[0.04em] font-roboto text-gray-100 text-center">
              Commute
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
            <div className="relative w-[70px] h-[65.39px]">
              <div className="absolute top-[0px] left-[0px] rounded-2xl bg-cornflowerblue-100 w-[70px] h-[65.39px]" />
              <img
                className="absolute h-[40.15%] w-[40.52%] top-[29.63%] right-[29.74%] bottom-[30.22%] left-[29.74%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/undefined40.png"
              />
            </div>
            <div className="relative text-mini tracking-[0.04em] font-roboto text-gray-100 text-center inline-block w-[32.12px]">
              Taxi
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
            <div className="relative w-[65.39px] h-[65.39px]">
              <div className="absolute top-[0px] left-[0px] rounded-2xl bg-yellowgreen w-[65.39px] h-[65.39px]" />
              <img
                className="absolute h-[35.6%] w-[39.93%] top-[32.2%] right-[30.04%] bottom-[32.2%] left-[30.03%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/undefined41.png"
              />
            </div>
            <div className="relative text-mini tracking-[0.04em] font-roboto text-gray-100 text-center">
              Movies
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingFlightCard;
