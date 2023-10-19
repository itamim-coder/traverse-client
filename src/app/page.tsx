import dynamic from "next/dynamic";
import RootLayout from "./layout";
import { Hero } from "./components/ui/hero";
import { FeaturedLocation } from "./components/ui/featuredLocation";
import FeaturedTours from "./components/ui/featuredTour";
import SearchPage from "./components/ui/search";
import NavBar from "./components/ui/navbar";
import Footer from "./components/ui/footer";

function Home() {
  return (
    <RootLayout>
      <NavBar></NavBar>
      <Hero></Hero>
      <SearchPage></SearchPage>
      <FeaturedLocation></FeaturedLocation>
      <FeaturedTours></FeaturedTours>
      <Footer></Footer>
    </RootLayout>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
