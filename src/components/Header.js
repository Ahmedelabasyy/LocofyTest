import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWebScreenClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <header className="self-stretch bg-white h-[77px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] text-left text-sm text-darkslategray-200 font-roboto lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <div
          className="relative w-[174px] h-[33px] overflow-hidden cursor-pointer"
          onClick={onFickleflightLogoContainerClick}
        >
          <div className="absolute h-[96.97%] w-[99.82%] top-[1.59%] right-[0.18%] bottom-[1.44%] left-[0%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
              alt=""
              src="/webscreen.svg"
              onClick={onWebScreenClick}
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
          <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
            <div
              className="relative cursor-pointer"
              onClick={onExploreTextClick}
            >
              Explore
            </div>
            <div
              className="relative cursor-pointer"
              onClick={onSearchTextClick}
            >
              Search
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-roboto text-cornflowerblue-200 text-left inline-block">
              Hotels
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-roboto text-darkslategray-200 text-left inline-block">
              Offers
            </button>
          </div>
          <div className="flex flex-row items-center justify-center gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden hidden md:flex"
              alt=""
              src="/notification.svg"
            />
            <img
              className="relative w-6 h-6 overflow-hidden"
              alt=""
              src="/notification1.svg"
            />
            <img
              className="rounded-19xl w-9 h-9 object-cover"
              alt=""
              src="/top_avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
