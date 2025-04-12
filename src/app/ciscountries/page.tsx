import { Advantages } from "@/components/Advantages/Advantages";
import { Header } from "./sections/Header/Header";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import { SectionTwo } from "./sections/SectionTwo/SectionTwo";
import { SectionThree } from "./sections/SectionThree/SectionThree";
import { ReviewSection } from "../(home)/sections/ReviewSection/ReviewSection";
import { DownDocs } from "../(home)/sections/DownDocs/DownDocs";
import { Section } from "@/components/Section/Section";
import img from '@/assets/home.svg'

export default function CisCountries (){
  return (
    <div>
      <Header/>
      <SectionOne/>
      <DownDocs/>
      <Advantages/>
      <SectionThree/>
      <Section />
    </div>
  )
}
