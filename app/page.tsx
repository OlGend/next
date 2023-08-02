//page.tsx
import { Metadata } from "next";
import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import ReviewBrands from "@/components/ReviewBrands";
import PreviewHome from "@/components/PreviewHome";
import FilteredHome from "@/components/FilteredHome";
import GuideSlotsHome from "@/components/GuideSlotsHome";

export const metadata: Metadata = {
  title: "Home | New Brand",
  description: "Generated by create next app",
};



export default async function Home() {
 

  return (
    <>
      <PreviewHome />
      <TopBrands />
      <NewBrands />
      <ReviewBrands />
      <FilteredHome />
      <GuideSlotsHome />
    </>
  );
}
