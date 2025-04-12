import { Section } from "@/components/Section/Section";
import { ReviewSection } from "../(home)/sections/ReviewSection/ReviewSection";
import { Header } from "../about/sections/Header/Header";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import img from '@/assets/home2.svg'
import { SectionTwo2 } from "@/components/Section/SectionTwo";

export default function Contacts() {
    return (
        <div>
            <Header/>
            <SectionOne/>
            <SectionTwo2/>
        </div>
    );
}