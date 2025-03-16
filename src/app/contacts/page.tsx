import { Section } from "@/components/Section/Section";
import { ReviewSection } from "../(home)/sections/ReviewSection/ReviewSection";
import { Header } from "../about/sections/Header/Header";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import img from '@/assets/home2.svg'

export default function Contacts() {
    return (
        <div>
            <Header/>
            <SectionOne/>
            <Section imageSrc={img}/>
        </div>
    );
}