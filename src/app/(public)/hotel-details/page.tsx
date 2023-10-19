import ImageGroup from "@/app/components/ui/ImageGroup";
import { Image } from "antd";
import RootLayout from "@/app/layout";
import dynamic from "next/dynamic";

function HotelDetails() {
  return (
    <RootLayout>
      {
        <>
       
        </>
      }
    </RootLayout>
  );
}

export default dynamic(() => Promise.resolve(HotelDetails), { ssr: false });
