"use client";

import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

import { useAppDispatch } from "@/redux/hooks";
import { setSearchParameters } from "@/redux/features/searchSlice";
import { useRouter } from "next/navigation";
import { useGetLocationQuery } from "@/redux/api/locationApi";

const SearchPage = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const { data: locations, isLoading } = useGetLocationQuery(undefined);
  // const { user } = useContext(AuthContext);

  const handleOption = (name: any, operation: any) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const dispatch = useAppDispatch();
  // const { dispatch } = useContext(SearchContext);
  const router = useRouter();
  const handleSearch = () => {

    const selectedLocation = locations.find((location) => location.name === destination);
    const serializedDates = dates.map((dateRange) => ({
      startDate: dateRange.startDate.toISOString(),
      endDate: dateRange.endDate.toISOString(),
      key: dateRange.key,
    }));

    const serializedOptions = {
      adult: options.adult,
      children: options.children,
      room: options.room,
    };

    dispatch(
      setSearchParameters({
        destination,
        dates: serializedDates,
        options: serializedOptions,
      })
    );

    router.push(`/search-hotel/${selectedLocation.id}`);
  };




  return (
    <div className="bg-gray-900 py-6 md:py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <div className="relative">
              <select
                className="w-full px-4 py-3 text-white bg-gray-700 rounded-full focus:outline-none focus:ring focus:ring-blue-500"
                onChange={(e) => setDestination(e.target.value)}
              >
                <option value="">Select your destination</option>
                {locations?.map((location) => (
                  <option key={location.id} value={location.name}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <div className="relative">
              <span
                onClick={() => setOpenDate(!openDate)}
                className="block cursor-pointer text-white px-4 py-3 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
              >
                {`${format(dates[0].startDate, "MM/dd/yyyy")} - ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  className="absolute left-0 mt-2 bg-white p-2 rounded-md shadow-md z-10"
                  minDate={new Date()}
                />
              )}
            </div>
          </div>
          <div className="w-full md:w-1/3 flex items-center space-x-4">
            <div className="relative">
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="block cursor-pointer text-white px-4 py-3 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
              >
                {`${options.adult} Adult · ${options.children} Children · ${options.room} Room`}
              </span>
              {openOptions && (
                <div className="absolute left-0 mt-2 bg-white p-4 rounded-md shadow-md z-10">
                  <div className="mb-4">
                    <span className="text-gray-700">Adult</span>
                    <div className="flex items-center space-x-4">
                      <button
                        disabled={options.adult <= 1}
                        className="text-gray-700 hover:text-blue-500"
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className="text-gray-700">{options.adult}</span>
                      <button
                        className="text-gray-700 hover:text-blue-500"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-gray-700">Children</span>
                    <div className="flex items-center space-x-4">
                      <button
                        disabled={options.children <= 0}
                        className="text-gray-700 hover:text-blue-500"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className="text-gray-700">{options.children}</span>
                      <button
                        className="text-gray-700 hover:text-blue-500"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-700">Room</span>
                    <div className="flex items-center space-x-4">
                      <button
                        disabled={options.room <= 1}
                        className="text-gray-700 hover:text-blue-500"
                        onClick={() => handleOption("room", "d")}
                      >
                        -
                      </button>
                      <span className="text-gray-700">{options.room}</span>
                      <button
                        className="text-gray-700 hover:text-blue-500"
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button
              className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-500"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
