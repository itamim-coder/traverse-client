"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Avatar,
} from "@nextui-org/react";
import NextLink from "next/link";
import { FaBangladeshiTakaSign, FaArrowRight } from "react-icons/fa6";

import { TfiLayoutLineSolid } from "react-icons/tfi";
const title = "Featured Tour Package";
const subTitle = "Choose the Best Tour For You In This Vacation";

const rooms = [
  {
    id: 1,
    title1: "Delux View",
    title2: "Stream the Acme event",
    image:
      "https://img.freepik.com/free-photo/white-pillow-bed_74190-3601.jpg?w=360&t=st=1695373112~exp=1695373712~hmac=0375eba046c0f59393c357a9e5ff25514eea868fbdb056725a7582b5d21f834b",
  },
  {
    id: 2,
    title1: "Delux View",
    title2: "Stream the Acme event",
    image:
      "https://img.freepik.com/free-photo/lamp-comfort-bed-pillow-fabric_1203-4833.jpg?w=360&t=st=1695374061~exp=1695374661~hmac=3aebc8a63ff05782b887a8eef1544f86fb54a1ebf71472dc43cbbd95f7d900e1",
  },
  {
    id: 3,
    title1: "Delux View",
    title2: "Stream the Acme event",
    image:
      "https://img.freepik.com/free-photo/pillow-bed_1203-2819.jpg?w=360&t=st=1695374085~exp=1695374685~hmac=eb2c6dd494c4a6dd2cf59792e159452ef03c82719bd8ee356d7e473baf75c9a5",
  },
  {
    id: 4,
    title1: "Delux View",
    title2: "Stream the Acme event",
    image:
      "https://img.freepik.com/free-photo/bedroom-view-with-bed-sheets-decor_23-2150551168.jpg?w=360&t=st=1695374141~exp=1695374741~hmac=1166cf4b82d73b4f984bc9fa6c52ed361bcd3de220a626f2f2e5881fda2f5d15",
  },
];

const price = 20000;
//@ts-ignore
const FeaturedTours = () => {
  return (
    <>
      <div className="container mx-auto px-2 lg:px-20 my-10 overflow-x-hidden">
        <h6 className="text-sm lg:text-base mb-4 text-center">{subTitle}</h6>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-4xl font-bold">{title}</h1>
          <h1 className="text-4xl lg:text-7xl text-yellow-600">
            <TfiLayoutLineSolid />
          </h1>
        </div>
        <Table
          aria-label="Example static collection table"
          shadow="none"
          hideHeader={true}
          removeWrapper={true}
        >
          <TableHeader>
            <TableColumn>Name</TableColumn>
            <TableColumn>Action</TableColumn>
          </TableHeader>
          <TableBody>
            {rooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell>
                  <div className="flex flex-col lg:flex-row justify-start items-center gap-10">
                    <Avatar
                      isBordered
                      radius="md"
                      src={room.image}
                      className="w-80 lg:w-96 h-60 lg:h-64"
                    />
                    <div className="flex flex-col gap-4">
                      <h2 className="text-2xl font-bold">{room.title1}</h2>
                      <p className="text-base">{room.title2}</p>
                      <div className="grid grid-cols-4 gap-x-4 gap-y-10 place-items-start"></div>
                      <div className="lg:hidden">
                        <div className="mb-4">
                          <h1 className="flex justify-start items-center text-base lg:text-2xl font-bold mb-3">
                            <span className="mr-1.5">
                              <FaBangladeshiTakaSign />
                            </span>
                            {price} / Per Night
                          </h1>
                          <Button
                            as={NextLink}
                            href="/rooms/roomdetails"
                            color="primary"
                            variant="ghost"
                            radius="full"
                            endContent={<FaArrowRight />}
                          >
                            More Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="hidden lg:block">
                    <div>
                      <h1 className="flex justify-start items-center text-base lg:text-2xl font-bold">
                        <span className="mr-1.5">
                          <FaBangladeshiTakaSign />
                        </span>
                        {price}
                      </h1>
                      <h5 className="font-semibold mb-3"> / Per Night</h5>
                      <Button
                        as={NextLink}
                        href="/rooms/roomdetails"
                        color="primary"
                        variant="ghost"
                        radius="full"
                        endContent={<FaArrowRight />}
                      >
                        More Details
                      </Button>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default FeaturedTours;
