import { useEffect } from "react";
import RecommendedHolidayCardContaine from "./RecommendedHolidayCardContaine";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchHolidays } from "../features/slices/holidaysSlice";

const HolidayContainer = () => {
  const {holidays} = useSelector(state => state.holidays);
  const dispatch = useDispatch();
  console.log("holidays", holidays);

  useEffect(() => {
    dispatch(fetchHolidays());
  }, [dispatch])
  return (
    <div className="self-stretch flex flex-col items-start justify-center gap-[24px] text-left text-11xl text-darkslategray-300 font-roboto">
      <div className="self-stretch flex flex-row items-center justify-start">
        <b className="flex-1 relative tracking-[0.04em] capitalize sm:text-3xl">
          Recommended Holidays
        </b>
        <button className="cursor-pointer [border:none] p-0 bg-white rounded-12xl w-[199.89px] flex flex-row items-start justify-start gap-[10px] md:hidden">
          <div className="relative text-lg tracking-[0.04em] font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[165.89px] shrink-0">
            View all holidays
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden"
            alt=""
            src="/arrowright2.svg"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap">
        {holidays?.map((holiday, index) => (
          <RecommendedHolidayCardContaine
          key={index}
          packageImage={holiday.packageImage}
          packageDestination={holiday.packageDestination}
          packageDuration={holiday.packageDuration}
          packagePrice={holiday.packagePrice}
        />
        ))} 
      </div>
      <div className="rounded-12xl bg-white w-[199.89px] hidden flex-row items-start justify-start gap-[10px] text-right text-lg text-cornflowerblue-300 md:flex md:[mrgin-top:16px]">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[165.89px] shrink-0 md:w-auto">
          View all holidays
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden"
          alt=""
          src="/arrowright3.svg"
        />
      </div>
    </div>
  );
};

export default HolidayContainer;
