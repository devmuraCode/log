import { Section } from "@/components/Section/Section";
import { DownDocs } from "../(home)/sections/DownDocs/DownDocs";
import { ReviewSection } from "../(home)/sections/ReviewSection/ReviewSection";
import { SectionFor } from "./sections/SectionFor/SectionFor";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import { SectionThree } from "./sections/SectionThree/SectionThree";
import { SectionTwo } from "./sections/SectionTwo/SectionTwo";
import img from '@/assets/home.svg'

export default function Representative() {
    return (
        <div>
            <SectionOne/>
            <SectionTwo/>
            <DownDocs/>
            <SectionFor/>
            <Section imageSrc={img}/>
        </div>
    )
}