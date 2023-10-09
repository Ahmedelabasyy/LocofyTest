import { useState, useCallback } from "react";
import {
  Radio,
  FormControlLabel,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";

const SearchContainer = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState(null);
  const navigate = useNavigate();

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="self-stretch relative h-[640px] text-center text-42xl text-white font-baloo-bhai">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] h-[639.91px]" />
        <img
          className="absolute w-full top-[0.4px] right-[0px] left-[0px] max-w-full overflow-hidden h-[640px] object-cover"
          alt=""
          src="/undefined34.png"
        />
        <div className="absolute top-[0px] left-[0px] w-full h-[640px] flex flex-col items-center justify-center py-0 px-[140px] box-border gap-[43px] md:pl-[30px] md:pr-[30px] md:box-border">
          <div className="self-stretch flex flex-col items-center justify-start gap-[5px]">
            <div className="self-stretch relative leading-[67px] sm:text-23xl sm:leading-[48px]">{`Let’s explore & travel the world`}</div>
            <div className="self-stretch relative text-5xl leading-[32px] font-roboto">
              Find the best destinations and the most popular stays!
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start p-5 gap-[4px] text-left text-xl text-darkslategray-300 font-roboto md:flex-col sm:mt-5">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start p-[5px] gap-[5px] sm:flex-col sm:items-start">
              <b className="flex-1 relative tracking-[0.04em] uppercase sm:w-full sm:pb-2.5 sm:mb-1.5 sm:[border-bottom:1px] sm:[border-bottom-style:solid] sm:border-b-whitesmoke sm:flex-[unset] sm:self-stretch">
                Search flights
              </b>
              <div className="flex flex-row items-center justify-start sm:w-full">
                <div className="relative w-[216.53px] h-[38px] sm:w-[100%!important]">
                  <FormControlLabel
                    className="absolute top-[0px] left-[0px]"
                    label="Return"
                    labelPlacement="end"
                    control={<Radio size="medium" />}
                  />
                  <FormControlLabel
                    className="absolute top-[0px] left-[106px]"
                    label="One-way"
                    labelPlacement="end"
                    control={<Radio color="primary" checked size="medium" />}
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start md:flex-col">
              <div className="flex-1 flex flex-row items-start justify-start md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                <div className="flex-1 flex flex-col items-center justify-center p-[5px] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <Autocomplete
                    className="self-stretch"
                    size="medium"
                    disablePortal
                    options={[
                      "Singapore (SIN)",
                      "Sydney (SYD)",
                      "Siem Reap (REP)",
                      "Shanghai (PVG)",
                      "Sanya (SYX)",
                    ]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Departure"
                        variant="outlined"
                        placeholder=""
                        helperText=""
                      />
                    )}
                    defaultValue="Singapore -  Changi (SIN)"
                  />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center p-[5px] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <Autocomplete
                    className="self-stretch"
                    size="medium"
                    sx={{ width: "100%" }}
                    disablePortal
                    options={[
                      "Clark (CRK)",
                      "Launceston (LST)",
                      "Kalibo (KLO)",
                      "Colombo CMB",
                      "Melbourne (AVV)",
                      "Los Angeles (LA)",
                    ]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Arrival"
                        variant="outlined"
                        placeholder=""
                        helperText=""
                      />
                    )}
                    defaultValue="Los Angeles (LA)"
                  />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center p-[5px] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch">
                    <DatePicker
                      label="Date"
                      value={selectOutlinedDateTimePickerValue}
                      onChange={(newValue) => {
                        setSelectOutlinedDateTimePickerValue(newValue);
                      }}
                      slotProps={{
                        textField: {
                          variant: "outlined",
                          size: "medium",
                          fullWidth: true,
                          color: "primary",
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-[5px] md:w-full md:text-left">
                <button
                  className="cursor-pointer [border:none] p-0 bg-orange-200 rounded w-[164px] h-14 overflow-hidden flex flex-col items-center justify-center [transition:0.3s] hover:bg-darkorange md:mr-[auto] sm:w-[100%!important]"
                  onClick={onSearchFlightsButtonClick}
                >
                  <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-white text-center inline-block w-[146.98px]">
                    Search flights
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchContainer;
