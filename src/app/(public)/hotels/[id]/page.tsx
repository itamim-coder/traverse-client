"use client";

import { useHotelDetailsQuery } from "@/redux/api/hotelApi";
import React from "react";
import ImageGroup from "@/app/components/ui/ImageGroup";
import { Image } from "antd";
import Room from "@/app/components/Hotel/Hotel";
import RoomNo from "@/app/components/RoomNo/RoomNo";
import { useAppSelector } from "@/redux/hooks";

const HotelDetailsPage = ({ params }: any) => {
  console.log(params);
  const { data: hotelData, isLoading: loading } = useHotelDetailsQuery(
    params?.id
  );
  console.log(hotelData);

  return (
    <div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              />
            </div>
          </div>

          <div>
            <h1>{hotelData?.name}</h1>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {hotelData?.rooms?.map((room: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; maxPeople: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; id: any; }) => (
            <>
              <div className="bg-gray-700 p-5">
                <div>
                  <Image.PreviewGroup preview={true}>
                    <Image
                      width={300}
                      height={150}
                      src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                    />
                    <div className="flex gap-2">
                      <Image
                        width={150}
                        src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
                      />{" "}
                      <Image
                        width={150}
                        src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"
                      />
                    </div>
                  </Image.PreviewGroup>
                </div>
              </div>
              <div className="bg-gray-400 col-span-2 p-5">
                <h1>{room?.name}</h1>
                <h1>{room?.maxPeople}</h1>
                <h1>{room?.price}</h1>
                <RoomNo></RoomNo>
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
