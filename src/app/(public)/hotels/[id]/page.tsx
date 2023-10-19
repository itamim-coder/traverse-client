"use client";

import { useHotelDetailsQuery } from "@/redux/api/hotelApi";
import React from "react";
import ImageGroup from "@/app/components/ui/ImageGroup";
import { Image } from "antd";
import Room from "@/app/components/HotelRoom/HotelRoom";

import { useAppSelector } from "@/redux/hooks";

const HotelDetailsPage = ({ params }: any) => {
  console.log(params);
  const { data: hotelData, isLoading: loading } = useHotelDetailsQuery(
    params?.id
  );
  // console.log(hotelData);

  return (
    <div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={hotelData?.photos[0]}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            {hotelData?.photos.slice(1).map((pt:any) => (
              <>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={pt}
                  />
                </div>
              </>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">{hotelData?.name}</h1>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {hotelData?.rooms?.map((room:any) => (
            <>
              {console.log(room)}
              <div className="bg-gray-100 p-5">
                <div>
                  <Image.PreviewGroup preview={true}>
                    <Image width={300} height={150} src={room?.photos[0]} />
                    <div className="flex gap-2">
                      <Image width={150} src={room?.photos[1]} />{" "}
                      <Image width={150} src={room?.photos[2]} />
                    </div>
                    <h1 className="text-xl font-semibold mb-2">{room?.name}</h1>
                    <h1 className="text-gray-600">    Max Occupancy: {room?.maxPeople} people</h1>
                    <h1 className="text-blue-500 font-semibold">
                    Price: ${room?.price} / night
                    </h1>
                  </Image.PreviewGroup>
                </div>
              </div>
              <div className="bg-gray-400 col-span-2 p-5">
                <Room params={room}></Room>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsPage;
