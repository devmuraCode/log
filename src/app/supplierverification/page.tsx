import { Section } from "@/components/Section/Section";
import { ReviewSection } from "../(home)/sections/ReviewSection/ReviewSection";
import Header from "./sections/Header/Header";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import { SectionThree } from "./sections/SectionThree/SectionThree";
import { SectionTwo } from "./sections/SectionTwo/SectionTwo";
import img from '@/assets/home.svg'

export default function SupplierVerification() {
    return (
        <div>
            <Header/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <Section />
        </div>
    );
}