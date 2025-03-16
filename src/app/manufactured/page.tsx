import { Section } from "@/components/Section/Section";
import { ReviewSection } from "../(home)/sections/ReviewSection/ReviewSection";
import { Header } from "./sections/Header/Header";
import { SectionFor } from "./sections/SectionFor/SectionFor";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import { SectionTwo } from "./sections/SectionTwo/SectionTwo";
import img from '@/assets/home.svg'
export default function Manufactured() {
    return (
        <div>
            <Header/>
            <SectionOne/>
            <SectionTwo/>
            <SectionFor/>
            <Section imageSrc={img}/>
        </div>
    );
}