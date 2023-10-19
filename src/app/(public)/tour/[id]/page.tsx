"use client";

import React from "react";
import { Avatar, Button, Space, Tag } from "antd";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSingleTourQuery } from "@/redux/api/tourApi";

const TourDetailsPage = ({ params }: any) => {
  const router = useRouter();
  console.log(params);
  const { data:tour, isLoading } = useSingleTourQuery(params?.id);
  console.log(tour);


  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center justify-center">
          <img
            src={tour?.images[0]}
            alt={tour?.title}
            // width={800}
            // height={600}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{tour?.title}</h1>
          <p className="text-xl text-gray-600">{tour?.duration}</p>
          <div className="my-4">
            <Space>
              <Tag color="blue">{tour?.price}</Tag>
              {tour?.available ? (
                <Tag color="green">Available</Tag>
              ) : (
                <Tag color="red">Not Available</Tag>
              )}
            </Space>
          </div>
          <p>
            <FaCalendarAlt className="mr-2" />
            {tour?.starting_date}
          </p>
          <p className="my-4">{tour?.departure}</p>
          <Button
            type="primary"
            icon={<FaArrowRight />}
            onClick={() => router.push("/booking")}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TourDetailsPage;
