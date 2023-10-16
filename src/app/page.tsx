import Image from "next/image";
import Navbar from "./components/ui/navbar";
import dynamic from "next/dynamic";
import RootLayout from "./layout";
import { Hero } from "./components/ui/hero";
import { FeaturedLocation } from "./components/ui/Featured-location";
import FeaturedTours from "./components/ui/Ft-tour";

function Home() {
  return (
    <RootLayout>
 
      <Hero></Hero>
      <FeaturedLocation></FeaturedLocation>
      <FeaturedTours></FeaturedTours>
    </RootLayout>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
