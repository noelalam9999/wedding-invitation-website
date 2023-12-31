import Image from "next/image";
import styles from "./page.module.css";
import HeroBanner from "./components/HeroBanner";
import DetailedDateAndVenue from "./components/DetailedDateAndVenue";
import Quotation from "./components/Quotation";
import Footer from "./components/Footer";
import "mapbox-gl/dist/mapbox-gl.css";
export default function Home() {
  return (
    <>
      <HeroBanner />
      <DetailedDateAndVenue />
      <Quotation />
      <Footer />
    </>
  );
}
