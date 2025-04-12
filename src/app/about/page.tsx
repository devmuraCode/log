import { SectionTwo2 } from "@/components/Section/SectionTwo";
import { ReviewSection } from "../(home)/sections/ReviewSection/ReviewSection";
import { Header } from "./sections/Header/Header";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import { SectionThree } from "./sections/SectionThree/SectionThree";
import { SectionTwo } from "./sections/SectionTwo/SectionTwo";
import img from "@/assets/girl.svg";

export default function About () {
    return (
        <div>
            <Header/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionTwo2 />
        </div>
    );
}