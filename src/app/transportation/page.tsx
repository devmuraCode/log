import Header from "./sections/Header.tsx/Header";
import { SectionTwo } from "./sections/SectionTwo/SectionTwo";
import { SectionThree } from "./sections/SectionThree/SectionThree";
import { SectionFor } from "./sections/SectionFor/SectionFor";
import { Advantages } from "@/components/Advantages/Advantages";
import { DownDocs } from "../(home)/sections/DownDocs/DownDocs";
import { SectionFive } from "./sections/SectionFive/SectionFive";
import { ReviewSection } from "../(home)/sections/ReviewSection/ReviewSection";
import { Section } from "@/components/Section/Section";
import img from '@/assets/home.svg'

export default function Transportation() {
    return (
        <div>
            <Header/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFor/>
            <Advantages/>
            <DownDocs/>
            <SectionFive/>
            <Section />
        </div>
    );
}