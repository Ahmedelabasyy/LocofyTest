import { useState, useCallback } from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";

const HotelOvervirewCard = ({
  roomDescription,
  roomType,
  hotelName,
  roomPrice,
  roomReviews,
  hotelReviews,
  roomRating,
  roomImageUrl,
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
      <div className="self-stretch flex-1 flex flex-row py-0 px-3 box-border items-start justify-center w-3/12 text-left text-base text-cornflowerblue-200 font-roboto md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
        <div className="self-stretch flex-1 rounded-3xs bg-white box-border flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] w-3/12 border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5">
          <img
            className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] object-cover"
            alt=""
            src={roomDescription}
          />
          <div className="self-stretch flex flex-row items-start justify-start gap-[11px] text-darkslategray-300">
            <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
              <div className="self-stretch relative tracking-[0.02em] text-gray-100">
                {roomType}
              </div>
              <b className="self-stretch relative text-3xl tracking-[0.04em] capitalize sm:text-xl">
                {hotelName}
              </b>
              <div className="self-stretch relative text-lg tracking-[0.04em]">
                {roomPrice}
              </div>
            </div>
            <img
              className="relative w-[25px] h-[25px] overflow-hidden cursor-pointer"
              alt=""
              src={roomReviews}
              onClick={openMatterhornPopup}
            />
          </div>
          <div className="self-stretch relative h-[19px]">
            <div className="absolute top-[0px] left-[53.63px] tracking-[0.04em] inline-block w-[216.37px]">
              {hotelReviews}
            </div>
            <div className="absolute top-[0px] left-[0px] w-[44.34px] h-[19px] text-darkslategray-300">
              <div className="absolute top-[0px] left-[20.34px] tracking-[0.04em] font-medium">
                {roomRating}
              </div>
              <img
                className="absolute h-[90.47%] w-[37.54%] top-[0%] right-[62.46%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src={roomImageUrl}
              />
            </div>
          </div>
          <div className="self-stretch rounded box-border h-[46px] overflow-hidden flex flex-col items-center justify-center text-mini border-[1px] border-solid border-lavender sm:w-[100%!important]">
            <div className="relative tracking-[0.46px] leading-[26px] uppercase font-medium">
              More details
            </div>
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

export default HotelOvervirewCard;
