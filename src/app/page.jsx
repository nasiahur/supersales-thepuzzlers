import { HomeDisplayDemo } from "@/components/Home/DisplayDemo";
import { HomeTitle } from "@/components/Home/Title";
import { FooterTrustedBrand } from "@/components/footer/TrustedBrand";
import Image from "next/image";

export default function Home() {
  
  return (
    <div className="w-full flex flex-col items-center justify-center gap-16 mt-16 relative">
      <HomeTitle/>
      <HomeDisplayDemo/>
      
      <div className="mt-4 w-full lg:w-[90%]">
        <p className="subtitle-1">Trusted by leading companies</p>
        <FooterTrustedBrand/>
      </div>
    </div>
  );
}
