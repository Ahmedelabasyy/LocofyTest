import { useMemo } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";

const BookingOptionsCard = ({ results, propTop, propWidth, propWidth1 }) => {
  const bookingOptionsStyle = useMemo(() => {
    return {
      top: propTop,
      width: propWidth,
    };
  }, [propTop, propWidth]);

  const resultsStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className="absolute top-[231.4px] left-[0px] w-[221px] h-[106px] text-left text-3xl text-dimgray-200 font-roboto"
      style={bookingOptionsStyle}
    >
      <b
        className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[189.03px]"
        style={resultsStyle}
      >
        {results}
      </b>
      <FormControlLabel
        className="absolute top-[50px] left-[0px]"
        label="Book on Fickleflight"
        labelPlacement="end"
        control={<Checkbox size="medium" />}
      />
      <FormControlLabel
        className="absolute top-[86px] left-[0px]"
        label="Official Airline Websites"
        labelPlacement="end"
        control={<Checkbox size="medium" />}
      />
    </div>
  );
};

export default BookingOptionsCard;
