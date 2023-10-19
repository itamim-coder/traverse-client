"use client";

import { Col, Row } from "antd";

import Image from "next/image";
import React from "react";

import Link from "next/link";
import { useLocationBasedHotelQuery } from "@/redux/api/locationApi";

const SearchHotelsPage = ({ params }: any) => {
  console.log(params);
  const { data: hotelData, isLoading } = useLocationBasedHotelQuery(params.id);
  console.log(hotelData);
  return (
    <div className="min-h-screen">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} sm={24} md={6} lg={6} className="gutter-row" span={6}>
          <div className="bg-gray-700 min-h-screen">col-6</div>
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} className="gutter-row" span={18}>
          <div className=" min-h-screen">
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                  {hotelData?.Hotel?.map((dt: any) => (
                    <>
                      <div className="border py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                          {/* <Image
                            width={300}
                            height={400}
                            alt="NextUI hero Image"
                            src={dt?.photos[0]}
                          /> */}
                          <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src={dt?.photos[0]}
                            alt=""
                          />
                        </div>
                        <div className="md:flex-grow">
                          <Link href={`/hotels/${dt?.id}`}>
                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                              {dt?.name}
                            </h2>
                          </Link>
                          <p className="leading-relaxed">
                            {dt?.city}
                            <br />
                            {dt?.address}
                          </p>
                          <a className="text-indigo-500 inline-flex flex-end items-center mt-4">
                            Learn More
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SearchHotelsPage;
