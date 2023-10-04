import { useState, useCallback } from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";

const ResultsWrapper = ({
  roomImageUrl,
  roomType,
  hotelName,
  roomPrice,
  roomSize,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className="self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[16px] text-left text-base text-gray-100 font-roboto sm:flex-col">
        <img
          className="relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[260px] h-[220px] object-cover sm:w-[100%!important] sm:rounded-[10px!important]"
          alt=""
          src={roomImageUrl}
        />
        <div className="flex-1 flex flex-col py-[15px] pr-3 pl-0 items-start justify-start gap-[31px] sm:w-full sm:p-[15px] sm:box-border sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
              <div className="relative tracking-[0.02em] inline-block w-[146.92px]">
                {roomType}
              </div>
              <b className="relative text-3xl tracking-[0.04em] capitalize inline-block text-darkslategray-300 w-[232.87px]">
                {hotelName}
              </b>
              <div className="relative w-[173.91px] h-[19px] text-cornflowerblue-200">
                <div className="absolute top-[0px] left-[55.97px] tracking-[0.04em] inline-block w-[117.94px]">
                  (1,136 reviews)
                </div>
                <div className="absolute top-[0px] left-[0px] w-[45.98px] h-[19px] text-darkslategray-300">
                  <div className="absolute top-[0px] left-[21.99px] tracking-[0.04em] font-medium inline-block w-[23.99px]">
                    4.7
                  </div>
                  <img
                    className="absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src={roomPrice}
                  />
                </div>
              </div>
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden cursor-pointer"
              alt=""
              src={roomSize}
              onClick={openMatterhornPopup}
            />
          </div>
          <div className="relative w-[164.49px] h-[83.58px] text-3xl text-darkslategray-300">
            <div className="absolute top-[0px] left-[0px] w-28 h-[26px]">
              <b className="absolute top-[0px] left-[0px] tracking-[0.02em] capitalize">
                $S 286
              </b>
              <div className="absolute top-[8px] left-[73px] text-sm tracking-[0.02em]">
                /night
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37.58px] left-[0.49px] w-[164px] h-[46px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200" />
              <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-lg tracking-[0.04em] font-medium font-roboto text-white text-center">
                View Details
              </div>
            </button>
          </div>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ResultsWrapper;
