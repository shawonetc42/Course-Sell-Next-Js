import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Section1 from "@/components/Home/Section1";
import Sections2 from "@/components/Home/Sections2";
import Sections3 from "@/components/Home/Sections3";
import Section4 from "@/components/Home/Section4";
import Footer from "@/components/Home/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Section1 />
      <Sections2 />
      <Sections3 />
      <Section4 />
      <Footer />
    </div>
  );
}
