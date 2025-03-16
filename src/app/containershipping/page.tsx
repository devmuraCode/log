import { SectionThree } from "./sections/SectionThree/SectionThree";
import Header from "./sections/Header/Header";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import { SectionTwo } from "./sections/SectionTwo/SectionTwo";
import { Advantages } from "@/components/Advantages/Advantages";
import { SectionFor } from "./sections/SectionFor/SectionFor";
import { ReviewSection } from "../(home)/sections/ReviewSection/ReviewSection";
import { DownDocs } from "../(home)/sections/DownDocs/DownDocs";
import { Section } from "@/components/Section/Section";
import img from '@/assets/home.svg'

export default function ContainerShipping () {
    return (
        <div>
            <Header/>
            <SectionOne/>
            <SectionTwo/>
            <DownDocs/>
            <Advantages/>
            <SectionFor/>
            <Section imageSrc={img}/>
        </div>
    )
}